"use client";

import { useEffect, useState } from "react";
import { IFlat } from "@/types";
import Link from "next/link";
import { getFlats } from "../actions/flat-actions";

export default function FlatList() {
  const [flats, setFlats] = useState<IFlat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchFlats = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const result = await getFlats();
      if (result.success) {
        setFlats(result.data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlats();
  }, []);

  const handleRefresh = () => {
    fetchFlats();
  };

  if (isError) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center p-8">
        <div>Something went wrong</div>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
