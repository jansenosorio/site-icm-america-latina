import Link from "next/link";

export function Menu() {
  return (
    <nav className="text-red-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
