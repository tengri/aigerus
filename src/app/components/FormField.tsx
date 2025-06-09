export default function FormField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
}
