export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-24 w-full items-center justify-center bg-black text-center text-sm text-white">
      <p>
        © Copyright {year}. Feito por{" "}
        <a
          href="https://github.com/gabrielrguarini"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-blue-700"
        >
          Gabriel Guarini
        </a>
      </p>
    </footer>
  );
}
