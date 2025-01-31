import React from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full bg-blue-500 text-white py-5 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <nav>
          <ul className="flex space-x-4 items-center">

            <li>
              <Link href="/" className="hover:no-underline text-xl hover:font-bold">
                Início
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:no-underline text-xl hover:font-bold">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/results" className="hover:no-underline text-xl hover:font-bold">
                Resultados
              </Link>
            </li>
            <li>
              <Link href="/tips" className="hover:no-underline text-xl hover:font-bold">
                Dicas
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle />

      </div>
    </header >
  );
}
