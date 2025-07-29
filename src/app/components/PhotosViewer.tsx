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
    // <div className="flex flex-col gap-4 w-full m-auto">
    <PhotoProvider>
      {/* <div className="flex gap-4 m-auto h-full relative min-h-[400px] min-w-[1024px]"> */}
      {/* <div className="w-1/3 flex flex-col gap-4"> */}
      <PhotoSlider
        images={photos.map((item) => ({ src: item.url, key: item.url }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />

      <button
        onClick={() => setVisible(true)}
        className="relative h-96 flex gap-4 p-8 overflow-hidden"
      >
        {photos.map((photo, index) => (
          <img
            src={photo.url}
            className="h-full object-cover lg:rounded-2xl"
            key={photo.url}
          />
        ))}
        <div className="absolute bottom-8 text-center text-white bg-black/50 p-2 cursor-pointer">
          Больше фото
        </div>
      </button>

      {/* {photos.map((photo, index) => (
              <div key={photo.url} className="h-1/2">
                <PhotoView src={photo.url}>
                  <img
                    src={photo.url}
                    alt={`Photo ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                  />
                </PhotoView>
              </div>
            ))} */}
      {/* </div> */}
      {/* </div> */}
    </PhotoProvider>
    // </div>
  );
}
