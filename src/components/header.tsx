import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
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
