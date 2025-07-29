export default function Footer() {
  return (
    <>
      <footer className="max-w-screen-xl mx-auto bg-neutral-100 py-8 rounded-t-lg px-4 w-full">
        <hr className="border-neutral-400 my-8" />
        <div className="flex flex-row justify-center items-center text-neutral-600">
          <p>
            Разработано{" "}
            <a className="font-bold text-neutral-800" href="https://amirov.dev">
              {" "}
              ИП Ruslan Amirov
            </a>
            , 2025
          </p>
        </div>
      </footer>
    </>
  );
}
