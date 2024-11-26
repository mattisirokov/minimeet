import { View, ScrollView, StyleSheet } from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import EventCardLargeImage from "@/components/cards/EventCardLargeImage";

export default function MyEventsScreen() {
  const { allEventsForCurrentCity } = useEvents();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.eventsContainer}>
        {allEventsForCurrentCity.map((event) => (
          <EventCardLargeImage
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            category={event.category}
            city={event.city}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  eventsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
