import { IApartment } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ApartmentCard({
  apartment,
}: {
  apartment: IApartment;
}) {
  console.log("ApartmentCard apartment: ", apartment);
  console.log("ApartmentCard apartment.photos: ", apartment.photos);
  return (
    <Link
      href={`/apartments/${apartment.id}`}
      className="rounded-4xl h-150 relative gap-4 rounded-xl shadow-lg mt-8 min-w-100 flex flex-col"
    >
      <div className="w-full relative overflow-hidden h-full">
        {apartment.photos.map((photo) => (
          <Image
            key={photo.documentId}
            src={photo.url}
            alt={apartment.name}
            className="object-cover rounded-t-2xl"
            fill={true}
          />
        ))}
      </div>
      <div className="p-7 flex flex-col gap-3">
        <h4 className="text-accent font-bold text-2xl">{apartment.price} тг</h4>
        <div className="flex flex-row gap-2">
          <p className="text-neutral-800 font-bold text-2xl">
            {apartment.name}
          </p>
          <p className="text-neutral-600 text-lg">{apartment.address}</p>
        </div>
      </div>
    </Link>
  );
}
