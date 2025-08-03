"use client";

import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { IFlat } from "@/types";
import { uploadFlatFiles } from "../actions/flat-actions";

export default function EditPhotoBlock({ flat }: { flat: IFlat }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles: File[]) => {
      try {
        const formData = new FormData();
        acceptedFiles.forEach((file: File) => {
          formData.append("file", file);
          formData.append("type", "image");
          formData.append("flatId", flat.id);
        });

        const token = sessionStorage.getItem("access_token");
        const result = await uploadFlatFiles(
          flat.id,
          formData,
          token || undefined,
        );

        if (result.success) {
          toast.success("Files uploaded successfully");
        } else {
          toast.error("Failed to upload files");
        }
      } catch (error) {
        toast.error("Failed to upload files");
      }
    },
  });

  return (
    <section className="container flex flex-col gap-4 bg-neutral-200 rounded-md p-4 w-full max-w-screen-xl m-auto">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      </div>
      <aside>
        <ul>{acceptedFiles.map((file) => file.name)}</ul>
      </aside>
    </section>
  );
}
