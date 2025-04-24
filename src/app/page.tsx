import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import WhoBlock from "./components/WhoBlock";
import MapBlock from "./components/MapBlock";
import AppartamentList from "./components/AppartamentList";

export default function Home() {
  return (
    <main className="bg-stone-50">
      <Hero />
      <WhoBlock />
      <AppartamentList />
      <MapBlock />
      <Reviews />
    </main>
  );
}
