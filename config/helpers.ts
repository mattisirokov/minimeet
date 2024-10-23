import { events } from "@/placeholder-data/placeholder-events";

export const getEventById = (id: string | string[]) => {
  const searchId = Array.isArray(id) ? id[0] : id;
  return events.find((event) => event.id.toString() === searchId);
};
