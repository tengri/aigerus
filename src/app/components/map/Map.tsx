"use client";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { IFlat } from "@/types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map({ flats }: { flats: IFlat[] }) {
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
      {flats.map((flat) => (
        <Marker key={flat.id} position={flat.coordinates} />
      ))}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
