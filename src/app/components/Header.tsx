import React from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-blue-500 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <nav>
          <ul className="flex space-x-4">
            <Image
              src="/logo.png"
              width={30}
              height={5}
              alt="Logo da Brico Bread" />
            <li>
              <Link href="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:underline">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/results" className="hover:underline">
                Resultados
              </Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle />

      </div>
    </header>
  );
}
