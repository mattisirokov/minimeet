import { View, StyleSheet } from "react-native";

import Map from "@/components/map/Map";

import { useEvents } from "@/contexts/EventsContext";

function MapContainer() {
  const { allEventsForCurrentCity } = useEvents();

  return (
    <View style={styles.container}>
      <Map events={allEventsForCurrentCity} />
    </View>
  );
}

export default function TabTwoScreen() {
  return (
    <View style={styles.screen}>
      <MapContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
