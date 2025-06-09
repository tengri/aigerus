import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { IFlat } from "@/types";

export default function EditPhotoBlock({ flat }: { flat: IFlat }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
        formData.append("type", "image");
      });
      const response = await fetch(
        `http://localhost:3000/flats/${flat.id}/files`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        },
      );

      if (response.ok) {
        toast.success("Files uploaded successfully");
      } else {
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
