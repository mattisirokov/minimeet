import { View, StyleSheet } from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import Map from "@/components/map/Map";
import BottomDrawer from "@/components/bottom-sheet/BottomDrawer";
import BottomSheetContent from "@/components/bottom-sheet/BottomSheetContent";

export default function ExploreScreen() {
  const { allEventsForCurrentCity } = useEvents();

  // TODO: There's an issue here with the gelocation service, it's taking too long to resolve..

  return (
    <View style={styles.screen}>
      <View style={styles.mapContainer}>
        <Map events={allEventsForCurrentCity} />
      </View>
      <View style={styles.bottomSheetContainer}>
        <BottomDrawer>
          <BottomSheetContent events={allEventsForCurrentCity} />
        </BottomDrawer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomSheetContainer: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
});
