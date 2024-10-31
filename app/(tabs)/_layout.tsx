import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} {...props} />;
}

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors["light"].tabIconSelected,
          tabBarInactiveTintColor: Colors["light"].tabIconDefault,
          headerShown: useClientOnlyValue(false, false),

          tabBarItemStyle: {
            height: 60,
            paddingVertical: 5,
          },
          tabBarIconStyle: {
            marginBottom: 3,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Welcome",
            tabBarIcon: ({ color }) => <TabBarIcon name="feed" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="search" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: true,
            tabBarIcon: () => (
              <View style={styles.createIconContainer}>
                <TabBarIcon name="magic" color={Colors["light"].tabBarColor} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="my-meets"
          options={{
            title: "My meets",
            headerShown: true,
            headerTitle: "My meets",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="calendar" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerTitle: "Settings",
            headerShown: true,
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors["light"].background,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  createIconContainer: {
    backgroundColor: Colors["light"].tabIconSelected,
    borderRadius: Colors["light"].borderRadius,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
