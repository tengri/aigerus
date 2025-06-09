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
  return (
    <div className="flex flex-col gap-4 w-full h-full m-auto bg-gray-50">
      <PhotosViewer photos={flat.files} />
      <div className="p-7 flex flex-col gap-3">
        <div className="flex flex-col gap-2 0">
          <h1 className="text-neutral-800 font-bold text-2xl">{flat.name}</h1>
          <p className="text-accent font-bold text-2xl text-green-500">
            Цена: {flat.price} тг / сутки
          </p>
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
            className="bg-accent text-white cursor-pointer mt-4 px-8 py-4 rounded-md bg-green-500 max-w-fit self-center"
          >
            Забронировать
          </a>
        </div>
      </div>
    </div>
  );
}
