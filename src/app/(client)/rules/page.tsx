const rules = [
  {
    title: "Основные правила",
    items: [
      {
        // title: "Оплата",
        description:
          "Оплата производится в момент заезда, но для бронирования необходимо оплатить 10 тысяч тенге(депозит)",
      },
      {
        // title: "Время заезда и выезда",
        description:
          "Расчетное время выезда до 12.00 утра. Время заезда после 14.00 в любое время (ранний заезд и поздний выезд оговаривается и оплачивается отдельно)",
      },
    ],
  },
  {
    title: "Бронирование",
    items: [
      {
        // title: "Бронирование день в день",
        description:
          "Бронирование квартиры день в день возможно, но это не рекомендуется, обычно свободных квартир на сегодня/завтра нет",
      },
      {
        description:
          "Отмена бронирования возможна в любое время, однако сумма забронированного времени не возвращается если вы не сделали это за 24 часа до заезда",
      },
      {
        description:
          "Не уверены на сколько дней вам нужно квартиру? Вы должны понимать, что другие клиенты могут забронировать вашу квартиру в любой момент, поэтому лучше всего забронировать квартиру на 1-2 дня больше чем вам нужно",
      },
      {
        description:
          "Если после того как вы сообщили о вашем решении забронировать квартиру, вы долго не оплачиваете бронирование, квартира считается остается на booking.com и других площадках, и другие клиенты могут забронировать вашу квартиру",
      },
    ],
  },

  {
    title: "Правила проживания",
    items: [
      {
        description: "Соблюдение тишины в ночное время с 22.00 до 08.00",
      },
      {
        description:
          "Соблюдайте чистоту и порядок: При сдаче квартиры: помойте посуду, соберите и вынесите мусор",
      },
      {
        description:
          "В случае повреждения имущества, часть депозита не возвращается",
      },
    ],
  },

  {
    title: "Документы",
    items: [
      {
        description:
          "Делаем уведомления о прибытии иностранного гражданина в Казахстан.",
      },
      {
        description:
          "Офомляем команднировочные документы, оплачивается отдельно - 10% от суммы договора",
      },
    ],
  },
];

export default function RulesPage() {
  return (
    <div className="flex flex-col gap-4 bg-neutral-100 rounded-mdjustify-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-black mt-8">Правила проживания</h1>
      <div className="flex flex-col gap-8">
        {rules.map((rule) => (
          <div
            key={rule.title}
            className="flex flex-col gap-4 bg-neutral-200 rounded-md p-4 shadow-md"
          >
            <h2 className="text-2xl font-bold text-neutral-900 text-black">
              {rule.title}
            </h2>
            {rule.items.map((item) => (
              <ul key={item.description} className="flex flex-col gap-1">
                {/* <p key={item.title} className="font-semibold text-lg">{item.title}</p> */}
                <li
                  key={item.description}
                  className="text-md text-neutral-800 list-disc list-inside"
                >
                  {item.description}
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
