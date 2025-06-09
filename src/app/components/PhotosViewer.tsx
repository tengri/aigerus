import Image from "next/image";
import { IPhoto } from "@/types";
import Link from "next/link";

export default function PhotosViewer({ photos }: { photos: IPhoto[] }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  const [mainPhoto, ...restPhotos] = photos.slice(0, 4);

  return (
    <div className="flex flex-col gap-4 w-full h-full m-auto">
      <div className="flex gap-4 m-auto h-full relative min-h-[400px] min-w-[1024px]">
        <Link
          href={mainPhoto.url}
          target="_blank"
          className="w-full h-full"
          key={mainPhoto.url}
        >
          <Image src={mainPhoto.url} alt="img" fill={true} />
        </Link>
      </div>
      <div className="flex flex-row gap-4 w-full">
        {restPhotos.map((photo) => (
          <Link
            href={photo.url}
            target="_blank"
            className="w-full h-full"
            key={photo.url}
          >
            <Image
              src={photo.url}
              alt="img"
              width={photo.width}
              height={photo.height}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
