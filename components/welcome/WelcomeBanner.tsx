import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { View, Text } from "../Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "@/constants/Colors";
import FilterCarousel from "../carousels/FilterCarousel";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome Matti Sirokov!</Text>
      </View>

      <Text style={styles.title}>Find Mini Meets Near You</Text>

      <Text style={styles.subtext}>258 events near Helsinki</Text>

      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color={Colors["light"].text} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="gray"
        />
      </View>
      <FilterCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    paddingRight: 20,
    paddingBottom: 35,
    paddingLeft: 20,
    backgroundColor: Colors["light"].tint,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtext: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: Colors["light"].borderRadius,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default Header;
