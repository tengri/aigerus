"use server";

import { revalidatePath } from "next/cache";

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

export async function createFlat(data: FormFlat, token?: string) {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/flats`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create flat");
    }

    const result = await response.json();
    revalidatePath("/admin/flats");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error creating flat:", error);
    return { success: false, error: "Failed to create flat" };
  }
}

export async function updateFlat(
  flatId: string,
  data: FormFlat,
  token?: string,
) {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/flats/${flatId}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update flat");
    }

    const result = await response.json();
    revalidatePath("/admin/flats");
    revalidatePath(`/admin/flats/${flatId}`);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error updating flat:", error);
    return { success: false, error: "Failed to update flat" };
  }
}

export async function uploadFlatFiles(
  flatId: string,
  formData: FormData,
  token?: string,
) {
  try {
    const headers: Record<string, string> = {};

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/flats/${flatId}/files`,
      {
        method: "POST",
        headers,
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to upload files");
    }

    const result = await response.json();
    revalidatePath(`/admin/flats/${flatId}`);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error uploading files:", error);
    return { success: false, error: "Failed to upload files" };
  }
}

export async function getFlats() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/flats`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch flats");
    }

    const data = await response.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error fetching flats:", error);
    return { success: false, error: "Failed to fetch flats", data: [] };
  }
}

export async function getFlat(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/flats/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch flat");
    }

    const data = await response.json();
    console.log("data: ", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching flat:", error);
    return { success: false, error: "Failed to fetch flat", data: null };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || "Login failed" };
    }

    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, error: "Login failed" };
  }
}
