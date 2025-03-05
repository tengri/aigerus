import Image from "next/image";
import Link from "next/link";


interface Apartment {
    id: number;
    name: string;
    image: string;
    address: string;
    price: number;
    overview: string;
}
//2252/4000

// const ratio = 2252 / 4000
// const width = 1000;
export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
    console.log(apartment)
  return (
    <Link href={`/apartments/${apartment.id}`} className="bg-neutral-100 rounded-md h-95 relative flex flex-row gap-4 rounded-xl shadow-lg mt-8 w-full p-8">
    
        <div className="w-165 h-full relative flex-shrink-0 overflow-hidden flex-grow-0">
            <Image key={apartment.id} src={apartment.image} alt={apartment.name} className="w-full h-full object-cover rounded-l-lg" fill={true}  />
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 justify-between">
                <h1 className="text-neutral-500 font-bold text-2xl">{apartment.address}</h1>
                <h2 className="text-accent font-bold text-2xl">{apartment.price} тг</h2>
            </div>
          <h2 className="text-neutral-800 font-bold text-lg">{apartment.name}</h2>
            <div>
                <p>{apartment.overview}</p>
            </div>

        </div>
    </Link>
  );
}