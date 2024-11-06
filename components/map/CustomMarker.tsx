import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

import { SupabaseEventType } from "@/types";

const CustomMarker = ({ event }: { event: SupabaseEventType }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/meet/${event.id.toString()}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.markerWrapper}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: event.image }} style={styles.innerImage} />
        </View>

        <View style={styles.pointer} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  markerWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "grey",
    backgroundColor: "#fff",
  },
  innerImage: {
    width: "100%",
    height: "100%",
  },
  pointer: {
    width: 10,
    height: 10,
    backgroundColor: Colors.light.tint,
    borderRadius: 10,
    transform: [{ rotate: "45deg" }],
    marginTop: -5,
  },
});

export default CustomMarker;
