"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface Question {
  clientQuestion: string;
  intrusiveThought: string;
  mainQuestion: string;
  options: { text: string; points: number }[];
}

const questions: Question[] = [
  {
    clientQuestion: "O cliente diz que achou um cabelo no pão.",
    intrusiveThought: "Seu pensamento intrusivo diz para perguntar se ele colocou o cabelo lá para ganhar um pão grátis.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Pede desculpas e promete investigar o caso.", points: 0 },
      { text: "2. Diz: 'Tem certeza que não foi você?'", points: 7 },
      { text: "3. Responde: 'Cabelo é um brinde especial 😁😁'", points: 10 }
    ]
  },
  {
    clientQuestion: "O cliente diz que está esperando há 20 minutos por uma resposta no chat.",
    intrusiveThought: "Seu pensamento intrusivo diz para ignorar e ver se ele desiste.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Responde: 'Tem gente na fila, calma.'", points: 5 },
      { text: "2. Pede desculpas pelo atraso e o atende imediatamente.", points: 0 },
      { text: "3. Sai para tomar um café e pensa nisso depois.", points: 7 }
    ]
  },
  {
    clientQuestion: "O cliente diz que o pão ficou queimado e exige que seja feita uma troca!",
    intrusiveThought: "O seu pensamento intrusivo diz para mandar ele aprender a usar um forno.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Responde: 'Então não coma.'", points: 9 },
      { text: "2. Diz: 'Talvez o problema esteja no seu forno.'", points: 6 },
      { text: "3. Pede desculpas e explica a ele sobre a preparação correta do produto.", points: 0 }
    ]
  },
  {
    clientQuestion: "O cliente diz que o pedido chegou errado!",
    intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele leu o pedido direito.",
    mainQuestion: "Como você resolve a situação?",
    options: [
      { text: "1. Responde: 'Problema seu 😅'", points: 10 },
      { text: "2. Pede desculpas e envia o pedido correto.", points: 0 },
      { text: "3. Diz: 'Confirme se você pediu certo.'", points: 5 }
    ]
  },
  {
    clientQuestion: "O cliente diz que encontrou um pedaço de plástico no pão.",
    intrusiveThought: "O seu pensamento intrusivo diz para você oferecer um brinde como compensação pelo plástico extra.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Pede desculpas e promete investigar o ocorrido.", points: 0 },
      { text: "2. Diz: 'A embalagem está no pão, faz parte.'", points: 9 },
      { text: "3. Responde: 'Relaxa, é cortesia da casa.'", points: 10 },
    ]
  },
  {
    clientQuestion: "O cliente diz que o pão não tem o sabor que ele esperava.",
    intrusiveThought: "O seu pensamento intrusivo diz para você mandar ele pedir um novo pão com o sabor certo.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Pede desculpas e tenta explicar para o cliente como preparar o pão da maneira correta.", points: 0 },
      { text: "2. Responde: 'Se você preparar do jeito certo ele terá um sabor melhor!'", points: 9 },
      { text: "3. Diz: 'Então aprenda a preparar o seu próprio pão.'", points: 8 }
    ]
  },
  {
    clientQuestion: "O cliente diz: 'Por que o pão que entregaram é tão pequeno?'",
    intrusiveThought: "O seu pensamento intrusivo diz para perguntar se ele já ouviu falar em dieta.",
    mainQuestion: "O que você responde?",
    options: [
      { text: "1. Responde: 'Talvez você precise comprar óculos.'", points: 9 },
      { text: "2. Pede desculpas e explique que pode ter ocorrido um erro no lote.", points: 0 },
      { text: "3. Diz: 'Pequeno, mas saboroso!'", points: 4 }
    ]
  },
  {
    clientQuestion: "O cliente pergunta se colocaram fermento vencido no pão, pois não cresceu nada!",
    intrusiveThought: "O seu pensamento intrusivo diz para sugerir que ele preste atenção no que ele está comprando.",
    mainQuestion: "Como você responde?",
    options: [
      { text: "1. Responde: 'Ele cresceu sim, talvez você que tenha dificuldades de visão.'", points: 10 },
      { text: "2. Diz: 'Não era para crescer mesmo, ele é feito para ser assim.'", points: 6 },
      { text: "3. Explica que o processo de fermentação é feito na fabricação e que ele não cresce mais depois.", points: 0 },
    ]
  },
  {
    clientQuestion: "O cliente questiona o porquê de não termos atendimento 24 horas.",
    intrusiveThought: "O seu pensamento intrusivo diz para dizer que a vida não gira em torno dele.",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Pede desculpas e informa os horários de funcionamento.", points: 0 },
      { text: "2. Responde: 'Você acha que somos robôs?'", points: 8 },
      { text: "3. Fala para usar o FAQ enquanto estamos offline.", points: 3 },
    ]
  },
  {
    clientQuestion: "O cliente reclama que o pão de queijo tem pouco queijo.",
    intrusiveThought: "O seu pensamento intrusivo diz: 'Fale que vendemos pão de queijo, não queijo de pão'",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Responde: 'É só comprar 1kg de mussarela no mercado e colocar em cima!'", points: 9 },
      { text: "2. Pede desculpas e informa que o nosso pão de queijo é o único que de fato vai queijo na receita.", points: 0 },
      { text: "3. Pergunta se ele tem certeza que assou o pão de queijo da Brico e não um de outra marca.", points: 5 },
    ]
  },
  {
    clientQuestion: "O cliente pergunta porque o pão é tão caro se é só farinha com água!",
    intrusiveThought: "O seu pensamento intrusivo manda perguntar se ele sabe o preço do trigo.",
    mainQuestion: "Como você responde?",
    options: [
      { text: "1. Diz para ele fazer o próprio pão em casa.", points: 9 },
      { text: "2. Explica que o preço reflete a qualidade e o processo de produção.", points: 0 },
      { text: "3. Responde: 'É só parar de reclamar e ir comprar em outro lugar.'", points: 10 }
    ]
  },
  {
    clientQuestion: "O cliente diz: 'Minha filha é alérgica e vocês não avisaram que tinha glúten!'",
    intrusiveThought: "O seu pensamento intrusivo diz: 'Pergunte se ele sabe ler rótulos.'",
    mainQuestion: "O que você faz?",
    options: [
      { text: "1. Diz: 'Está no rótulo, você deveria ter lido.'", points: 8 },
      { text: "2. Responde: 'Se você soubesse ler isso não teria acontecido.'", points: 10 },
      { text: "3. Pede desculpas e explica onde estão as informações no rótulo.", points: 0 }
    ]
  }
];

export default function Quiz() {
  const [name, setName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleStartQuiz = () => {
    if (name.trim()) {
      setQuizStarted(true);
    } else {
      alert("Por favor, insira seu nome antes de começar o quiz.");
    }
  };

  const handleOptionClick = (points: number) => {
    setScore(score + points);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const personality = calculatePersonality(score + points);
      saveResult(name, personality);
      router.push(
        `/results?name=${encodeURIComponent(name)}&personality=${encodeURIComponent(personality)}`
      );
    }
  };

  const calculatePersonality = (finalScore: number): string => {
    if (finalScore <= 11) return "Zens";
    if (finalScore <= 33) return "Calmos";
    if (finalScore <= 30) return "Ponderados";
    return "Temperamentais";
  };

  const saveResult = (name: string, personality: string) => {
    const existingResults = JSON.parse(localStorage.getItem("quizResults") || "[]");
    const updatedResults = [...existingResults, { name, personality }];
    localStorage.setItem("quizResults", JSON.stringify(updatedResults));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!quizStarted ? (
        <div className="p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Quiz!</h1>
          <p className="mb-4">Antes de começar, diga-nos o seu nome:</p>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full mb-4"
            placeholder="Digite seu nome aqui..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleStartQuiz}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faArrowRight} className="fa-fw" />
          </button>
        </div>
      ) : (
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-5">
            ({currentQuestionIndex + 1}/{questions.length}) {questions[currentQuestionIndex].clientQuestion}
          </h2>
          <p className="mb-1">{questions[currentQuestionIndex].intrusiveThought}</p>
          <p className="mb-20">{questions[currentQuestionIndex].mainQuestion}</p>
          <div className="flex flex-col gap-3">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.points)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
