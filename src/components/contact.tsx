import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useState } from "react";

const EMAIL = "gabrielrguarini@gmail.com";
const Toast = () => {
  return (
    <div
      data-os="toast"
      data-os-position="bottom-right"
      className="fixed bottom-8 right-4 animate-appear rounded-md bg-green-500 p-4 text-white opacity-0"
    >
      Email Copiado
    </div>
  );
};

export default function Contact() {
  const [isCopy, setIsCopy] = useState(false);
  return (
    <section
      id="CONTATO"
      className="min-h-screen w-full scroll-mt-9 p-4 sm:scroll-mt-0 lg:p-24 dark:bg-dark-secondary dark:text-white-primary"
    >
      {isCopy && <Toast />}
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold">CONTATO</h2>
        <div className="mx-auto my-2 h-1 w-10 rounded-full bg-blue-700"></div>
        <p className="m-auto max-w-3xl text-xl text-gray-600 dark:text-white-primary">
          Você pode entrar em contato comigo em qualquer uma das redes sociais
          abaixo. Entrarei em contato com você o mais breve possível
        </p>
      </div>
      <div className="mt-32 flex max-w-full justify-center gap-10 sm:gap-20">
        <a
          href="https://www.linkedin.com/in/gabriel-guarini/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedinIcon
            className="cursor-pointer duration-300 hover:-translate-y-2 hover:scale-110 hover:text-blue-700"
            size={80}
          />
        </a>
        <a
          href="https://github.com/gabrielrguarini"
          target="_blank"
          aria-label="Github"
        >
          <GithubIcon
            className="cursor-pointer duration-300 hover:-translate-y-2 hover:scale-110 hover:text-blue-700"
            size={80}
          />
        </a>
        <div>
          <MailIcon
            className="cursor-pointer duration-300 hover:-translate-y-2 hover:scale-110 hover:text-blue-700"
            size={80}
            onClick={(e) => {
              navigator.clipboard
                .writeText(EMAIL)
                .then(() => {
                  setIsCopy(true);
                  setTimeout(() => {
                    setIsCopy(false);
                  }, 3000);
                })
                .catch((err) => {
                  console.error("Erro ao copiar email:", err);
                });
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    </section>
  );
}
