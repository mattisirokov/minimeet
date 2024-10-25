import { lightBlueMapStyle } from "@/config/mapStyles";
import { StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";

import CustomMarker from "@/components/map/CustomMarker";

import { events } from "@/placeholder-data/placeholder-events";

// This has been hardcoded to Helsinki, Finland

const INITIAL_POSITION = {
  latitude: 60.1699,
  longitude: 24.9384,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
};

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={INITIAL_POSITION}
      customMapStyle={lightBlueMapStyle}
    >
      {events.map((event) => (
        <Marker key={event.id} coordinate={event.coordinates}>
          <CustomMarker event={event} />
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
