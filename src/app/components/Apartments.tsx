import ApartmentCard from "./ApartmentCard";
import { apartments } from "@/constants";

export default function Apartments() {
  return (
    <div id="apartments" className="mx-auto flex flex-col gap-4 bg-neutral-300 py-8">
      <div className="max-w-screen-xl mx-auto">
      <h1 className="text-neutral-800 font-bold text-2xl">Апартаменты</h1>
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
      </div>
    </div>
  );
}