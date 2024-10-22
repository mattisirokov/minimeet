import { StyleSheet, ScrollView } from "react-native";

import { View } from "@/components/Themed";
import WelcomeBanner from "@/components/WelcomeBanner";
import EventsNearYou from "@/components/EventsNearYou";

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <WelcomeBanner />
        <EventsNearYou />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
