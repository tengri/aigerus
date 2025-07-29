import { IFlat } from "@/types";
import PhotosViewer from "./PhotosViewer";

export default function FlatCard({ flat }: { flat: IFlat }) {
  const params = [
    {
      title: "ЖК",
      value: flat.residence,
    },
    {
      title: "Адрес",
      value: flat.address,
    },
    {
      title: "Этаж",
      value: `${flat.floor}/${flat.totalFloors}`,
    },
    {
      title: "Постельных мест",
      value: flat.capacity,
    },
    {
      title: "Площадь",
      value: flat.area + " м²",
    },
  ];

  const mainImageUrl = flat.files?.[0]?.url || "/placeholder.jpg";

  return (
    <div className="flex flex-col gap-2 w-full h-full m-auto">
      <h2 className="text-neutral-800 font-bold text-2xl mt-5 px-8">
        {flat.name}
      </h2>
      <div className="w-full h-full reletive flex-1 min-h-96">
        <PhotosViewer photos={flat.files} />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row items-center bg-neutral-100 shadow-[0px_3px_20px_0px_rgba(34,34,35,0.06)] rounded-2xl pb-6 lg:pb-0">
        <div className="lg:px-9 flex-1 flex flex-col justify-center p-8">
          {/* <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-neutral-600 text-lg">{flat.address}</p>
            <div className="text-green-500 font-bold text-xl">
              {flat.price} тг
            </div>
          </div> */}

          {/* <hr className="my-8 border-neutral-200 border-t-2" /> */}

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-2 flex-1 min-w-1/3">
              {/* <h1 className="text-neutral-800 font-bold text-2xl">{flat.name}</h1> */}
              {/* <p className="text-accent font-bold text-2xl text-green-500">
            Цена: {flat.price} тг / сутки
          </p> */}
              <ul className="flex flex-col gap-2 flex-wrap">
                {params.map((param) => (
                  <li className="rounded-md" key={param.title}>
                    <p className="text-lg">
                      {param.title}:{" "}
                      <span className="font-bold">{param.value}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/77770939732?text=Здравствуйте, я хочу забронировать квартиру в ${flat.residence} на ${flat.floor} этаже`}
                className="bg-accent text-white cursor-pointer mt-4 px-8 py-4 rounded-md bg-green-500 max-w-fit"
              >
                Забронировать
              </a>
            </div>
            <p className="text-neutral-600 text-lg mt-2">{flat.description}</p>
          </div>

          {/* <div className="flex flex-col lg:flex-row gap-4">
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
          </div> */}
        </div>
      </div>

      {/* <PhotosViewer photos={flat.files} /> */}
    </div>
  );
}
