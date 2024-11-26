import { View, StyleSheet, FlatList } from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import EventCardLargeImage from "@/components/cards/EventCardLargeImage";
import { SupabaseEventType } from "../../types";

export default function MyEventsScreen() {
  const { allEventsForCurrentCity } = useEvents();

  const renderItem = ({ item }: { item: SupabaseEventType }) => (
    <EventCardLargeImage
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.image}
      category={item.category}
      city={item.city}
    />
  );

  return (
    <FlatList<SupabaseEventType>
      data={allEventsForCurrentCity}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
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
