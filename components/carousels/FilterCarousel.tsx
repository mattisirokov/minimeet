import { View, StyleSheet } from "react-native";

import { filterItems } from "@/placeholder-data/placeholder-filters";
import FilterItem from "../FilterItem";

export default function FilterCarousel() {
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
