import { IFlat } from "@/types";
import AppartamentRowCard from "./FlatRowCard";

export default function AppartamentList({ flats }: { flats: IFlat[] }) {
  return (
    <div className="py-20 px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-2xl">Мои апартаменты</h1>
        <div className="flex flex-col gap-8 mt-12">
          {flats.map((flat) => (
            <AppartamentRowCard key={flat.id} flat={flat} />
          ))}
        </div>
      </div>
    </div>
  );
}
