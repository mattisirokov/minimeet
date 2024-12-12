import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { getGeolocation } from "@/services/geolocationService";
import { lightBlueMapStyle } from "@/config/mapStyles";

import { EventWithCoordinates, SupabaseEventType } from "@/types";

import CustomMarker from "@/components/map/CustomMarker";

// This has been hardcoded to Helsinki, Finland
const INITIAL_POSITION = {
  latitude: 60.1699,
  longitude: 24.9484,
  latitudeDelta: 0.02,
  longitudeDelta: 0.01,
};

type MapProps = {
  events: SupabaseEventType[];
};

export default function Map({ events }: MapProps) {
  const [coordinates, setCoordinates] = useState<EventWithCoordinates[]>([]);

  useEffect(() => {
    async function fetchCoordinates() {
      const result = await getGeolocation(events);
      setCoordinates(result);
    }

    fetchCoordinates();
  }, [events]);

  return (
    <MapView
      style={styles.map}
      initialRegion={INITIAL_POSITION}
      customMapStyle={lightBlueMapStyle}
      showsUserLocation
      showsMyLocationButton
    >
      {coordinates.map((event: EventWithCoordinates) => (
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
