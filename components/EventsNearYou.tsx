import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import React from "react";
import EventCard from "./EventCard";
import Carousel from "react-native-reanimated-carousel";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const events = [
  {
    id: 1,
    title: "Making pizza with Italians",
    image: "https://picsum.photos/200/300",
    icon: "cutlery",
    category: "Food",
    city: "Paris",
  },
  {
    id: 2,
    title: "Beer tasting with Germans",
    image: "https://picsum.photos/200/300",
    icon: "cutlery",
    category: "Drinks",
    city: "Berlin",
  },
  {
    id: 3,
    title: "Wine tasting in France",
    image: "https://picsum.photos/200/300",
    icon: "cutlery",
    category: "Drinks",
    city: "Paris",
  },
  {
    id: 4,
    title: "Sushi making in Japan",
    image: "https://picsum.photos/200/300",
    icon: "cutlery",
    category: "Food",
    city: "Tokyo",
  },
];

const { width } = Dimensions.get("window");

const EventsNearYou = () => {
  return (
    <View style={styles.componentWrapper}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Events nearby</Text>
        <Button title="See all" />
      </View>
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        autoPlayInterval={5000}
        data={events}
        mode="parallax"
        renderItem={({ item }) => (
          <EventCard
            key={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
            city={item.city}
            icon={item.icon as keyof typeof FontAwesome.glyphMap}
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
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardWrapper: {
    width: width * 0.85, // Adjusted width to allow next item to peek
    paddingHorizontal: 10,
  },
});

export default EventsNearYou;
