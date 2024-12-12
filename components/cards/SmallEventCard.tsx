import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

import FeatherIcon from "react-native-vector-icons/Feather";
import { SupabaseEventType } from "@/types";

export default function SmallEventCard({
  event,
}: {
  event: SupabaseEventType;
}) {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push(`/meet/${event.id.toString()}`);
        }}
      >
        <View style={styles.card}>
          <Image
            alt=""
            source={{ uri: event.image }}
            style={styles.cardCover}
          />

          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              {event.title || "Sample Event"}
            </Text>
            <Text style={styles.cardSubtitle}>
              {event.category || "Event Details"}
            </Text>
          </View>

          <View style={styles.cardAction}>
            <FeatherIcon color="#6A6D70" name="more-vertical" size={20} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
    marginBottom: 12,
  },
  cardCover: {
    width: 74,
    height: 74,
    borderRadius: 18,
    marginRight: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: 19,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: "#070b11",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: "#070b11",
    opacity: 0.6,
  },
  cardAction: {
    paddingHorizontal: 8,
  },
});
