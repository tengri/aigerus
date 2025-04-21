import Logo from "./Logo";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-neutral-100 flex justify-between items-center py-8 h-28 max-w-screen-xl mx-auto px-4">
      <Logo />
      <div className="flex gap-4">
        <Link
          className="p-2 px-4 rounded-md hover:bg-green-500 hover:text-neutral-100 transition-colors"
          href="/"
        >
          Главная
        </Link>
        <Link
          className="p-2 px-4 rounded-md hover:bg-green-500 hover:text-neutral-100 transition-colors"
          href="/apartments"
        >
          Апартаменты
        </Link>
        {/* <Link className="p-2 px-4 rounded-md hover:bg-accent hover:text-neutral-100 transition-colors" href="#reviews">Отзывы</Link> */}
        {/* <Link className="p-2 px-4 rounded-md hover:bg-accent hover:text-neutral-100 transition-colors" href="/documents">Документы</Link> */}
        <Link
          className="p-2 px-4 rounded-md hover:bg-green-500 hover:text-neutral-100 transition-colors"
          href="/rules"
        >
          Правила проживания
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          className="p-2 px-4 rounded-md hover:bg-green-500 hover:text-neutral-100 transition-colors"
          href="/login"
        >
          Войти
        </Link>
      </div>
    </nav>
  );
}
