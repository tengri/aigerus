import Image from "next/image";

const facts = [
  {
    number: "5",
    description: "лет на рынке",
  },
  {
    number: "12",
    description: "квартир под сдачу",
  },
  {
    number: "9.8",
    description: "средний рейтинг на Booking",
  },
  {
    number: "3500",
    description: "клиентов довольных клиентов",
  },
];

export default function WhoBlock() {
  return (
    <div className="bg-white">
      <div
        className="max-w-screen-xl flex gap-20 space-between lg:py-20 space-between relative lg:flex-row flex-col px-4 lg:px-8 mx-auto"
        id="who"
      >
        <div className="relative mb-30 min-w-140 mx-auto lg:mx-0 lg:block hidden">
          <Image
            src="/images/landing/who-bg.png"
            alt="Айгерим Бекназарова"
            width={675 / 1.5}
            height={900 / 1.5}
            className="rounded-lg"
          />
          <Image
            src="/images/landing/who.jpg"
            alt="Айгерим Бекназарова"
            width={721 / 3}
            height={1280 / 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg absolute left-80 top-80"
          />
        </div>
        <div className="flex flex-col gap-4 p-8">
          <h1 className="text-neutral-800 font-bold text-2xl">
            Кто такая Айгерим Бекназарова?
          </h1>
          <p className="text-neutral-500 text-lg">
            Айгерим Бекназарова - это профессиональный риелтор, которая
            занимается продажей апартаментов в Алматы. Она имеет огромный опыт в
            сдаче апартаментов в аренду на короткий срок и поможет вам найти
            идеальное жилье для вас и вашей семьи. Она работает по ИП и может
            помочь вам с оформлением всех документов.
          </p>
          <div className="grid grid-cols-2 gap-10 mt-8">
            {facts.map((fact) => (
              <div className="flex flex-row space-between" key={fact.number}>
                <div className="flex flex-col">
                  <p className="text-b font-bold text-4xl">{fact.number}</p>
                  <p className="text-neutral-500 text-lg">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
