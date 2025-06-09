import Map from "./map/Map";
import { IFlat } from "@/types";

export default function MapBlock({ flats }: { flats: IFlat[] }) {
  return (
    <div className="w-full h-200">
      <Map flats={flats} />
    </div>
  );
}
