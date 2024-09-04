"use client";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white p-4 font-bold">
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
          <ul className="animate-menu fixed right-0 top-14 w-screen list-none bg-white px-4 text-end sm:hidden">
            <li
              onClick={() => setIsOpen(false)}
              className="cursor-pointer border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
            >
              <Link href={"#INICIO"}>INICIO</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="cursor-pointer border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
            >
              <Link href={"#SOBRE"}>SOBRE</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="cursor-pointer border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
            >
              <Link href={"#PROJETOS"}>PROJETOS</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="cursor-pointer border-t-[1px] border-gray-100 py-4 duration-200 hover:text-blue-700"
            >
              <Link href={"#CONTATO"}>CONTATO</Link>
            </li>
          </ul>
        )}
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-4 font-extrabold lg:text-xl">
          <li className="duration-200 hover:text-blue-700">
            <Link className="scroll-smooth" href={"#INICIO"}>
              INICIO
            </Link>
          </li>

          <li className="duration-200 hover:text-blue-700">
            <Link className="scroll-smooth" href={"#SOBRE"}>
              SOBRE
            </Link>
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
