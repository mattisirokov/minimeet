import { User } from "@supabase/supabase-js";

export type SupabaseEventType = {
  id: number;
  created_at: string;
  title: string;
  image: string;
  city: string;
  street_address: string;
  postal_code: string;
  number_of_attendees: number;
  date_of_event: string;
  time_of_event: string;
  host_id: string;
  category: string;
};

export interface EventWithCoordinates extends SupabaseEventType {
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export type EventCategory = {
  title: string;
  image: string;
};

export interface ExtendedUser extends User {
  user_id?: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  top_creator?: boolean;
}
