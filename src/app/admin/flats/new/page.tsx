import EditFlatForm from "../../components/EditFlatForm";

export default function NewFlatPage() {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      <h1 className="text-2xl font-bold mt-8">New Flat</h1>
      <EditFlatForm />
    </div>
  );
}
