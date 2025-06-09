import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import WhoBlock from "../components/WhoBlock";
import AppartamentList from "../components/FlatList";
import { SignIn } from "../components/SingIn";
import { IFlat } from "@/types";

export default async function Home() {
  const flats = (
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/flats").then((res) =>
      res.json(),
    )
  ).data as IFlat[];

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
