export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "Docker",
    "Tailwind",
    "Styled-components",
    "Github",
    "Express",
    "PostgreSQL",
    "GraphQL",
    "Storybook",
    "Jest",
    "Git",
  ];
  return (
    <section id="SOBRE" className="min-h-screen bg-white p-4 lg:p-24">
      <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <div className="text-center">
          <h2 className="text-center text-4xl font-bold">SOBRE MIM</h2>
          <div className="mx-auto my-2 h-1 w-10 rounded-full bg-blue-700"></div>
          <p className="m-auto max-w-3xl text-xl text-gray-600">
            Aqui você pode ver mais informações sobre mim e minhas habilidades
            atuais em programação.
          </p>
        </div>
        <div className="flex flex-col gap-14 lg:m-8 lg:flex-row">
          <div className="lg:w-1/2">
            <h3 className="my-4 text-3xl font-bold">Um pouco sobre mim</h3>
            <p className="text-justify text-xl leading-8 text-gray-600">
              Sou um Desenvolvedor de Softwaree apaixonado por tecnologia.
              Construo Aplicações Web focado em extrair e implementar as
              melhores ideias. Você pode conferir alguns dos meus Projetos na
              próxima seção. Também estou no{" "}
              <a
                href="https://github.com/gabrielrguarini"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline"
              >
                Github
              </a>{" "}
              e no{" "}
              <a
                href="https://www.linkedin.com/in/gabriel-guarini-832768111/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline"
              >
                LinkedIn
              </a>
              . Você pode entrar em contato comigo lá. Estou aberto a
              oportunidades de emprego onde eu possa contribuir, aprender e
              crescer. Se você tiver uma boa oportunidade que corresponda às
              minhas habilidades, não hesite em entrar em contato comigo
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="my-4 text-3xl font-bold">Minhas habilidades</h3>
            <ul
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="flex flex-wrap text-xl text-gray-600"
            >
              {skills.map((skill, i) => {
                return (
                  <li
                    key={i}
                    className="m-1 cursor-default select-none rounded bg-gray-300 px-4 py-2 text-base font-extrabold capitalize hover:text-blue-700"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
