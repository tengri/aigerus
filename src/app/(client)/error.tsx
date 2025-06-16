"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 flex-auto">
      <h1 className="text-2xl font-bold">Что-то пошло не так ;(</h1>
      <p className="text-lg">{error.message}</p>
    </div>
  );
}
