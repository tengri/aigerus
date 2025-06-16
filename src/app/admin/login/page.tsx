"use client";

import LoginForm from "@/app/components/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const accessToken = window.sessionStorage.getItem("access_token");

    if (accessToken) {
      router.push("/admin");
      return null;
    }
  }

  return <LoginForm />;
}
