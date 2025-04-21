import Hero from "./components/Hero";
import Properties from "./components/Apartments";
import Reviews from "./components/Reviews";
import WhoBlock from "./components/WhoBlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <Properties />
      <WhoBlock />
      <Reviews />
    </main>
  );
}
