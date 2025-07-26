import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import WhoBlock from "./components/WhoBlock";
import AppartamentList from "./components/FlatList";
import { SignIn } from "./components/SingIn";
import { IFlat } from "@/types";

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";

export default async function Home() {
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
