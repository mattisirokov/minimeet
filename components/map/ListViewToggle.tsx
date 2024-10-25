import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";

type ListViewToggleProps = {
  selected: "Map" | "List";
  setSelected: (selected: "Map" | "List") => void;
};

export default function ListViewToggle({
  selected,
  setSelected,
}: ListViewToggleProps) {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[styles.toggleButton, selected === "Map" && styles.activeButton]}
        onPress={() => setSelected("Map")}
      >
        <Text
          style={selected === "Map" ? styles.activeText : styles.inactiveText}
        >
          Map
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.toggleButton,
          selected === "List" && styles.activeButton,
        ]}
        onPress={() => setSelected("List")}
      >
        <Text
          style={selected === "List" ? styles.activeText : styles.inactiveText}
        >
          List
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "white",
  },
  activeButton: {
    backgroundColor: Colors.light.tint,
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
  inactiveText: {
    color: Colors.light.tint,
  },
});
