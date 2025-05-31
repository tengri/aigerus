import Link from "next/link";
import { getFlats } from "../../actions";

export default async function FlatsPage() {
  const flats = await getFlats();
  return (
    <div>
      <Link href="/admin/flats/new">add new flat</Link>
      <h1>Flats</h1>
      <ul>
        {flats.map((flat: any) => (
          <li key={flat.id}>{flat.name}</li>
        ))}
      </ul>
    </div>
  );
}
