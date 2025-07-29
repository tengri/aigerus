"use client";

// import Image from "next/image";
import { IPhoto } from "@/types";
// import Link from "next/link";
import { PhotoProvider, PhotoSlider } from "react-photo-view";
import { useState } from "react";
import "react-photo-view/dist/react-photo-view.css";

export default function PhotosViewer({ photos }: { photos: IPhoto[] }) {
  const [visible, setVisible] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <PhotoProvider>
      <PhotoSlider
        images={photos.map((item) => ({ src: item.url, key: item.url }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />

      <button
        onClick={() => setVisible(true)}
        className="relative h-96 flex gap-4 p-8 overflow-hidden focus:outline-none cursor-pointer"
      >
        {photos.map((photo, index) => (
          <img
            src={photo.url}
            className="h-full object-cover rounded-lg"
            key={photo.url}
            onClick={() => setIndex(index)}
          />
        ))}
        <div className="absolute text-center text-white bg-black/50 p-2 cursor-pointer right-2 top-1/2 rounded-md">
          Больше фото
        </div>
      </button>
    </PhotoProvider>
  );
}
