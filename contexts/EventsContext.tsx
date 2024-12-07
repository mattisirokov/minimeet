import { createContext, useContext, useState, useEffect } from "react";

import { supabase } from "@/config/supabase";

import {
  EventsContextType,
  UserProfile,
  SupabaseEventType,
  EventsLoadingState,
} from "@/types";

import { useAuthenticatedUser } from "@/contexts/AuthContext";

const EventsAndDataContext = createContext<EventsContextType>({
  allEventsForCurrentCity: [],
  allEventsForCurrentUser: [],
  topCreators: [],
  eventCategories: [],
  getEventById: () => undefined,
  createNewEvent: async () => {},
  status: {
    events: "fetching",
    categories: "fetching",
    creators: "fetching",
  },
});

export const EventsAndDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { userProfile } = useAuthenticatedUser();

  const [allEvents, setAllEvents] = useState<SupabaseEventType[]>([]);
  const [eventCategories, setEventCategories] = useState<any[]>([]);
  const [topCreators, setTopCreators] = useState<UserProfile[]>([]);

  const [loadingState, setLoadingState] = useState<EventsLoadingState>({
    events: "fetching",
    categories: "fetching",
    creators: "fetching",
  });

  // Get all the events for the users current city

  async function fetchAllMiniMeets() {
    setLoadingState((prev) => ({ ...prev, events: "fetching" }));
    const { data, error } = await supabase.from("Events").select("*");

    if (error) {
      setLoadingState((prev) => ({ ...prev, events: "error" }));
      console.error("Error fetching data:", error);
      return;
    }
    setAllEvents(data as SupabaseEventType[]);
    setLoadingState((prev) => ({ ...prev, events: "complete" }));
  }

  // Fetch all the event categories
  async function fetchAllEventCategories() {
    setLoadingState((prev) => ({ ...prev, categories: "fetching" }));
    const { data, error } = await supabase.from("Categories").select("*");

    if (error) {
      setLoadingState((prev) => ({ ...prev, categories: "error" }));
      console.error("Error fetching data:", error);
      return;
    }
    setEventCategories(data);
    setLoadingState((prev) => ({ ...prev, categories: "complete" }));
  }

  // Fetch all the top creators
  async function fetchAllTopCreators() {
    setLoadingState((prev) => ({ ...prev, creators: "fetching" }));
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("top_creator", true);

    if (error) {
      setLoadingState((prev) => ({ ...prev, creators: "error" }));
      console.error("Error fetching data:", error);
      return;
    }

    setTopCreators(data);
    setLoadingState((prev) => ({ ...prev, creators: "complete" }));
  }

  // Get a single event by id

  function getEventById(id: string | string[]) {
    const searchId = Array.isArray(id) ? id[0] : id;
    return allEvents.find((event) => event.id.toString() === searchId);
  }

  // function to create a new event

  async function createNewEvent(
    event: Omit<
      SupabaseEventType,
      "id" | "created_at" | "updated_at" | "host_id"
    >
  ) {
    const currentUserId = userProfile.user_id;

    if (!currentUserId) {
      throw new Error("User must be logged in to create an event");
    }

    const { data, error } = await supabase
      .from("Events")
      .insert([{ ...event, host_id: currentUserId }])
      .select();

    if (error) {
      console.error("Error creating new event:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error("No data returned from insert operation");
    }

    const newEvent = data[0] as SupabaseEventType;

    setAllEvents((prevEvents) => [...prevEvents, newEvent]);

    return newEvent;
  }

  useEffect(() => {
    fetchAllMiniMeets();
    fetchAllEventCategories();
    fetchAllTopCreators();
  }, []);

  const value: EventsContextType = {
    allEventsForCurrentCity: allEvents,
    allEventsForCurrentUser: [],
    status: loadingState,
    eventCategories,
    topCreators,
    getEventById,
    createNewEvent: async (event: SupabaseEventType) => {
      await createNewEvent(event);
    },
  };

  return (
    <EventsAndDataContext.Provider value={value}>
      {children}
    </EventsAndDataContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsAndDataContext);
  if (context === undefined) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
