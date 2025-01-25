import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-red-500 mb-6">Erro 404: Página não encontrada</h1>
            <p className="text-lg text-center mb-8" >
                Essa página que você está tentando acessar não existe <Link href="/quiz">clique aqui</Link> para retornar à página inicial.
            </p>
            <Link href="/quiz">
            </Link>
        </div >
    );
}
