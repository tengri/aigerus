import ApartmentCard from "@/app/components/ApartmentCard";

export const getFlats = async () => {
  const flats = await fetch('')
  return flats;
};

export default async function ApartmentsPage() {
  const apartments = await getApartments();
  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-mdjustify-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mt-8">Апартаменты</h1>

      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
