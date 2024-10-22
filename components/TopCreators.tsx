import { StyleSheet, Image } from "react-native";
import { View, Text } from "./Themed";
import Colors from "@/constants/Colors";

const topCreators = [
  {
    name: "John Doe",
    description: "I love to make meetups",
    city: "Helsinki",
    image:
      "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
  },
  {
    name: "Jane Smith",
    description: "Passionate about community events",
    city: "Espoo",
    image:
      "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
  },
  {
    name: "Mike Johnson",
    description: "Organizing tech meetups since 2010",
    city: "Tampere",
    image:
      "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
  },
];

const TopCreators = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our top meet makers</Text>
      {topCreators.map((creator, index) => (
        <View key={index} style={styles.creatorItem}>
          <Image source={{ uri: creator.image }} style={styles.creatorImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{creator.name}</Text>
            <Text style={styles.description}>{creator.description}</Text>
            <Text style={styles.city}>{creator.city}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingBottom: Colors["light"].bottomNavigationHeight + 30,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  creatorItem: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors["light"].text,
    marginBottom: 20,
    borderRadius: 15, // Curved edges
    overflow: "hidden", // Ensures image is rounded
    backgroundColor: "#f8f8f8",
  },
  creatorImage: {
    width: "100%",
    height: 150, // Adjust this for the image height
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  city: {
    fontSize: 12,
    color: Colors["light"].text,
  },
});

export default TopCreators;
