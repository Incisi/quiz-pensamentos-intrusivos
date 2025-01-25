# Intrusive Thoughts Quiz

## Descrição

Este é um quiz sobre **pensamentos intrusivos no atendimento**, criado como uma forma divertida de se envolver com a equipe da **Brico Bread**. O objetivo é se divertir, compartilhar algumas risadas e, ao mesmo tempo, refletir sobre como esses pensamentos podem surgir em ambientes de trabalho, especialmente em situações de atendimento.

O quiz contém uma série de perguntas que visam explorar essas ideias de forma leve e descontraída. Após responder, os participantes recebem uma pontuação que reflete suas respostas. Ao final, todos podem comparar seus resultados de uma maneira divertida e sem pressão.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Next.js**: Framework React para construção da aplicação com funcionalidades como renderização do lado do servidor e geração de rotas de forma otimizada.
- **SQLite**: Banco de dados para armazenar e gerenciar os resultados do quiz.
- **Prisma**: ORM para interação com o banco de dados SQLite.
- **React Icons**: Conjunto de ícones React para ícones de redes sociais e outros elementos visuais.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Funcionalidades

- **Quiz interativo** com perguntas sobre pensamentos intrusivos no atendimento.
- **Pontuação personalizada** com base nas respostas dos participantes.
- **Armazenamento de resultados** em banco de dados SQLite para consulta posterior.
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

3. **Configurar o banco de dados:**
   
   O banco de dados SQLite será utilizado para armazenar os resultados. O Prisma está configurado para gerenciar a conexão com o banco. Para configurar o banco, execute o seguinte comando:

   ```bash
   npx prisma migrate dev
   ```

4. **Rodar o projeto:**
   
   Para rodar o projeto localmente, execute:

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

5. **Participar do Quiz:**
   
   Acesse a página do quiz no navegador, preencha seu nome e comece a responder as perguntas. Ao final, você poderá ver o seu resultado.

6. **Ver Resultados:**
   
   Após terminar o quiz, você será redirecionado para a página de resultados onde poderá ver a classificação e comparar seu desempenho com os outros participantes.

## Contribuições

Este projeto foi feito com o objetivo de divertir a equipe da **Brico Bread**. Se você quiser contribuir ou sugerir melhorias, sinta-se à vontade para abrir uma *pull request* ou um *issue*.

## Licença

Este projeto é de código aberto e pode ser utilizado de acordo com a licença MIT.