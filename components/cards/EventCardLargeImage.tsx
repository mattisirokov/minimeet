import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import { useRouter } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "@/constants/Colors";

type EventCardProps = {
  title: string;
  image: string;
  category: string;
  city: string;
  id: number;
};

const EventCardLargeImage = ({
  title,
  image,
  category,
  city,
  id,
}: EventCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/meet/${id.toString()}`);
  };

  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={handlePress}>
      <View style={styles.lightPill}>
        <Text style={styles.lightPillText}>{category}</Text>
      </View>
      <View style={styles.cityPill}>
        <FontAwesome name="map-marker" size={16} color={"white"} />
        <Text style={styles.cityPillText}>{city}</Text>
      </View>
      <Image
        source={{ uri: image }}
        style={styles.itemImage}
        contentFit="cover"
      />
      <View style={styles.imageOverlay} />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    width: "100%",
    height: 250,
    borderRadius: Colors["light"].borderRadius,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  itemTitle: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  lightPill: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    opacity: 0.5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    zIndex: 100,
  },
  lightPillText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  cityPill: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    zIndex: 100,
  },
  cityPillText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EventCardLargeImage;
