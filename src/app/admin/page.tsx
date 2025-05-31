import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <Link href="/admin/flats">Flats</Link>
    </div>
  );
}
