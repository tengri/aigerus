import { IApartment } from "@/types";
import Image from "next/image";

const params = [
  //   {
  //     name: "room",
  //     value: "1 комната",
  //   },
  {
    name: "area",
    value: "32 м2",
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
    <div className="flex flex-row gap-4">
      <div className="w-1/3">
        <Image
          src={apartment.image}
          alt={apartment.name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 660px, (max-width: 1919px) 51vw, 667px"
        />
      </div>
      <div className="w-2/3 py-16 px-14">
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
            <div
              key={param.name}
              className="text-neutral-600 text-lg px-3.5 py-2.5 bg-white rounded-[40px] shadow-[0px_1px_6px_0px_rgba(34,34,35,0.09)] inline-flex justify-start items-center gap-1"
            >
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
