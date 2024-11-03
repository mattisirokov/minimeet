import { StyleSheet, Dimensions } from "react-native";
import { View, Text } from "../Themed";

import Carousel from "react-native-reanimated-carousel";
import CreatorCard from "../cards/CreatorCard";
import { useEvents } from "@/contexts/EventsContext";

const { width } = Dimensions.get("window");

const TopCreators = () => {
  const { topCreators } = useEvents();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our top meet creators</Text>
      <Carousel
        width={width}
        height={250}
        data={topCreators}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {topCreators.map((creator, index) => (
              <View key={index} style={styles.cardContainer}>
                <CreatorCard creator={creator} />
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  slide: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: width / 2 - 1,
    height: "100%",
  },
});

export default TopCreators;
