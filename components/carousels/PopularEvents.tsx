import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";

import HomeEventCard from "../cards/HomeEventCard";

import { useEvents } from "@/contexts/EventsContext";

export default function PopularEvents() {
  const { allEventsForCurrentCity } = useEvents();

  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Beauty & Fashion</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Beauty")
              .map((event, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: screenWidth * 0.75,
                      marginRight: 12,
                      overflow: "hidden",
                    }}
                  >
                    <HomeEventCard event={event} />;
                  </View>
                );
              })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Sports</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Sports")
              .map((event, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: screenWidth * 0.75,
                      marginRight: 12,
                      overflow: "hidden",
                    }}
                  >
                    <HomeEventCard event={event} />;
                  </View>
                );
              })}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Tech & Gadgets</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {allEventsForCurrentCity
              .filter((event) => event.category === "Tech")
              .map((event, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: screenWidth * 0.75,
                      marginRight: 12,
                      overflow: "hidden",
                    }}
                  >
                    <HomeEventCard event={event} />;
                  </View>
                );
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
    paddingBottom: 0,
  },
});
