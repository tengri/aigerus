"use client";
import FlatList from "./components/FlatList";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Flats</h1>

        <button
          onClick={() => router.push("/admin/flats/new")}
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Add new flat
        </button>
      </div>
      <FlatList />
    </div>
  );
}
