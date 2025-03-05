import Image from "next/image";

const facts = [{
    number: '5',
    description: 'лет на рынке'
},
{
    number: '12',
    description: 'квартир под сдачу'
},
{
    number: '9.8',
    description: 'средний рейтинг на Booking'
},
{
    number: '3500',
    description: 'клиентов довольных клиентов',
}
]

export default function WhoBlock() {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-row gap-4 relative space-between py-8 space-between">
            <Image src="/images/who.jpg" alt="Айгерим Бекназарова" width={712} height={1280} className="block relative top-0 left-0 rounded-lg" />
            <div className="flex flex-col gap-4 p-8">
                <h1 className="text-neutral-800 font-bold text-2xl">Кто такая Айгерим Бекназарова?</h1>
                <p className="text-neutral-500 text-lg">
                    Айгерим Бекназарова - это профессиональный риелтор, которая занимается продажей апартаментов в Алматы.
                    Она имеет огромный опыт в сдаче апартаментов в аренду на короткий срок и поможет вам найти идеальное жилье для вас и вашей семьи.
                    Она работает по ИП и может помочь вам с оформлением всех документов.
                </p>
                <div className="grid grid-cols-2 gap-10 mt-8">
                {
                    facts.map((fact) => (
                        <div className="flex flex-row space-between" key={fact.number}>
                            <div className="flex flex-col">
                                <p className="text-accent font-bold text-4xl">{fact.number}</p>
                                <p className="text-neutral-500 text-lg">
                                    {fact.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
                </div>
            
           
            </div>
        </div>
    )
}