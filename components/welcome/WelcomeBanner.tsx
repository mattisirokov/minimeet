import React from "react";
import { StyleSheet, Image, TextInput, Pressable } from "react-native";
import { View, Text } from "../Themed";
import { router } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "@/constants/Colors";
import FilterCarousel from "../carousels/FilterCarousel";

import { useAuth } from "@/contexts/AuthContext";
import { useEvents } from "@/contexts/EventsContext";

const Header = () => {
  const { session, userProfile } = useAuth();
  const { allEventsForCurrentCity } = useEvents();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {session && userProfile ? (
          <>
            <Image
              source={{
                uri: userProfile.avatar_url,
              }}
              style={styles.profileImage}
            />
            <Text style={styles.welcomeText}>
              Welcome {userProfile.first_name || userProfile.email}!
            </Text>
          </>
        ) : (
          <Pressable
            onPress={() => router.push("/login-modal")}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        )}
      </View>

      <Text style={styles.title}>Find MiniMeets Near You</Text>

      <Text style={styles.subtext}>
        {allEventsForCurrentCity.length} events near Helsinki
      </Text>

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
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  loginText: {
    color: Colors["light"].tint,
    fontSize: 16,
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
