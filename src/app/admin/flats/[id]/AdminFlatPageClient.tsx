"use client";

import EditPhotoBlock from "@/app/admin/components/EditPhotoBlock";
import EditFlatForm from "@/app/admin/components/EditFlatForm";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { IFlat } from "@/types";

export default function AdminFlatPageClient() {
  const { id } = useParams();
  const flatId = id as string;

  const { data: flat, isFetched } = useQuery<IFlat>({
    queryKey: ["flat", flatId],
    queryFn: () =>
      fetch(`http://localhost:3000/flats/${flatId}`).then((res) => res.json()),
    enabled: !!flatId,
  });

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md w-full max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold">Flat Card</h1>

      {/* {isFetched && flat && <PhotosViewer photos={flat.files} />} */}

      {isFetched && flat && <EditPhotoBlock flat={flat} />}

      {isFetched && <EditFlatForm flat={flat} />}
    </div>
  );
}
