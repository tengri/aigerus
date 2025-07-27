"use client";

import { useQuery } from "@tanstack/react-query";
import { IFlat, IListResponse } from "@/types";
import Link from "next/link";

export default function FlatList() {
  const {
    data: flats,
    isFetching,
    isError,
  } = useQuery<IListResponse<IFlat>>({
    queryKey: ["flats"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/flats`).then((res) =>
        res.json(),
      ),
  });

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!flats?.data.length) {
    return <div>No flats found</div>;
  }

  return (
    <div className="w-full relative flex-1 flex flex-col gap-4 bg-neutral-200 rounded-md p-4">
      {flats?.data.map((flat) => (
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
