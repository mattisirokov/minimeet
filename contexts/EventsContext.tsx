import { createContext, useContext, useState, useEffect } from "react";

import { supabase } from "@/config/supabase";

import { EventCategory, ExtendedUser, SupabaseEventType } from "@/types";

type EventsContextType = {
  allEventsForCurrentCity: SupabaseEventType[];
  getEventById: (id: string | string[]) => SupabaseEventType | undefined;
  isLoading: boolean;
  eventCategories: EventCategory[];
  topCreators: ExtendedUser[];
};

const EventsContext = createContext<EventsContextType>({
  allEventsForCurrentCity: [],
  getEventById: () => undefined,
  isLoading: true,
  eventCategories: [],
  topCreators: [],
});

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

    console.log("Fetched events:", data);
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

    console.log("Fetched categories:", data);
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

    console.log("Fetched top creators:", data);
    setTopCreators(data);
  }

  // Get a single event by id

  function getEventById(id: string | string[]) {
    const searchId = Array.isArray(id) ? id[0] : id;
    return allEventsForCurrentCity.find(
      (event) => event.id.toString() === searchId
    );
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
