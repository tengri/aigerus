import { apartments } from "@/constants";
import AppartamentRowCard from "./AppartamentRowCard";

export default function AppartamentList() {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <h1 className="text-neutral-800 font-bold text-2xl">Мои апартаменты</h1>
      <div className="flex flex-col gap-8">
        {apartments.map((apartment) => (
          <AppartamentRowCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}
