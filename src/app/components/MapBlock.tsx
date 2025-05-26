import Map from "./map/Map";
import { IApartment } from "@/types";

export default function MapBlock({ apartments }: { apartments: IApartment[] }) {
  return (
    <div className="w-full h-200">
      <Map apartments={apartments} />
    </div>
  );
}
