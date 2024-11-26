import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "@/constants/Colors";
import { getCategoryIcon } from "@/services/categoryIconHelper";

import { EventCategory } from "@/types";

const CategoryCard = ({ category }: { category: EventCategory }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: category.image }} style={styles.backgroundImage} />
      <View style={styles.imageOverlay} />
      <View style={styles.contentContainer}>
        <FontAwesome
          name={getCategoryIcon(category)}
          size={30}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.name}>{category.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 150,
    borderRadius: Colors["light"].borderRadius - 5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  contentContainer: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: Colors["light"].borderRadius - 5,
    zIndex: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginBottom: 10,
  },
});

export default CategoryCard;
