import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "@/constants/Colors"; // Assuming you have this

const EventCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://picsum.photos/200/300150" }}
        style={styles.eventImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.eventDate}>Something here</Text>
        <Text style={styles.eventTitle}>Something here</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.eventLocation}>Something here</Text>
        </View>

        <View style={styles.iconContainer}>
          <Text>🎉 🎂</Text>
        </View>

        {/* Bottom Badge/Tag */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Something here</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180, // Adjust based on need
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  eventImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  detailsContainer: {
    padding: 10,
  },
  eventDate: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  eventLocation: {
    fontSize: 14,
    color: "#888",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  badgeContainer: {
    backgroundColor: Colors["light"].tint,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    color: "#fff",
  },
});

export default EventCard;
