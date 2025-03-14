import React from 'react';

export default async function Mind() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="p-6 rounded-lg shadow-md shadow-black w-full max-w-2xl bg-white">
                <h1 className="text-3xl font-bold mb-4 text-center">Controlando Pensamentos Intrusivos</h1>
                <p className="text-lg text-center mb-6">
                    💭 <strong>Todo mundo enfrenta pensamentos intrusivos em algum momento.</strong> A diferença está em como aprendemos a lidar com eles. Com paciência e as estratégias certas, é possível reduzir o impacto que eles têm sobre nós.
                </p>
                <ul className="list-disc list-inside space-y-4 text-lg">
                    <li>
                        <strong>Reconheça, mas não se apegue</strong> – O pensamento apareceu? Ótimo, mas ele não define você. Deixe-o passar como uma nuvem no céu.
                    </li>
                    <li>
                        <strong>Quem manda é você</strong> – Não é um pensamento aleatório que vai ditar suas ações. Você é quem decide como agir.
                    </li>
                    <li>
                        <strong>Questione a lógica</strong> – Esse pensamento faz sentido? Ele se baseia em fatos ou só está tentando te enganar?
                    </li>
                    <li>
                        <strong>Tome a decisão certa</strong> – Pessoas fracas cedem ao que é fácil. Pessoas fortes fazem o que é certo.
                    </li>
                    <li>
                        <strong>Responda com ação</strong> – Mostre para sua mente quem está no controle. Direcione sua energia para algo produtivo.
                    </li>

                </ul>
                <p className="text-lg text-center mt-6 font-semibold">
                    🌟 Pensamentos vêm e vão, mas seu caráter é o que fica. Escolha ser forte.
                </p>
            </div>
        </div>
    );
}
