import ApartmentCard from "@/app/components/ApartmentCard";
import { apartments } from "@/constants";

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const apartment = apartments.find((apartment) => apartment.id === id);
  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-mdjustify-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mt-8">Апартамент</h1>
      {apartment && <ApartmentCard apartment={apartment} />}
    </div>
  );
}
