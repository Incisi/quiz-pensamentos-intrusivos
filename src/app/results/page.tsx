"use client";

import { useEffect, useState } from "react";

interface QuizResult {
  name: string;
  personality: string;
}

export default function Results() {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("quizResults") || "[]");
    setResults(savedResults);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 rounded-lg shadow-md shadow-black w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Resultados do Quiz</h1>
        {results.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-2">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Pensamentos Intrusivos</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{result.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.personality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">Nenhum resultado salvo ainda.</p>
        )}
      </div>
    </div>
  );
}
