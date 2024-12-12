import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

import { useEvents } from "@/contexts/EventsContext";

import EventsAttending from "@/components/my-meets/EventList";

const tabs = [{ name: "Attending" }, { name: "Organizing" }];

export default function Example() {
  const [value, setValue] = useState(0);

  const { allEventsForCurrentCity } = useEvents(); // TODO: let's get the correct events for the user

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {tabs.map((item, index) => {
          const isActive = index === value;

          return (
            <View key={item.name} style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setValue(index);
                }}
              >
                <View
                  style={[
                    styles.item,
                    isActive && { backgroundColor: "#e0e7ff" },
                  ]}
                >
                  <Text style={[styles.text, isActive && { color: "#4338ca" }]}>
                    {item.name} ({allEventsForCurrentCity?.length})
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
      <View style={styles.content}>
        {value === 0 && <EventsAttending events={allEventsForCurrentCity} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderRadius: 6,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6b7280",
  },
});
