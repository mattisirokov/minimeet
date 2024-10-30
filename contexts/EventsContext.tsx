import { createContext, useContext, useState, useEffect } from "react";

import { supabase } from "@/config/supabase";

import { EventCategory, ExtendedUser, SupabaseEventType } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

type EventsContextType = {
  allEventsForCurrentCity: SupabaseEventType[];
  getEventById: (id: string | string[]) => SupabaseEventType | undefined;
  isLoading: boolean;
  eventCategories: EventCategory[];
  topCreators: ExtendedUser[];
  createNewEvent: (event: SupabaseEventType) => Promise<void>;
};

const EventsContext = createContext<EventsContextType>({
  allEventsForCurrentCity: [],
  getEventById: () => undefined,
  isLoading: true,
  eventCategories: [],
  topCreators: [],
  createNewEvent: async () => {},
});

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  const [allEventsForCurrentCity, setAllEventsForCurrentCity] = useState<
    SupabaseEventType[]
  >([]);
  const [eventCategories, setEventCategories] = useState<any[]>([]);
  const [topCreators, setTopCreators] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const CURRENT_CITY = "Helsinki"; // TODO: get this from user location

  // Get all the events for the users current city

  async function fetchAllEventsForUsersCity() {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("Events")
      .select("*")
      .eq("city", CURRENT_CITY);

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    setAllEventsForCurrentCity(data as SupabaseEventType[]);
    setIsLoading(false);
  }

  // Fetch all the event categories
  async function fetchAllEventCategories() {
    const { data, error } = await supabase.from("Categories").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    setEventCategories(data);
  }

  // Fetch all the top creators
  async function fetchAllTopCreators() {
    const { data, error } = await supabase
      .from("Users")
      .select("*")
      .eq("top_creator", true);

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    setTopCreators(data);
  }

  // Get a single event by id

  function getEventById(id: string | string[]) {
    const searchId = Array.isArray(id) ? id[0] : id;
    return allEventsForCurrentCity.find(
      (event) => event.id.toString() === searchId
    );
  }

  // function to create a new event

  async function createNewEvent(
    event: Omit<
      SupabaseEventType,
      "id" | "created_at" | "updated_at" | "host_id"
    >
  ) {
    // current user ID
    const currentUserId = user.user_id;

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

    setAllEventsForCurrentCity((prevEvents) => [...prevEvents, newEvent]);

    return newEvent;
  }

  useEffect(() => {
    fetchAllEventsForUsersCity();
    fetchAllEventCategories();
    fetchAllTopCreators();
  }, []);

  const value: EventsContextType = {
    allEventsForCurrentCity,
    getEventById,
    isLoading,
    eventCategories,
    topCreators,
    // @ts-ignore
    createNewEvent,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
