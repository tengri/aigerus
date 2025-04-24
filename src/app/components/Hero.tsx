import Image from "next/image";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";

const HERO_IMAGE_KOEF = 2.5;
const HERO_IMAGE_WIDTH = 1054 / HERO_IMAGE_KOEF;
const HERO_IMAGE_HEIGHT = 1700 / HERO_IMAGE_KOEF;

export default function Hero() {
  return (
    <div className="h-191">
      <div className="h-151 bg-neutral-300" id="hero">
        <div className="flex flex-row gap-4 justify-between max-w-screen-xl w-full mx-auto items-start h-full">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-black">
              Айгерим Бекназарова,
              <br />
              посуточные квартиры, Алматы
            </h1>
            <p className="text-neutral-600 mt-4">
              Аппартаменты в центре Алматы, современные и уютные, на связи 24x7
              <br />
              Предоставляю документы для легального проживания и компенсации
              командировок
            </p>
            <div className="flex flex-row gap-4 h-15 mt-10">
              <a
                className="bg-green-500 px-8 py-4 rounded-xl hover:bg-accent/80 transition-colors r-3 flex flex-row items-center gap-2 flex-wrap"
                href="https://wa.me/77770939732"
              >
                <PhoneIcon />
                <span className="text-neutral-100 font-bold">
                  +7 777 093 9732
                </span>
              </a>
              <Link
                className="bg-white px-8 py-4 rounded-xl hover:bg-accent/80 transition-colors r-3 flex flex-row items-center gap-2 font-bold"
                href="/apartments"
              >
                Смотреть апартаменты
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/landing/hero.png"
              alt="Hero"
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
