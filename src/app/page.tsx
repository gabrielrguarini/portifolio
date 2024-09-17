"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import DarkModeButton from "@/components/dark-mode-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
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
