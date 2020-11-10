# Sistema de Gestão Básica de uma academia de Jiu-Jitsu

Este repoitório é o código fonte de um sistema básico feito para a academia Gracie Barra Campolide que pode ser acessado em https://mamanager.vercel.app/.

## Início

Estas instruções te darão um cópia do projeto e permitirão executar na sua máquina local para fins de desenvolvimento e testes.

### Pré-requisitos

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

### Variáveis de Ambiente

É necessário fornecer os dados de uma aplicação do Auth0 (pode ser gratuita) no arquivo .env, assim como o Bearer passado no cabeçalho das requisiçoes para autenticação no back-end com o JWT.

## Layout

Foi criado um layout básico implementado por meio classes CSS.

## Construído com:

- [NextJS](https://nextjs.org/) - The React Framework (at the version 10).
- [Auth0](https://auth0.com/) - Secure login infrastructure to authenticate users.
- [Formik](https://formik.org/) - The React forms API.
- [Day.js](https://day.js.org/) - JavaScript library that parses, validates, manipulates, and displays dates and times.
- Yup - The JavaScript schema builder for value parsing and validation.

## Autor

- **Philippe Berto:** [LinkedIn](https://www.linkedin.com/in/philippeberto/) | [Resume](https://resume.philippeberto.vercel.app/)

## Funcionalidades do Sistema

### Requisitos Funcionais

- Operaçoes de CRUD para Alunos
- Operaçoes de CRUD para Mensalidades
- Operaçoes de CRUD para Vendas
- Operaçoes de CRUD para Compras
- Operaçoes de CRUD para Despesas

##### Obs.: Atualmente está implementada a operação de Update apenas para Alunos e as operações de Delete estão presentes no back-end e ainda não foram implementas aqui no front-end.

Painel inicial com as seguintes informações:

- Total de mensalidades por período (Mês atual)
- Total de vendas por período (Mês atual)
- Total de despesas por período (Mês atual)
- Total de compras por período (Mês atual)
- Resumo do saldo: Mensalidades + Vendas - Compras - Despesas = Saldo

# Back-End

A API para acesso à base de dados pode ser encontrada no repositório https://github.com/philippeberto/MAmanager-API. Foram utilizados o Express, o Apollo Server e foi desenvolvida sob o padrão GraphQL.
