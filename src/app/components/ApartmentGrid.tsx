import ApartmentCard from "./ApartmentCard";
import { IApartment } from "@/types";

export default function Apartments({
  apartments,
}: {
  apartments: IApartment[];
}) {
  return (
    <div id="apartments" className=" bg-neutral-300 py-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-neutral-800 font-bold text-2xl">Мои апартаменты</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </div>
  );
}
