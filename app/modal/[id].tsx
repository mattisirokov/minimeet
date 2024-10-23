import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { Text, View } from "@/components/Themed";
import SingleEventHeader from "@/components/single-event/SingleEventHeader";

import { getEventById } from "@/config/helpers";
export default function ModalScreen() {
  const { id } = useLocalSearchParams();

  const event = getEventById(id);

  return (
    <View style={styles.container}>
      <SingleEventHeader event={event} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
