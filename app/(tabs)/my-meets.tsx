import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import EventCard from "@/components/cards/EventCard";

import { useEvents } from "@/contexts/EventsContext";
import EventRowItem from "@/components/event-list/EventRowItem";

export default function MyEventsScreen() {
  const { allEventsForCurrentCity } = useEvents();

  return (
    <ScrollView style={styles.container}>
      {allEventsForCurrentCity.slice(0, 3).map((event) => (
        <EventRowItem key={event.id} event={event} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemContainer: {
    marginBottom: 20,
    minHeight: 20,
  },
});
