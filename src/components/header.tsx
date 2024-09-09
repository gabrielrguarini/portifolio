"use client";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${isDark ? "text-white-primary bg-dark-secondary" : "bg-white"} fixed left-0 top-0 z-10 flex w-full items-center justify-between p-4 font-bold shadow-sm`}
    >
      <Link
        className="group flex font-extrabold duration-500 ease-out hover:scale-95 lg:text-3xl"
        href={"#"}
      >
        <div className="gap hover: flex items-center">
          <ChevronLeft className="group-hover:text-blue-700" strokeWidth={4} />
          <ChevronRight
            className="-ml-2 group-hover:text-blue-700"
            strokeWidth={4}
          />
        </div>
        GUARINI
      </Link>
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          className="block sm:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && (
          <ul className="fixed right-0 top-14 w-screen animate-menu list-none px-4 text-end shadow sm:hidden">
            <Link href={"#INICIO"}>
              <li
                onClick={() => setIsOpen(false)}
                className="border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
              >
                INICIO
              </li>
            </Link>

            <Link href={"#SOBRE"}>
              <li
                onClick={() => setIsOpen(false)}
                className="border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
              >
                SOBRE
              </li>
            </Link>
            <Link href={"#PROJETOS"}>
              <li
                onClick={() => setIsOpen(false)}
                className="border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
              >
                PROJETOS
              </li>
            </Link>
            <Link href={"#CONTATO"}>
              <li
                onClick={() => setIsOpen(false)}
                className="border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
              >
                CONTATO
              </li>
            </Link>
          </ul>
        )}
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-4 font-extrabold lg:text-xl">
          <li className="duration-200 hover:text-blue-700">
            <Link href={"#INICIO"}>INICIO</Link>
          </li>

          <li className="duration-200 hover:text-blue-700">
            <Link href={"#SOBRE"}>SOBRE</Link>
          </li>
          <li className="duration-200 hover:text-blue-700">
            <Link href={"#PROJETOS"}>PROJETOS</Link>
          </li>
          <li className="duration-200 hover:text-blue-700">
            <Link href={"#CONTATO"}>CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
