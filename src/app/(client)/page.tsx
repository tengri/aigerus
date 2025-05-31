import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import WhoBlock from "../components/WhoBlock";
import MapBlock from "../components/MapBlock";
import AppartamentList from "../components/AppartamentList";
import { getFlats } from "../actions";
import { SignIn } from "../components/SingIn";

export default async function Home() {
  const apartments = await getFlats();

  return (
    <main className="bg-stone-50">
      <SignIn />
      <Hero />
      <WhoBlock />
      <AppartamentList apartments={apartments} />
      <MapBlock apartments={apartments} />
      <Reviews />
    </main>
  );
}
