import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex-grow text-center">
          <p>Developed with ❤️ by <span className="text-red-500">Incisi</span></p>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/incisi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="text-gray-300 hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/incisi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="text-gray-300 hover:text-white transition duration-300" />
          </a>
          <a href="https://github.com/Incisi/quiz-pensamentos-intrusivos" target="_blank" rel="noopener noreferrer">
            <FaCode size={20} className="text-gray-300 hover:text-white transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
