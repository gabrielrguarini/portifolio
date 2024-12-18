import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Finance AI",
      description:
        "Uma plataforma para organizar finanças pessoais ou empresariais, agrupando gastos por categorias e métodos de pagamento. Conta com relatórios gerados por IA para oferecer insights financeiros personalizados. ",
      img: "/finance-ai.png",
      link: "https://finance-ai-gray.vercel.app/",
      github: "https://github.com/gabrielrguarini/finance-ai",
      skills: ["React", "Typescript", "Next.js", "Tailwind", "Stripe", "Clerk"],
    },
    {
      name: "Mimica",
      description:
        "Um jogo divertido para aproveitar com amigos, onde duas equipes competem adivinhando palavras exibidas aleatoriamente na tela através de mímicas. O usuário pode personalizar o tempo para cada rodada e escolher entre os temas Dark e Light, tornando a experiência ainda mais imersiva.",
      img: "/mimica.avif",
      link: "https://mimica-five.vercel.app/",
      github: "https://github.com/gabrielrguarini/mimica",
      skills: ["React", "Typescript", "Next.js", "Tailwind", "Framer Motion"],
    },
    {
      name: "Smart Fit",
      description:
        "Este é um projeto criado para a avaliação de habilidades técnicas para o papel de Front-end na Smart Fit. A proposta foi desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva, seguindo um layout específico e uma série de regras de negócios.",
      img: "/smart-fit.avif",
      link: "https://challenge-smartsite-five.vercel.app/",
      github:
        "https://github.com/gabrielrguarini/front-end-code-challenge-smartsite",
      skills: ["React", "Typescript", "Next.js", "Tailwind"],
    },
    {
      name: "Capputeeno",
      description:
        "E-commerce - Capputeeno, um projeto de e-commerce desenvolvido como parte de um desafio técnico. O objetivo deste projeto é demonstrar habilidades em desenvolvimento front-end, utilizando tecnologias modernas e boas práticas.",
      img: "/capputeeno.avif",
      link: false,
      github: "https://github.com/gabrielrguarini/frontend-challenge",
      skills: [
        "React",
        "Typescript",
        "Next.js",
        "Styled-components",
        "GraphQL",
      ],
    },
  ];
  return (
    <section
      id="PROJETOS"
      className="min-h-screen w-full scroll-mt-10 p-4 sm:scroll-mt-0 lg:p-24 dark:bg-dark-primary dark:text-white-primary"
    >
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold">PROJETOS</h2>
        <div className="mx-auto my-2 h-1 w-10 rounded-full bg-blue-700"></div>
        <p className="m-auto max-w-4xl text-xl text-gray-600 dark:text-white-primary">
          Aqui você encontrará alguns dos projetos que criei como desafio
          técnico e hobby.
        </p>
      </div>
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="my-16 flex flex-col py-4 lg:mb-40 lg:min-h-[416px] lg:flex-row lg:gap-8"
          >
            <div className="relative select-none max-lg:h-[300px] lg:w-2/3">
              <Image
                fill
                src={project.img}
                alt={project.img}
                draggable="false"
                className="pointer-events-none select-none"
                style={{
                  objectFit: "contain",
                  objectPosition: `center`,
                }}
              />
            </div>
            <div className="lg:w-1/3">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold">{project.name}</h3>
                  <p className="py-4 text-justify leading-6 text-gray-600 dark:text-white-primary">
                    {project.description}
                  </p>
                  <ul
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className="flex flex-wrap text-xl text-gray-600 dark:text-dark-primary"
                  >
                    {project.skills.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="m-1 cursor-default select-none rounded bg-gray-200 px-4 py-2 text-base font-extrabold capitalize hover:text-blue-700"
                        >
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex justify-between">
                  {project.link && (
                    <a
                      className="m-2 transform rounded-md bg-blue-700 px-8 py-4 text-xl font-bold text-white transition-transform duration-300 hover:-translate-y-2"
                      href={String(project.link)}
                      target="_blank"
                    >
                      Link
                    </a>
                  )}

                  {project.github && (
                    <a
                      className="m-2 rounded-md bg-gray-500 px-8 py-4 text-xl font-bold text-white transition-transform duration-300 hover:-translate-y-2"
                      href={project.github}
                      target="_blank"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
