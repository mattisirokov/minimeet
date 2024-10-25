import { StyleSheet, ScrollView } from "react-native";

import WelcomeBanner from "@/components/welcome/WelcomeBanner";
import EventsNearYou from "@/components/carousels/EventsNearYou";
import TopCreators from "@/components/carousels/TopCreators";
import FeaturedCategories from "@/components/carousels/FeaturedCategories";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <WelcomeBanner />
      <EventsNearYou />
      <TopCreators />
      <FeaturedCategories />
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
