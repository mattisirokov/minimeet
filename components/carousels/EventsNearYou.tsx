import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

import Carousel from "react-native-reanimated-carousel";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// import { events } from "@/placeholder-data/placeholder-events";

import { useEvents } from "@/contexts/EventsContext";
import EventCard from "../cards/EventCard";

const { width } = Dimensions.get("window");

const EventsNearYou = () => {
  const router = useRouter();
  const { allEventsForCurrentCity } = useEvents();
  return (
    <View style={styles.componentWrapper}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upcoming events</Text>
        <TouchableOpacity onPress={() => router.push("/explore")}>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        autoPlayInterval={5000}
        data={allEventsForCurrentCity}
        mode="parallax"
        renderItem={({ item }) => (
          <EventCard
            key={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
            city={item.city}
            icon={item.icon as keyof typeof FontAwesome.glyphMap}
            id={item.id}
          />
        )}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        scrollAnimationDuration={1000}
      />
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
