"use client";
import { useState } from "react";

import Logo from "./Logo";
import Link from "next/link";
import BurgerIcon from "./icons/BurgerIcon";

const NAV_ITEMS = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Апартаменты",
    href: "/apartments",
  },
  {
    label: "Правила проживания",
    href: "/rules",
  },
  {
    label: "Войти",
    href: "/login",
  },
];

export default function Nav() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden w-full flex flex-col z-10">
      <div className="flex gap-4 justify-between items-center bg-neutral-100 p-8 w-full flex-none">
        <Logo />

        <button
          className="py-2 px-4 rounded-md  bg-green-500 text-neutral-100 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BurgerIcon />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 bg-neutral-100  p-8 w-full absolute top-28 left-0 z-20">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl p-2 rounded-md hover:text-green-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNav = () => {
  return (
    <nav className="bg-neutral-100 flex justify-between items-center py-8 h-28 max-w-screen-xl mx-auto px-4 hidden lg:flex">
      <Logo />
      <div className="flex gap-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            className="p-2 px-4 rounded-md hover:text-green-500 transition-colors"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
