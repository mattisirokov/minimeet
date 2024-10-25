import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

import { ExtendedUser } from "@/types";

const CreatorCard = ({ creator }: { creator: ExtendedUser }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: creator.avatar_url }} style={styles.eventImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.eventDate}>{creator.first_name}</Text>
        <Text style={styles.eventTitle}>{creator.first_name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.eventLocation}>
            {creator.top_creator ? "Top creator" : "Creator"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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

export default CreatorCard;
