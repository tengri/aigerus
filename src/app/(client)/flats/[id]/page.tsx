import { IFlat } from "@/types";

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

  let flat: IFlat | null = null;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/flats/${id}`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      flat = data.data as IFlat;
    }
  } catch (error) {
    console.error("Failed to fetch flat for metadata:", error);
  }

  return { title: flat?.name || "Apartment" };
}

export default async function ApartmentPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;

  let flat: IFlat | null = null;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + `/flats/${id}`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      flat = data as IFlat;
    }
  } catch (error) {
    console.error("Failed to fetch flat:", error);
  }

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
      <h1 className="text-4xl font-bold text-black mt-8">{flat?.address}</h1>
      <FlatCard flat={flat} />
    </div>
  );
}
