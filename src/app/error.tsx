"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* TODO: buity error page */}
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-lg">{error.message}</p>
    </div>
  );
}
