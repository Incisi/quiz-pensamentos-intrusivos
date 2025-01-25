import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Bem-vindo ao Quiz de Pensamentos Intrusivos!</h1>
      <p className="text-lg text-center mb-8" >
        Teste suas reações no atendimento ao cliente e descubra quão zen você realmente é. 😄
      </p>
      <Link href="/quiz">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          Começar o Quiz
        </button>
      </Link>
    </div >
  );
}
