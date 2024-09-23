import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`w-screen ${isDark ? "bg-dark-primary" : "bg-hero bg-cover bg-fixed bg-no-repeat"}`}
    >
      <section
        className="flex h-screen flex-col p-4"
        data-aos="zoom-out-down"
        data-aos-duration="500"
      >
        <div className="mx-auto mt-32 flex flex-col items-center gap-4 whitespace-nowrap text-4xl lg:flex-row lg:text-6xl">
          <p className="select-none font-bold">OI, EU SOU</p>
          <h1
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="rounded-full bg-black p-4 font-extrabold text-white dark:bg-white dark:text-black"
          >
            GABRIEL GUARINI
          </h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          className="mx-auto mt-24 max-w-3xl text-center text-xl text-gray-700 dark:text-white-primary"
        >
          Um portifólio mostrando um pouco sobre mim e meus projetos.
        </p>
        <Link
          className="m-auto animate-bounce"
          href="#SOBRE"
          aria-label="Seta para baixo que vai para seção sobre"
        >
          <ChevronDown size={100} />
        </Link>
      </section>
    </div>
  );
}
