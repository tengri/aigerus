import { IFlat } from "@/types";
import { getFlat } from "@/app/admin/actions/flat-actions";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
import FlatCard from "@/app/components/FlatCard";

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;
  const result = await getFlat(id);
  const flat = result.success ? result.data : null;

  return { title: flat?.name || "Apartment" };
}

export default async function ApartmentPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;
  const result = await getFlat(id);
  const flat = result.success ? result.data : null;

  if (!flat) {
    return (
      <div className="flex flex-col gap-4 bg-neutral-100 rounded-md justify-center max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-black mt-8">
          Apartment not found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-md justify-center max-w-screen-xl mx-auto">
      {/* <h1 className="text-4xl font-bold text-black mt-8">{flat?.address}</h1> */}
      <FlatCard flat={flat} />
    </div>
  );
}
