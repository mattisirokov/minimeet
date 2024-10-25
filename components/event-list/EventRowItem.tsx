import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View, Text } from "@/components/Themed";
import { useRouter } from "expo-router";

import { SupabaseEventType } from "@/types";

export default function EventRowItem({ event }: { event: SupabaseEventType }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/modal/${event.id.toString()}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.image }} style={styles.eventImage} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{event.title}</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.infoText}>{event.date_of_event}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.infoText}>{event.time_of_event}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoColumn: {
    flexDirection: "column",
  },
  label: {
    fontSize: 12,
    color: "#888",
    marginBottom: 2,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
