"use client";

import FormField from "@/app/components/FormField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IFlat } from "@/types";
import { toast } from "react-toastify";

interface FormFlat {
  name: string;
  description: string;
  capacity: number;
  address: string;
  price: number;
  residence: string;
  floor: number;
  totalFloors: number;
  area: number;
}

export default function EditFlatForm({ flat }: { flat?: IFlat }) {
  const queryClient = useQueryClient();

  const saveFlatMutation = useMutation({
    mutationFn: async (data: FormFlat) => {
      if (flat?.id) {
        const response = await fetch(`http://localhost:3000/flats/${flat.id}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to update flat");
        }
        return response;
      } else {
        return fetch("http://localhost:3000/flats", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        });
      }
    },
    onSuccess: () => {
      toast.success("Квартира сохранена");
      queryClient.invalidateQueries({ queryKey: ["flats", flat?.id] });
    },
    onError: () => {
      toast.error("Не удалось сохранить квартиру");
    },
  });

  const handleSaveFlat = async (data: FormFlat) => {
    saveFlatMutation.mutate(data);
  };

  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    capacity: z.number().min(1, { message: "Capacity is required" }).max(10, {
      message: "Capacity must be less than 10",
    }),
    address: z.string().min(1, { message: "Address is required" }),
    price: z.number().min(1, { message: "Price is required" }),
    residence: z.string().min(1, { message: "Residence is required" }),
    floor: z.number().min(1, { message: "Floor is required" }),
    totalFloors: z.number().min(1, { message: "Total floors is required" }),
    area: z.number().min(1, { message: "Area is required" }),
    id: z.string().optional(),
  });

  const { register, handleSubmit } = useForm<FormFlat>({
    resolver: zodResolver(schema),
    defaultValues: flat || {
      name: "",
      description: "",
      capacity: 0,
      address: "",
      price: 0,
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      <form
        onSubmit={handleSubmit(handleSaveFlat)}
        noValidate
        className="flex flex-col gap-4"
      >
        <FormField label="Name" name="name">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("name")}
            required
          />
        </FormField>

        <FormField label="Description" name="description">
          <textarea
            placeholder="Description"
            className="w-full border border-gray-300 rounded-md p-2 h-40 resize-none"
            cols={30}
            {...register("description")}
            required
          />
        </FormField>

        <FormField label="Capacity" name="capacity">
          <input
            type="number"
            placeholder="Capacity"
            min={0}
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("capacity", { valueAsNumber: true })}
            required
          />
        </FormField>

        <FormField label="Address" name="address">
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("address")}
            required
          />
        </FormField>

        <FormField label="Price" name="price">
          <input
            type="number"
            placeholder="Price"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("price", { valueAsNumber: true })}
            required
          />
        </FormField>

        <FormField label="Residence" name="residence">
          <input
            type="text"
            placeholder="Residence"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("residence")}
            required
          />
        </FormField>

        <FormField label="Floor" name="floor">
          <input
            type="number"
            placeholder="Floor"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("floor", { valueAsNumber: true })}
            required
          />
        </FormField>

        <FormField label="Total Floors" name="totalFloors">
          <input
            type="number"
            placeholder="Total Floors"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("totalFloors", { valueAsNumber: true })}
            required
          />
        </FormField>

        <FormField label="Area" name="area">
          <input
            type="number"
            placeholder="Area"
            className="w-full border border-gray-300 rounded-md p-2"
            {...register("area", { valueAsNumber: true })}
            required
          />
        </FormField>

        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          type="submit"
          disabled={saveFlatMutation.isPending}
        >
          {saveFlatMutation.isPending ? "Сохранение..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
}
