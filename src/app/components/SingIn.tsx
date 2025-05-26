"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await signIn("email", {
          email: formData.get("email") as string,
          callbackUrl: "/",
        });
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Sign in with Email</button>
    </form>
  );
}
