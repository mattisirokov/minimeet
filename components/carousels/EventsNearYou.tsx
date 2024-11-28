import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { router } from "expo-router";

import { useEvents } from "@/contexts/EventsContext";

const EventsNearYou = () => {
  const { allEventsForCurrentCity } = useEvents();

  return (
    <View style={styles.componentWrapper}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upcoming events</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/explore")}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentWrapper: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default EventsNearYou;
