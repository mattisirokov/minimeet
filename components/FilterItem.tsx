import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SupabaseCategoryType } from "@/types";

const categoryToIcon: { [key: string]: string } = {
  Music: "music",
  Sports: "futbol-o",
  Food: "cutlery",
  Arts: "paint-brush",
  Technology: "laptop",
  Education: "graduation-cap",
  Networking: "users",
  Entertainment: "star",
  default: "calendar",
};

type FilterItemProps = {
  eventCategory: SupabaseCategoryType;
  onPress?: () => void;
};

export default function FilterItem({
  eventCategory,
  onPress,
}: FilterItemProps) {
  const iconName =
    categoryToIcon[eventCategory.title] || categoryToIcon.default;

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.iconContainer}>
        <FontAwesome name={iconName as any} size={24} color="#000" />
      </View>
      <Text style={styles.text} numberOfLines={2}>
        {eventCategory.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "white",
    opacity: 0.8,
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
    marginTop: 3,
    textAlign: "center",
  },
});
