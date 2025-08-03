import { getFlat } from "@/app/admin/actions/flat-actions";
import { notFound } from "next/navigation";
import EditPhotoBlock from "@/app/admin/components/EditPhotoBlock";
import EditFlatForm from "@/app/admin/components/EditFlatForm";
import { IFlat } from "@/types";

interface FlatPageProps {
  params: Promise<{ id: string }>;
}

export default async function FlatPage({ params }: FlatPageProps) {
  const { id } = await params;
  console.log("id: ", id);
  const result = await getFlat(id);
  console.log("result: ", result);

  if (!result.success || !result.data) {
    notFound();
  }

  const flat: IFlat = result.data;

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md w-full max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold">Flat Card</h1>

      {/* {flat.files && <PhotosViewer photos={flat.files} />} */}

      <EditPhotoBlock flat={flat} />

      <EditFlatForm flat={flat} />
    </div>
  );
}
