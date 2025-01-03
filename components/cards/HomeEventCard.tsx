import React, { useState, useCallback } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

import { useRouter } from "expo-router";

import { FontAwesome } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

import { SupabaseEventType } from "@/types";

interface HomeEventCardProps {
  event: SupabaseEventType;
}

export default function HomeEventCard({ event }: HomeEventCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
  }, []);

  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/meet/${event.id.toString()}`)}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Image
            alt=""
            resizeMode="cover"
            style={styles.cardImg}
            source={{ uri: event.image }}
          />
          <View style={styles.cardLikeWrapper}>
            <TouchableOpacity onPress={handleSave}>
              <View style={styles.cardLike}>
                <FontAwesome
                  color={isSaved ? "#ea266d" : "#fff"}
                  name="heart"
                  solid={isSaved}
                  size={20}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{event.title}</Text>
            <View style={styles.pricePill}>
              <Text style={styles.cardPrice}>
                <Text style={styles.cardPriceBold}>${event.ticket_price}</Text>
                <Text> /ticket</Text>
              </Text>
            </View>
          </View>

          <Text style={styles.cardDates}>{event.date_of_event}</Text>

          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.cardDescription}
          >
            {event.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    position: "relative",
    borderRadius: Colors.borderRadius,
    backgroundColor: Colors.background,
    marginBottom: 16,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTop: {
    borderTopLeftRadius: Colors.borderRadius,
    borderTopRightRadius: Colors.borderRadius,
  },
  cardImg: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: Colors.borderRadius,
    borderTopRightRadius: Colors.borderRadius,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.text,
    flex: 1,
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 4,
    fontSize: 15,
    fontWeight: "500",
    color: "#232425",
  },
  cardDates: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.text + "80",
  },
  cardPrice: {
    fontSize: 14,
    color: Colors.text,
  },
  cardPriceBold: {
    fontWeight: "600",
  },
  cardLikeWrapper: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  cardLike: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  pricePill: {
    backgroundColor: Colors.tint + "20",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  cardDescription: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.text + "90",
  },
});
