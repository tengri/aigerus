import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-100 mb-150">
      <div className="flex flex-col gap-4 bg-neutral-300 rounded-md h-151 justify-center px-4">
        <div className="flex flex-row mx-auto justify-between max-w-screen-xl w-full">
          <div className="flex flex-col w-full mx-auto mt-50 w-3/5">
            <h1 className="text-5xl font-bold text-black">
              Айгерим Бекназарова,
              <br />
              посуточная аренда, Алматы
            </h1>
            <p className="text-neutral-600 mt-4">
              Аппартаменты в центре Алматы, современные и уютные, <br />
              Предоставляю документы для легального проживания и компенсации
              командировок
            </p>
            <div className="flex flex-row gap-4 h-15 mt-10">
              <a
                className="bg-green-500 text-neutral-100 p-4 w-60 rounded-xl hover:bg-accent/80 transition-colors r-3"
                href="https://wa.me/77770939732"
              >
                +7 777 093 9732
              </a>
              {/* <button className="bg-white text-black p-4 w-60 rounded-xl hover:bg-accent/80 transition-colors r-3">Посмотреть апартаменты</button> */}
            </div>
          </div>

          <div className="h-full w-100 h-200 relative">
            <Image
              src="/images/hero.png"
              alt="Hero"
              className="absolute right-20 w-full h-full"
              fill={true}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
