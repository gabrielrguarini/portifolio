"use client";
import About from "@/_components/about";
import Contact from "@/_components/contact";
import DarkModeButton from "@/_components/dark-mode-button";
import Footer from "@/_components/footer";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Projects from "@/_components/projects";
import AOS from "aos";
import "aos/dist/aos.css";
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
        className={` ${isDark ? "dark" : ""} flex min-h-screen flex-col items-center justify-between overflow-x-hidden scroll-smooth dark:text-white-primary`}
      >
        <Hero isDark={isDark} />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
      </main>
    </>
  );
}
