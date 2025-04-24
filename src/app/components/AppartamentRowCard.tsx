import { IApartment } from "@/types";
import Image from "next/image";

const params = [
  //   {
  //     name: "room",
  //     value: "1 комната",
  //   },
  {
    name: "area",
    value: "32 м²",
  },
  {
    name: "bed",
    value: "1 кровать",
  },
  {
    name: "floor",
    value: "5/10 этаж",
  },
];

export default function AppartamentRowCard({
  apartment,
}: {
  apartment: IApartment;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row items-center bg-neutral-100 shadow-[0px_3px_20px_0px_rgba(34,34,35,0.06)] rounded-t-2xl">
      <div className="w-full h-full relative flex-1 min-h-96">
        <Image
          src={apartment.image}
          alt={apartment.name}
          fill
          className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 660px, (max-width: 1919px) 51vw, 667px"
        />
      </div>
      <div className="px-14 flex-1 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <p className="text-neutral-600 text-lg">{apartment.address}</p>
          <div className="text-green-500 font-bold text-xl">
            {apartment.price} тг
          </div>
        </div>
        <h2 className="text-neutral-800 font-bold text-2xl mt-5">
          {apartment.name}
        </h2>
        <p className="text-neutral-600 text-lg mt-2">{apartment.overview}</p>
        <hr className="my-8" />
        <div className="flex flex-row gap-4">
          {params.map((param) => (
            <div key={param.name} className="rounded-2xl">
              <Image
                src={`/icons/${param.name}.svg`}
                alt={param.name}
                width={20}
                height={20}
              />
              {param.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
