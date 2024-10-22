import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";

const featuredCategories = [
  { name: "Music", color: "#FF6363", icon: "music" },
  { name: "Food", color: "#FF9F43", icon: "cutlery" },
  { name: "Art", color: "#6C5CE7", icon: "paint-brush" },
  { name: "Sports", color: "#45AAF2", icon: "futbol-o" },
  { name: "Fashion", color: "#EC3B83", icon: "shopping-bag" },
  { name: "Beauty", color: "#FFA8A8", icon: "magic" },
  { name: "Cars", color: "#2ECC71", icon: "car" },
  { name: "Watches", color: "#2ECC71", icon: "clock-o" },
];

const FeaturedCategories = () => {
  return (
    <View style={styles.componentWrapper}>
      <Text style={styles.header}>Featured Categories</Text>
      <View style={styles.categoriesContainer}>
        {featuredCategories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <View
              style={[styles.categoryIcon, { backgroundColor: category.color }]}
            >
              <FontAwesome
                name={category.icon as any}
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentWrapper: {
    width: "100%",
    paddingTop: 15,

    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "22%",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 11,
    textAlign: "center",
  },
});

export default FeaturedCategories;
