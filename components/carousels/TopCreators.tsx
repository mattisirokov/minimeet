import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import CreatorCard from "../cards/CreatorCard";

export default function Example() {
  const { topCreators } = useEvents();

  return (
    <SafeAreaView style={{ backgroundColor: "#f3e4f1" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Top Creators</Text>
        {topCreators.map((creator, index) => (
          <CreatorCard user={creator} key={index} />
        ))}
      </ScrollView>
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
});
