import { IFlat } from "@/types";
import Link from "next/link";
import { getFlats } from "../actions/flat-actions";

export default async function ServerFlatList() {
  const result = await getFlats();
  const flats: IFlat[] = result.success ? result.data : [];

  if (!result.success) {
    return <div>Something went wrong</div>;
  }

  if (!flats.length) {
    return <div>No flats found</div>;
  }

  return (
    <div className="w-full relative flex-1 flex flex-col gap-4 bg-neutral-200 rounded-md p-4">
      {flats.map((flat: IFlat) => (
        <div className="flex justify-between items-center" key={flat.id}>
          <div>{flat.name}</div>
          <div>{flat.address}</div>
          <div>{flat.price}</div>
          <div>{flat.floor}</div>
          <div>{flat.residence}</div>
          <div className="flex gap-4 flex-row">
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
              href={`/admin/flats/${flat.id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
