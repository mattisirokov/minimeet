import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import ListViewToggle from "@/components/map/ListViewToggle";
import Map from "@/components/Map";
import EventListView from "@/components/event-list/EventListView";

function MapOrListToggleContainer({
  isListView,
  setIsListView,
}: {
  isListView: boolean;
  setIsListView: (isListView: boolean) => void;
}) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(isListView ? 180 : 0, { duration: 500 });
  }, [isListView]);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      rotation.value,
      [0, 180],
      [0, 180],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
      pointerEvents: isListView ? "none" : "auto",
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      rotation.value,
      [0, 180],
      [180, 360],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
      pointerEvents: isListView ? "auto" : "none",
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <ListViewToggle
          selected={isListView ? "List" : "Map"}
          setSelected={(selected) => setIsListView(selected === "List")}
        />
      </View>

      <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
        <Map />
      </Animated.View>
      <Animated.View
        style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
      >
        <EventListView />
      </Animated.View>
    </View>
  );
}

export default function TabTwoScreen() {
  const [isListView, setIsListView] = useState(false);

  return (
    <View style={styles.screen}>
      <MapOrListToggleContainer
        isListView={isListView}
        setIsListView={setIsListView}
      />
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
  toggleContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  flipCard: {
    ...StyleSheet.absoluteFillObject,
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    transform: [{ rotateY: "180deg" }],
  },
});
