import { View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import FilterItem from "./FilterItem";

export default function FilterCarousel() {
  const filterItems = [
    { icon: "cutlery" as const, name: "Food" },
    { icon: "cutlery" as const, name: "Cutlery" },
    { icon: "code" as const, name: "Coding" },
    { icon: "clock-o" as const, name: "Watches" },
    { icon: "car" as const, name: "Cars" },
  ];
  return (
    <View style={styles.filterContainer}>
      {filterItems.map((item) => (
        <FilterItem key={item.name} icon={item.icon} name={item.name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    width: "100%",
    marginTop: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderColor: "red",
  },
});
