# Intrusive Thoughts Quiz

## Descrição

Este é um quiz sobre **pensamentos intrusivos no atendimento**, criado como uma forma divertida de se envolver com a equipe da **Brico Bread**. O objetivo é se divertir, compartilhar algumas risadas e, ao mesmo tempo, refletir sobre como esses pensamentos podem surgir em ambientes de trabalho, especialmente em situações de atendimento.

O quiz contém uma série de perguntas que visam explorar essas ideias de forma leve e descontraída. Após responder, os participantes recebem uma pontuação que reflete suas respostas. Ao final, todos podem comparar seus resultados de uma maneira divertida e sem pressão.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Next.js**: Framework React para construção da aplicação com funcionalidades como renderização do lado do servidor e geração de rotas de forma otimizada.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar os resultados do quiz.
- **Supabase**: Plataforma que fornece um backend como serviço, utilizado para gerenciar e interagir com o banco de dados PostgreSQL.
- **React Icons**: Conjunto de ícones React para ícones de redes sociais e outros elementos visuais.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Funcionalidades

- **Quiz interativo** com perguntas sobre pensamentos intrusivos no atendimento.
- **Pontuação personalizada** com base nas respostas dos participantes.
- **Armazenamento de resultados** no banco de dados PostgreSQL via Supabase.
- **Página de resultados** com uma tabela que exibe os nomes dos participantes e suas pontuações.
- **Design Responsivo** usando Tailwind CSS, garantindo uma boa experiência em dispositivos móveis e desktops.
- **Ícones sociais** para links de redes sociais como GitHub e LinkedIn no footer.

## Como Usar

1. **Clonar o repositório:**
   
   ```bash
   git clone https://github.com/Incisi/quiz-pensamentos-intrusivos.git
   ```

2. **Instalar dependências:**
   
   Navegue até o diretório do projeto e execute o comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Configurar o Supabase:**

   - Crie uma conta no Supabase e inicie um novo projeto.
   - No painel do Supabase, crie uma tabela chamada results com as seguintes colunas:
      - name (TEXT)
      - score (INTEGER)
      - date (TEXT)
   - Ative as Regras RLS (Row-Level Security) e adicione permissões para leitura e escrita.

4. **Configurar variáveis de ambiente:**
   
   No diretório raiz do projeto, crie um arquivo .env.local e adicione suas credenciais do Supabase:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```

   Substitua `YOUR_SUPABASE_URL` e `YOUR_SUPABASE_ANON_KEY` pelos valores encontrados no painel do Supabase.

5. **Rodar o projeto:**
   
   Para rodar o projeto localmente, execute:

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

6. **Participar do Quiz:**
   
   Acesse a página do quiz no navegador, preencha seu nome e comece a responder as perguntas. Ao final, você poderá ver o seu resultado.

7. **Ver Resultados:**
   
   Após terminar o quiz, você será redirecionado para a página de resultados onde poderá ver a classificação e comparar seu desempenho com os outros participantes.

## Contribuições

Este projeto foi feito com o objetivo de divertir a equipe da **Brico Bread**. Se você quiser contribuir ou sugerir melhorias, sinta-se à vontade para abrir uma *pull request* ou um *issue*.

## Licença

Este projeto é de código aberto e pode ser utilizado de acordo com a licença MIT.
