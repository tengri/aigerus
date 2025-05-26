"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { IApartment } from "@/types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map({ apartments }: { apartments: IApartment[] }) {
  const center = {
    lat: 43.24541647453766,
    lng: 76.93487181299527,
  };

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set");
  }
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
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
