"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { apartments } from "@/constants";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = apartments[0].coordinates;

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {apartments.map((apartment) => (
        <Marker key={apartment.id} position={apartment.coordinates} />
      ))}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
