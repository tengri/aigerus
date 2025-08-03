import Link from "next/link";
import ServerFlatList from "../components/ServerFlatList";

export default function FlatsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mt-8 py-4">
        <h1 className="text-2xl font-bold">Flats</h1>
        <Link
          href="/admin/flats/new"
          className=" bg-green-500 px-4 py-2 rounded-md text-white"
        >
          add new flat
        </Link>
      </div>

      <ServerFlatList />
    </div>
  );
}
