import { StyleSheet, ScrollView, Text } from "react-native";

import EventCard from "../cards/EventCard";
import { SupabaseEventType } from "@/types";

type EventAtteningProps = {
  events: SupabaseEventType[] | undefined;
};

export default function EventsAttending({ events }: EventAtteningProps) {
  if (!events) return <Text>No events to show</Text>; // TODO: replace this with an empty screen

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {events.map((event, index) => {
        return <EventCard event={event} key={index} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 2,
    paddingHorizontal: 16,
  },
});
