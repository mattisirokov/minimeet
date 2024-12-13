import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import CreatorCard from "../cards/CreatorCard";

export default function TopCreators() {
  const { topCreators } = useEvents();

  return (
    <SafeAreaView style={{ backgroundColor: "#f3e4f1" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Top Creators</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {topCreators.map((creator, index) => (
            <CreatorCard user={creator} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  scrollContent: {
    paddingRight: 12,
  },
});
