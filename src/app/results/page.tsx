import React from 'react';

interface Result {
  name: string;
  score: number;
  date: string;
}

export default async function Results() {

  const fetchResults = async () => {
    try {
      const response = await fetch(`https://quiz.incisi.dev.br/api/results`);
      //const response = await fetch(`http://localhost:3000/api/results`);
      //console.log(response);
      if (!response.ok) {
        throw new Error("Falha ao buscar resultados");
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }

  }
  const results: Result[] = await fetchResults();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 rounded-lg shadow-md shadow-black w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Resultados do Quiz</h1>
        {results.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Pontuação (73 à 117)</th>
                <th className="border border-gray-300 px-4 py-2">Data e Hora</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{result.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{result.score}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(result.date).toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
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
