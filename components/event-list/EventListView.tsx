import { ScrollView, StyleSheet } from "react-native";

import EventRowItem from "./EventRowItem";

import { events } from "@/placeholder-data/placeholder-events";

const EventListView = () => {
  return (
    <ScrollView style={styles.container}>
      {events.map((event) => (
        <EventRowItem key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
    padding: 15,
  },
});

export default EventListView;
