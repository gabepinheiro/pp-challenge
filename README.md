# PP-Challenge - API Marvel - Next.js

## 💻 Sobre o projeto

Desafio do processo seletivo da [Pedido Pago](https://www.home.pedidopago.com.br/) com a proposta de consumir a [API pública da Marvel](https://developer.marvel.com/) com o Next.js, onde o objetivo era listar Cards com os dados de sua preferência (personagens, quadrinhos ou filmes) e para cada item criar uma página específica com as informações do mesmo.

Deploy: https://pp-challenge-gabe.vercel.app/

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/). Após ter instalado as ferramentas básicas, você vai precisar criar e configurar algumas coisas a seguir:

Primeiro abra o seu terminal e rode o seguinte comando para fazer o download do projeto em sua máquina:

```bash
# Clone este repositório
$ git clone https://github.com/gabepinheiro/pp-challenge

# Acesse a pasta do projeto no terminal/cmd
$ cd pp-challenge
```

### NextJS

Será necessário configurar as variáveis de ambiente, para isso você só precisa renomear
o `.env.example` para `.env.local` (se você planeja executar localmente) e edite as chaves lá.

Rode o seguinte comando para instalar todas as dependências necessárias do projeto:

```bash
npm install
# or
yarn install
```

Com tudo pronto, você pode iniciar o aplicativo com:

```bash
npm run dev
# or
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.js`. A página é atualizada automaticamente conforme você edita o arquivo.

<br>

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode

## 🛠 Tecnologias utilizadas.

- [Next.js](https://nextjs.org/)
- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://material-ui.com/)
- [Styled-components](https://styled-components.com/)
