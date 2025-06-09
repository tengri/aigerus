import AppartamentList from "@/app/components/FlatList";
import { IFlat } from "@/types";

export default async function FlatsPage() {
  const flats = (
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/flats").then((res) =>
      res.json(),
    )
  ).data as IFlat[];

  return (
    <div>
      <AppartamentList flats={flats} />
    </div>
  );
}
