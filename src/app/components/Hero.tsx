import Image from "next/image";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";

const HERO_IMAGE_KOEF = 2;
const HERO_IMAGE_WIDTH = 1054 / HERO_IMAGE_KOEF;
const HERO_IMAGE_HEIGHT = 1700 / HERO_IMAGE_KOEF;

export default function Hero() {
  console.log("HERO_IMAGE_HEIGHT: ", HERO_IMAGE_HEIGHT);
  return (
    <div
      className={`mx-auto bg-stone-50 flex flex-col lg:flex-row justify-between max-w-screen-xl lg:gap-20 px-4 lg:px-8`}
    >
      <div className="flex flex-col justify-center h-full mt-40">
        <h1 className="text-4xl font-bold text-black text-center lg:text-left">
          Айгерим Бекназарова,
          <br />
          посуточные квартиры, Алматы
        </h1>
        <p className="text-neutral-600 mt-4 text-center">
          Аппартаменты в центре Алматы, современные и уютные, на связи 24x7
          <br />
          Предоставляю документы для легального проживания и компенсации
          командировок
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a
            className="text-neutral-100 text-center font-bold w-full lg:w-auto bg-green-500 px-8 py-4 rounded-xl hover:bg-accent/80"
            href="https://wa.me/77770939732"
          >
            <PhoneIcon /> +7 777 093 9732
          </a>
          <Link
            className="w-full text-center lg:w-auto bg-white px-8 py-4 rounded-xl hover:bg-neutral-800 hover:text-neutral-100 font-bold"
            href="/apartments"
          >
            Смотреть апартаменты
          </Link>
        </div>
      </div>
      <div className={`mt-10 lg:mt-0 mx-auto`}>
        <Image
          width={HERO_IMAGE_WIDTH}
          height={HERO_IMAGE_HEIGHT}
          src="/images/landing/hero.png"
          alt="Hero"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
