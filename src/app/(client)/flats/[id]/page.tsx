import { IFlat } from "@/types";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
import FlatCard from "@/app/components/FlatCard";

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;
  const { url } = await props.searchParams;

  const flat = (
    await fetch(process.env.NEXT_PUBLIC_API_URL + `/flats/${id}`).then((res) =>
      res.json(),
    )
  ).data as IFlat;

  return { title: flat?.name };
}

export default async function ApartmentPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await props.params;
  const { url } = await props.searchParams;
  console.log("url: ", url);
  const flat = (await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/flats/${id}`,
  ).then((res) => res.json())) as IFlat;

  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-mdjustify-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mt-8">{flat?.address}</h1>
      <FlatCard flat={flat} />
    </div>
  );
}
