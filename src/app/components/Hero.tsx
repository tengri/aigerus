import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-100 mb-150">
        
    <div className="flex flex-col gap-4 bg-neutral-300 rounded-md h-151 justify-center">
        <div className="relative h-full w-full">
        <Image src="/images/hero.png" alt="Hero" className="absolute right-20" width={1054/2.5} height={1700/2.5} />

        <div className="flex flex-col max-w-screen-xl w-full mx-auto mt-50">
        <h1 className="text-4xl font-bold text-black">
           Айгерим Бекназарова, <br/> посуточная аренда квартир в Алматы
            </h1>
            <p className="text-neutral-600 mt-4">
                Аппартаменты в центре Алматы, современные и уютные, <br/>
                Предоставляю документы для легального проживания и компенсации командировок
            </p>
            <div className="flex flex-row gap-4 h-15 mt-10">
                <a className="bg-accent text-neutral-100 p-4 w-60 rounded-xl hover:bg-accent/80 transition-colors r-3" href="https://wa.me/77770939732">WhatsApp: +7 777 093 9732</a>
                {/* <button className="bg-white text-black p-4 w-60 rounded-xl hover:bg-accent/80 transition-colors r-3">Посмотреть апартаменты</button> */}
            </div>
        </div>
     </div>
    

    </div>
  </div>
  );
}