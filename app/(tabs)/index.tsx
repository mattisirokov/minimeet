import { StyleSheet, ScrollView } from "react-native";

import { View } from "@/components/Themed";
import WelcomeBanner from "@/components/WelcomeBanner";
import EventsNearYou from "@/components/EventsNearYou";
import TopCreators from "@/components/TopCreators";
import FeaturedCategories from "@/components/FeaturedCategories";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <WelcomeBanner />
      <EventsNearYou />
      <FeaturedCategories />
      <TopCreators />
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
