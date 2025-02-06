"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from 'react-icons/fa';

interface Question {
  clientQuestion: string;
  intrusiveThought: string;
  mainQuestion: string;
  options: { text: string; points: number }[];
}

const questions: Question[] = [
  {
    clientQuestion: `O cliente diz que encontrou um cabelo no pão.`,
    intrusiveThought: `Seu pensamento intrusivo diz que ele deve ter um 'pão de cabelo' especial.`,
    mainQuestion: `O que responde?`,
    options: [
      { text: `"Ih, sorte que foi só um. Normalmente vem dois."`, points: 10 },
      { text: `"Ah, pelo menos é só um cabelo, né? Podia ser coisa pior."`, points: 7 },
      { text: `"Bom, eu não sou cabeleireiro, então não sei de quem é."`, points: 10 }
    ]
  },
  {
    clientQuestion: `O cliente diz que está esperando há 20 minutos por uma resposta no chat.`,
    intrusiveThought: `Seu pensamento intrusivo sugere que ele deve estar fazendo um "pão de paciência".`,
    mainQuestion: `O que você faz?`,
    options: [
      { text: `Responde: "Parabéns pela paciência, mas infelizmente a fila está grande, aguarde mais um pouquinho.".`, points: 10 },
      { text: `Finge que não viu a mensagem e vai tomar um cafézinho."`, points: 2 },
      { text: `Diz: "Enquanto isso, que tal você ir fazendo outra coisa?"`, points: 8 }
    ]
  },
  {
    clientQuestion: `O cliente reclamou que o pão ficou queimado quando ele assou!`,
    intrusiveThought: `Seu pensamento intrusivo sugere que ele deve aprender a "domar o forno".`,
    mainQuestion: `Como você responde?`,
    options: [
      { text: `"Se queimou, é porque você não sabe usar o forno. Tá precisando de um manual?"`, points: 10 },
      { text: `"Bom, pelo menos você pode chamar de torrada agora."`, points: 7 },
      { text: `"Sério? Nem sabia que era possível queimar um pão tão simples!"`, points: 8 }
    ]
  },
  {
    clientQuestion: `O cliente diz que o pedido chegou errado!`,
    intrusiveThought: `Seu pensamento intrusivo diz para perguntar se ele leu o pedido direito.`,
    mainQuestion: `Como você resolve a situação?`,
    options: [
      { text: `"Ih, já era... Agora só no próximo pedido pra acertar!"`, points: 10 },
      { text: `"Já experimentou comer o que foi entregue? Vai que é melhor do que o que você pediu."`, points: 7 },
      { text: `"Você não sabe pedir direito e a culpa é minha, é?"`, points: 9 }
    ]
  },
  {
    clientQuestion: `O cliente diz que encontrou um pedaço de vidro no pão.`,
    intrusiveThought: `Seu pensamento intrusivo diz para você cobrar uma taxa como compensação pelo vidro extra enviado.`,
    mainQuestion: `O que você responde?`,
    options: [
      { text: `"Olha, a gente trabalha com pão, não com joias. Se achou vidro, é lucro."`, points: 10 },
      { text: `"Você tem certeza que não foi você que deixou cair vidro aí? Porque aqui a gente não trabalha com isso."`, points: 6 },
      { text: `"Vidro? Tá vendo? Nossos produtos são realmente transparentes."`, points: 8 },
    ]
  },
  {
    clientQuestion: `O cliente diz que o pão não tem o sabor que ele esperava.`,
    intrusiveThought: `Seu pensamento intrusivo diz para você mandar ele pedir um novo pão com o sabor certo.`,
    mainQuestion: `O que você faz?`,
    options: [
      { text: `"O sabor tá aí, talvez o problema seja o seu paladar."`, points: 5 },
      { text: `"Se não gostou, faz você mesmo da próxima vez. Boa sorte!"`, points: 7 },
      { text: `"Poxa, sinto muito que o pão não leu sua mente antes de ser feito."`, points: 8 }
    ]
  },
  {
    clientQuestion: `O cliente diz: "Por que o pão que entregaram é tão pequeno?"`,
    intrusiveThought: `Seu pensamento intrusivo diz para perguntar se ele já ouviu falar em dieta.`,
    mainQuestion: `O que você responde?`,
    options: [
      { text: `"Porque é pão, não um bolo de aniversário. Quer algo maior? Pede 2."`, points: 9 },
      { text: `"Bom, pelo menos não pesa tanto na balança, né? E ainda é saudável!"`, points: 7 },
      { text: `"Tamanho não é documento, o que importa é o sabor."`, points: 4 }
    ]
  },
  {
    clientQuestion: `O cliente pergunta se colocaram fermento vencido no pão, pois não cresceu nada!`,
    intrusiveThought: `Seu pensamento intrusivo te mandou ser o mais sarcástico possível.`,
    mainQuestion: `Como você responde?`,
    options: [
      { text: `"Ah, claro, o pão não cresceu porque o fermento estava meditando sobre a vida. Coisa de fermento vencido, sabe como é, ele tá de folga."`, points: 9 },
      { text: `"Olha, o fermento pode até estar vencido, mas talvez seja o clima emocional da cozinha que não tava propício. Energia negativa afeta o crescimento."`, points: 10 },
      { text: `"Ah, não cresceu? Que coisa. Mas pelo menos você tem um pão achatado estiloso. Isso é tendência gourmet, sabia?"`, points: 6 },
    ]
  },
  {
    clientQuestion: `O cliente questiona o porquê de não termos atendimento 24 horas.`,
    intrusiveThought: `Seu pensamento intrusivo diz para dizer que a vida não gira em torno dele.`,
    mainQuestion: `O que você faz?`,
    options: [
      { text: `Responde: "Porque a gente precisa dormir, né? Não somos robôs!"`, points: 10 },
      { text: `Diz: "Ah, quer atendimento 24 horas? Vai pra um hospital, lá tem."`, points: 10 },
      { text: `Responde: "A gente até pensou nisso, mas descobrimos que o mundo não gira em torno do seu cronograma de compra."`, points: 10 },
    ]
  },
  {
    clientQuestion: `O cliente reclama que o pão de queijo tem pouco queijo.`,
    intrusiveThought: `Seu pensamento intrusivo diz: "Fale que vendemos pão de queijo, não queijo com pão"`,
    mainQuestion: `O que você diz?`,
    options: [
      { text: `"É só comprar 1kg de mussarela no mercado e colocar em cima!"`, points: 8 },
      { text: `"Tá reclamando de pouco queijo? Pelo menos tem algum, né? Já pensou se viesse sem?"`, points: 6 },
      { text: `"Quer mais queijo? Compra uma vaca e fabrica o seu em casa."`, points: 10 },
    ]
  },
  {
    clientQuestion: `O cliente pergunta porque o pão é tão caro se é só farinha com água!`,
    intrusiveThought: `Seu pensamento intrusivo manda perguntar se ele sabe o preço do trigo.`,
    mainQuestion: `Como você responde?`,
    options: [
      { text: `"Se é só farinha com água, por que você não faz em casa, então?"`, points: 8 },
      { text: `"Ah, se acha caro, experimenta comer só farinha com água. Vamos ver se é a mesma coisa."`, points: 8 },
      { text: `"É caro porque a gente precisa pagar as contas, e isso inclui lidar com perguntas como essa."`, points: 10 }
    ]
  },
  {
    clientQuestion: `O cliente diz: "Vocês dizem que o produto é ultracongelado, mas eu comprei e em uma hora do percurso até minha casa ele descongelou. Que tipo de enganação é essa?"`,
    intrusiveThought: `Seu pensamento intrusivo diz: "Pergunte se ele sabe ler rótulos."`,
    mainQuestion: `Como você responde?`,
    options: [
      { text: `"Você deixou o produto fora do congelador por 1 hora, é claro que vai descongelar!!"`, points: 5 },
      { text: `"Obrigado pelo feedback, agora iremos especificar na embalagem: 'Ultracongelado até o momento que você for imprudente o suficiente pra deixar fora do congelador por 1 hora!"`, points: 10 },
      { text: `"Sim, nossa missão é fazer pães que desafiem as leis da física e mantenham a temperatura perfeita mesmo depois de virar um bloco de gelo derretido."`, points: 10 }
    ]
  }
];

export default function Quiz() {
  const [name, setName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();
  const [isAnswered, setIsAnswered] = useState(false);

  const handleStartQuiz = () => {
    if (name.trim()) {
      setQuizStarted(true);
    } else {
      alert("Por favor, insira seu nome antes de começar o quiz.");
    }
  };

  const handleOptionClick = (points: number) => {
    if (isAnswered) return;

    setIsAnswered(true);
    setScore(score + points);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
      } else {
        saveResult(name, score + points);
        router.push(`/results`);
      }
    }, 100);
  };

  const saveResult = async (name: string, finalScore: number) => {
    try {
      const response = await fetch("https://quiz.incisi.dev.br/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, score: finalScore }),
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar o resultado.");
      }
    } catch (error) {
      console.error("Erro ao salvar o resultado:", error);
    }
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
            maxLength={40}
          />
          <button
            onClick={handleStartQuiz}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <FaArrowRight className="text-white" size={16} />
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
