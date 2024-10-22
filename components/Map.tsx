import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const INITIAL_REGION = {
  latitude: 60.1699,
  longitude: 24.9384,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        zoomEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
