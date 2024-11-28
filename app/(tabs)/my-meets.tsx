import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";

import { useRouter } from "expo-router";

import { useEvents } from "@/contexts/EventsContext";

export default function Example() {
  const { allEventsForCurrentCity } = useEvents(); // TODO: replace this later on with something more reasonable

  const router = useRouter();

  if (!allEventsForCurrentCity) return <Text>Nothint to see here</Text>;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My events</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {allEventsForCurrentCity.map((event) => {
          return (
            <TouchableOpacity
              key={event.id}
              onPress={() => router.push(`/meet/${event.id.toString()}`)}
            >
              <View style={styles.card}>
                <Image
                  alt=""
                  resizeMode="cover"
                  source={{
                    uri: "https://plus.unsplash.com/premium_photo-1661281316103-9aef5ad47c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
                  }}
                  style={styles.cardImg}
                />

                <View style={styles.cardBody}>
                  <Text style={styles.cardTag}>{event.category}</Text>

                  <Text style={styles.cardTitle}>{event.title}</Text>

                  <View style={styles.cardRow}>
                    <View style={styles.cardRowItem}>
                      <Image
                        alt=""
                        source={{
                          uri: "https://plus.unsplash.com/premium_photo-1663050986883-a5bdd99a7fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2362&q=80",
                        }}
                        style={styles.cardRowItemImg}
                      />

                      <Text style={styles.cardRowItemText}>
                        {"Matti Sirokov"}
                      </Text>
                    </View>

                    <Text style={styles.cardRowDivider}>·</Text>

                    <View style={styles.cardRowItem}>
                      <Text style={styles.cardRowItemText}>
                        {event.date_of_event}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 2,
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  /** Card */
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  cardImg: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  cardTag: {
    fontWeight: "500",
    fontSize: 12,
    color: "#939393",
    marginBottom: 7,
    textTransform: "capitalize",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#000",
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -8,
    marginBottom: "auto",
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: "transparent",
  },
  cardRowItemImg: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    marginRight: 6,
  },
  cardRowItemText: {
    fontWeight: "400",
    fontSize: 13,
    color: "#939393",
  },
  cardRowDivider: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#939393",
  },
});
