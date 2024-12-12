import { ScrollView } from "react-native";

import WelcomeBanner from "@/components/welcome/WelcomeBanner";
import PopularEvents from "@/components/carousels/PopularEvents";
import TopCreators from "@/components/carousels/TopCreators";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <WelcomeBanner />
      <PopularEvents />
      <TopCreators />
    </ScrollView>
  );
}
