// Update imports
import { FormData, UserSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Form({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (data: FormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
