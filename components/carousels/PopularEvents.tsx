import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";

import HomeEventCard from "../cards/HomeEventCard";

import { useEvents } from "@/contexts/EventsContext";

const { width: screenWidth } = Dimensions.get("window");

export default function PopularEvents() {
  const { allEventsForCurrentCity } = useEvents();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Beauty & Fashion</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {allEventsForCurrentCity
            .filter((event) => event.category === "Beauty")
            .map((event, index) => (
              <View key={event.id || index} style={styles.cardWrapper}>
                <HomeEventCard event={event} />
              </View>
            ))}
        </ScrollView>
      </View>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Food & Drinks</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {allEventsForCurrentCity
            .filter((event) => event.category === "Food")
            .map((event, index) => (
              <View key={event.id || index} style={styles.cardWrapper}>
                <HomeEventCard event={event} />
              </View>
            ))}
        </ScrollView>
      </View>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Cars & Bikes</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {allEventsForCurrentCity
            .filter((event) => event.category === "Cars")
            .map((event, index) => (
              <View key={event.id || index} style={styles.cardWrapper}>
                <HomeEventCard event={event} />
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  list: {
    marginBottom: 16,
  },
  listHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  cardWrapper: {
    width: screenWidth * 0.75,
    marginRight: 12,
  },
});
