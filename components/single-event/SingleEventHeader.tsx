import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { SupabaseEventType } from "@/types";

const SingleEventHeader = ({
  event,
}: {
  event: SupabaseEventType | undefined;
}) => {
  const router = useRouter();

  if (!event) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageOverlay} />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <FontAwesome name="close" size={15} color="white" />
        </TouchableOpacity>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.eventInfoContainer}>
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <View style={styles.eventInfoWrapper}>
              <View style={styles.locationContainer}>
                <FontAwesome
                  name="map-marker"
                  size={15}
                  color="white"
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>{event.city}</Text>
              </View>
              <View style={styles.locationContainer}>
                <FontAwesome
                  name="users"
                  size={15}
                  color="white"
                  style={styles.locationIcon}
                />
                <Text style={styles.locationText}>
                  {event.number_of_attendees} people going
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    minWidth: "95%",
    marginTop: 10,
    borderRadius: Colors.light.borderRadius,
    overflow: "hidden",
    height: 350,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    padding: 10,
    zIndex: 100,
  },
  eventInfoContainer: {
    position: "absolute",
    zIndex: 200,
    bottom: 30,
    left: "10%",
    right: "10%",
    width: "80%",
    borderRadius: Colors.light.borderRadius - 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  eventInfo: {
    padding: 10,
  },
  eventTitle: {
    color: "white",
    fontSize: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  locationIcon: {
    marginRight: 10,
    opacity: 0.75,
  },
  locationText: {
    color: "white",
    opacity: 0.75,
    fontSize: 15,
  },
});

export default SingleEventHeader;
