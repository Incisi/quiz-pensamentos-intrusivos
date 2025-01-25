import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">Bem-vindo ao Quiz de Pensamentos Intrusivos!</h1>
      <p className="text-lg text-center mb-1" >
        Teste suas reações no atendimento ao cliente e descubra o quão pavio curto você é!!
      </p>
      <p className="text-lg text-center mb-10" >
        Lembre-se, quanto maior a pontuação, mais grosseiro(a) você foi!
      </p>
      <p className="text-lg text-center mb-8" >

      </p>
      <Link href="/quiz">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Começar o Quiz
        </button>
      </Link>
    </div >
  );
}
