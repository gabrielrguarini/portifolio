"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import DarkModeButton from "@/components/dark-mode-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header isDark={isDark} />
      <main
        className={` ${isDark ? "dark" : ""} dark:text-white-primary flex min-h-screen flex-col items-center justify-between overflow-x-hidden scroll-smooth`}
      >
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
              className="dark:text-white-primary mx-auto mt-24 max-w-3xl text-center text-xl text-gray-700"
            >
              Um portifólio mostrando um pouco sobre mim e meus projetos.
            </p>
            <Link className="m-auto animate-bounce" href="#SOBRE">
              <ChevronDown size={100} />
            </Link>
          </section>
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
        <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
      </main>
    </>
  );
}
