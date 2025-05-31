simport Field from "@/app/components/Field";

export default function NewFlatPage() {
  async function createFlat(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    // mutate data
    // revalidate the cache
  }

  //
  //   const mutation = useMutation({
  //     mutationFn: () => {
  //       return fetch("/api/flats", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: "test",
  //           address: "test",
  //           floor: "test",
  //           totalFloors: "test",
  //           overview: "test",
  //         }),
  //       });
  //     },
  //   });
  return (
    <form
      className="flex flex-col gap-4 max-w-screen-xl mx-auto w-full h-full p-4"
      action={createFlat}
    >
      <h1 className="text-2xl font-bold">Добавление новых аппартаментов</h1>

      <Field label="Название аппартаментов" name="name">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, Паладиум 123"
        />
      </Field>
      <Field label="Название ЖК" name="name">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, Паладиум"
        />
      </Field>
      <Field label="Адрес" name="address">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, ул. Абая, 123"
        />
      </Field>
      <Field label="Этаж" name="floor">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, 12"
        />
      </Field>
      <Field label="Всего этажей в здании" name="totalFloors">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, 12"
        />
      </Field>
      <Field label="Краткое описание" name="overview">
        <textarea
          name="overview"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Пару предложений об аппартаментах для списка квартир"
        ></textarea>
      </Field>
      <Field label="Цена за сутки" name="price">
        <input
          type="number"
          name="price"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Базовая цена за сутки, которая будет отображаться в списке квартир"
        />
      </Field>

      <Field label="Максимальное количество гостей" name="maxGuests">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, 3"
        />
      </Field>

      <Field label="Количество спальных мест" name="bedrooms">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2 w-full primary-color"
          placeholder="Например, 2"
        />
      </Field>

      <button
        type="submit"
        className="text-neutral-100 text-center font-bold w-full lg:w-auto bg-green-500 px-8 py-4 rounded-xl cursor-pointer"
      >
        Создать квартиру
      </button>
    </form>
  );
}
