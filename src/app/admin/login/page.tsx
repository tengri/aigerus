"use client";
import LoginForm from "@/app/components/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const accessToken = sessionStorage.getItem("access_token");
  const router = useRouter();

  if (accessToken) {
    router.push("/admin");
  }
  return <LoginForm />;
}
