import ApartmentCard from "@/app/components/ApartmentCard";
import { apartments } from "@/constants";

export default function ApartmentPage() {
  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-mdjustify-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mt-8">Апартаменты</h1>

      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
