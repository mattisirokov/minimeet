import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

import SmallEventCard from "../cards/SmallEventCard";

import { useEvents } from "@/contexts/EventsContext";

export default function PopularEvents() {
  const { allEventsForCurrentCity } = useEvents();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Popular Events</Text>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Beauty & Fashion</Text>

            <TouchableOpacity
              onPress={() => {
                router.push("/explore");
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Beauty")
              .map((event, index) => {
                return <SmallEventCard event={event} key={index} />;
              })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Sports</Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/explore");
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Sports")
              .map((event, index) => {
                return <SmallEventCard event={event} key={index} />;
              })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Tech & Gadgets</Text>

            <TouchableOpacity
              onPress={() => {
                router.push("/explore");
              }}
            >
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Tech")
              .map((event, index) => {
                return <SmallEventCard event={event} key={index} />;
              })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  list: {
    marginBottom: 6,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  listTitle: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.38,
    color: "#000",
  },
  listAction: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "right",
    letterSpacing: -0.24,
    color: "#0067ff",
  },
  listContent: {
    paddingTop: 12,
    paddingHorizontal: 18,
    paddingBottom: 0,
  },
});
