import { IFlat } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function FlatRowCard({ flat }: { flat: IFlat }) {
  const mainImageUrl = flat.files?.[0]?.url || "/placeholder.jpg";

  return (
    <Link
      href={`/flats/${flat.id}`}
      className="flex flex-col gap-4 lg:flex-row items-center bg-neutral-100 shadow-[0px_3px_20px_0px_rgba(34,34,35,0.06)] rounded-2xl lg:rounded-t-none pb-6 lg:pb-0"
    >
      <div className="w-full h-full relative flex-1 min-h-96">
        <Image
          src={mainImageUrl}
          alt={flat.name}
          fill
          className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 660px, (max-width: 1919px) 51vw, 667px"
          priority
        />
      </div>
      <div className="px-6 lg:px-14 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="text-neutral-600 text-lg">{flat.address}</p>
          <div className="text-green-500 font-bold text-xl">
            {flat.price} тг
          </div>
        </div>
        <h2 className="text-neutral-800 font-bold text-2xl mt-5">
          {flat.name}
        </h2>
        <p className="text-neutral-600 text-lg mt-2">{flat.description}</p>
        <hr className="my-8 border-neutral-200 border-t-2" />
        <div className="flex flex-col lg:flex-row gap-4">
          {flat.tags?.map((param) => (
            <div
              key={param.name}
              className="inline-flex items-center gap-2 rounded-2xl p-2  shadow-[0px_1px_6px_0px_rgba(34,34,35,0.09)] justify-center"
            >
              <Image
                src={`/icons/${param.name}.svg`}
                alt={param.name}
                width={20}
                height={20}
                className="inline-block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/icons/default.svg";
                }}
              />
              {param.value}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
