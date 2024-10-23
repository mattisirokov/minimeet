import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { featuredCategories } from "@/placeholder-data/placeholder-categories";
import Colors from "@/constants/Colors";

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
    paddingBottom: Colors["light"].bottomNavigationHeight + 30,
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
    opacity: 0.75,
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
