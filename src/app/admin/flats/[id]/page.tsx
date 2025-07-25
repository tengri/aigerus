import AdminFlatPageClient from "./AdminFlatPageClient";

export async function generateStaticParams() {
  return [];
}

export default function FlatPage() {
  return <AdminFlatPageClient />;
}
