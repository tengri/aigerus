"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Field from "@/app/components/FormField";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

type LoginFields = {
  email: string;
  password: string;
};

type LoginResponse = {
  data?: {
    access_token: string;
  };
  error?: string;
};

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginPage() {
  const router = useRouter();

  const login = async (data: LoginFields) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return (await response.json()) as LoginResponse;
  };

  const { mutate: loginMutation, isPending: isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (parsedResponse: LoginResponse) => {
      if (parsedResponse.data) {
        sessionStorage.setItem(
          "access_token",
          parsedResponse.data.access_token,
        );
        router.push("/admin");
      } else {
        toast.error(parsedResponse.error || "Something went wrong");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginFields) => {
    loginMutation(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Login to admin panel</h1>
      <form
        className="flex flex-col gap-4 p-8"
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        noValidate
      >
        <Field label="Email" name="email">
          <input
            type="email"
            className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </Field>
        <Field label="Password" name="password">
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </Field>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          disabled={isLoading}
        >
          Login
        </button>
      </form>
    </div>
  );
}
