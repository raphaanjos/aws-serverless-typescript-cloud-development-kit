# aws-serverless-typescript-cloud-development-kit

## Descrição
Este repositório contém exemplos e projetos utilizando AWS Serverless, TypeScript e AWS Cloud Development Kit (CDK). O objetivo é demonstrar como construir aplicações serverless robustas e escaláveis na AWS, aproveitando os benefícios do TypeScript para um desenvolvimento mais seguro e organizado, e do CDK para a infraestrutura como código.

## Índice
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Primeiros Passos](#primeiros-passos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Exemplos](#exemplos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Funcionalidades
- Desenvolvimento de aplicações serverless com AWS Lambda, API Gateway, DynamoDB, S3, SQS, etc.
- Utilização de TypeScript para tipagem estática e melhor manutenibilidade do código.
- Gerenciamento de infraestrutura como código com AWS CDK.
- Exemplos de CI/CD para pipelines serverless.
- Testes unitários e de integração para funções Lambda.

## Tecnologias Utilizadas
- **AWS Serverless**: Lambda, API Gateway, DynamoDB, S3, SQS, SNS, EventBridge, etc.
- **TypeScript**: Linguagem de programação para o desenvolvimento das funções e do CDK.
- **AWS Cloud Development Kit (CDK)**: Framework para definir sua infraestrutura em código.
- **Node.js**: Runtime para as funções Lambda.
- **npm/yarn**: Gerenciador de pacotes.

## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://classic.yarnpkg.com/en/docs/install/)
- [AWS CLI](https://aws.amazon.com/cli/) configurado com suas credenciais AWS
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install) (`npm install -g aws-cdk`)

## Primeiros Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/aws-serverless-typescript-cloud-development-kit.git
   cd aws-serverless-typescript-cloud-development-kit


1. **Instale as dependências:**
Navegue até o diretório de um exemplo específico e instale as dependências. Por exemplo:
cd examples/hello-world-lambda
npm install # ou yarn install

2. **Implante a aplicação (usando CDK):**
No diretório onde o cdk.json do seu projeto está localizado:
cdk bootstrap # Se esta for a primeira vez que você usa o CDK em sua conta/região
cdk deploy

## Estrutura do Projeto
A estrutura do projeto será organizada da seguinte forma:

├── examples/ # Diretório para diferentes exemplos e projetos
│ ├── hello-world-lambda/ # Exemplo de uma função Lambda simples
│ │ ├── src/ # Código fonte da função Lambda
│ │ │ └── handler.ts
│ │ ├── lib/ # Definição da stack CDK para este exemplo
│ │ │ └── hello-world-stack.ts
│ │ ├── cdk.json # Configuração do CDK para este exemplo
│ │ ├── package.json
│ │ └── tsconfig.json
│ └── another-example/ # Outro exemplo de projeto serverless
│ └── ...
├── docs/ # Documentação adicional
├── .github/ # Configurações do GitHub (workflows, issues templates)
├── .gitignore
├── README.md
├── package.json # Dependências gerais do repositório (se houver)
└── tsconfig.json


## Exemplos
Você encontrará vários exemplos práticos no diretório `examples/`, incluindo:
- **`hello-world-lambda`**: Uma função Lambda "Olá, Mundo!" simples exposta via API Gateway.
- **`crud-api-dynamodb`**: Uma API RESTful para operações CRUD com DynamoDB.
- **`s3-event-processor`**: Uma função Lambda que processa eventos de upload de arquivos no S3.

## Contribuindo
Contribuições são muito bem-vindas! Sinta-se à vontade para abrir issues para reportar bugs, sugerir melhorias ou enviar pull requests com novos exemplos ou funcionalidades.

## Licença
Este projeto está licenciado sob a licença [MIT](LICENSE).