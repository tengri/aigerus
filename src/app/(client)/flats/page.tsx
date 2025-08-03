import AppartamentList from "@/app/components/FlatList";
import { IFlat } from "@/types";
import { getFlats } from "@/app/admin/actions/flat-actions";

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";

export default async function FlatsPage() {
  const result = await getFlats();
  const flats: IFlat[] = result.success ? result.data : [];

  return <AppartamentList flats={flats} />;
}
