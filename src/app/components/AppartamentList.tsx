import { apartments } from "@/constants";
import AppartamentRowCard from "./AppartamentRowCard";

export default function AppartamentList() {
  return (
    <div className="py-20 px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-2xl">Мои апартаменты</h1>
        <div className="flex flex-col gap-8 mt-12">
          {apartments.map((apartment) => (
            <AppartamentRowCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </div>
  );
}
