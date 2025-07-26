import AppartamentList from "@/app/components/FlatList";
import { IFlat } from "@/types";

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";

export default async function FlatsPage() {
  let flats: IFlat[] = [];

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/flats", {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      flats = data.data as IFlat[];
    }
  } catch (error) {
    console.error("Failed to fetch flats:", error);
    // Continue with empty flats array
  }

  return <AppartamentList flats={flats} />;
}
