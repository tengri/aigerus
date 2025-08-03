import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import WhoBlock from "./components/WhoBlock";
import AppartamentList from "./components/FlatList";
import { SignIn } from "./components/SingIn";
import { IFlat } from "@/types";
import { getFlats } from "@/app/admin/actions/flat-actions";

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await getFlats();
  const flats: IFlat[] = result.success ? result.data : [];

  return (
    <main className="bg-stone-50">
      <SignIn />
      <Hero />
      <WhoBlock />
      <AppartamentList flats={flats} />
      {/* <MapBlock flats={flats} /> */}
      <Reviews />
    </main>
  );
}
