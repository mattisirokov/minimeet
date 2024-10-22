import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type FilterItemProps = {
  icon: keyof typeof FontAwesome.glyphMap;
  name: string;
};

export default function FilterItem({ icon, name }: FilterItemProps) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} size={24} color={Colors["light"].text} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
});
