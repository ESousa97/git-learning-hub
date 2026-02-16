<div align="center">

# Git Learning Hub

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/git-learning-hub/ci.yml?branch=main&style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/git-learning-hub/actions/workflows/ci.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/git-learning-hub?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/git-learning-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Plataforma web interativa para aprender Git de forma prática e gamificada — terminal simulado no navegador, módulos progressivos do básico ao avançado, pontuação com badges e dashboard de progresso — React 18, TypeScript, Tailwind CSS e Vite.**

[Demo](https://git-learning-hub.vercel.app)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

<div align="center">

![Demonstração](./assets/git-learning-hub2.gif)

</div>

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Módulos de Aprendizado](#módulos-de-aprendizado)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [FAQ](#faq)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Plataforma web interativa para ensino de Git através de uma abordagem "aprender fazendo" (learning by doing). O projeto oferece um terminal simulado no navegador onde o usuário pratica comandos Git reais com feedback instantâneo, acompanhado de módulos progressivos organizados por dificuldade e um sistema de gamificação com pontos, níveis e badges.

O repositório prioriza:

- **Terminal interativo** — Simulação de terminal Git no navegador com feedback em tempo real para cada comando
- **Gamificação** — Sistema de pontos, níveis, badges e streaks para manter engajamento
- **Módulos progressivos** — 26 lições organizadas em 4 módulos do iniciante ao avançado
- **Dashboard de progresso** — Acompanhamento visual da evolução do usuário
- **100% client-side** — Funciona offline após o carregamento inicial, sem backend necessário
- **React 18 + TypeScript** — Componentes tipados com Tailwind CSS para estilização

---

## Funcionalidades

- **Terminal Git simulado** — Interface de terminal no navegador para praticar comandos com feedback instantâneo
- **26 lições em 4 módulos** — Progressão do `git init` ao `git cherry-pick` com dificuldade gradual
- **Sistema de pontuação** — Pontos por lição completada, badges por módulo e streaks por consistência
- **Dashboard de progresso** — Visualização da evolução com métricas de lições, módulos e tempo
- **Feedback contextual** — Mensagens explicativas para acertos e erros em cada comando
- **Offline-first** — Funciona completamente no navegador após carregamento inicial
- **Design responsivo** — Interface adaptativa com Tailwind CSS para desktop e mobile

---

## Módulos de Aprendizado

| Módulo                  | Lições | Dificuldade   | Conteúdo                                     |
| ----------------------- | ------ | ------------- | -------------------------------------------- |
| **Git Básico**          | 8      | Iniciante     | init, add, commit, status, log, diff         |
| **Branches & Merge**    | 6      | Intermediário | branch, checkout, merge, conflitos           |
| **Colaboração**         | 5      | Intermediário | clone, push, pull, remote                    |
| **Git Avançado**        | 7      | Avançado      | rebase, stash, cherry-pick, reset            |

---

## Tecnologias

### Core

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

### Ferramentas de Desenvolvimento

![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Node.js 18+ e npm 9+
- Navegador moderno (Chrome, Firefox, Safari, Edge)

---

## Estrutura do Projeto

```
git-learning-hub/
├── src/
│   ├── components/        # Componentes React (Terminal, Dashboard, Lessons)
│   ├── data/              # Dados das lições e módulos
│   ├── styles/            # Estilos globais
│   ├── test/              # Testes unitários (Vitest)
│   └── types/             # Tipos TypeScript
├── public/                # Assets estáticos
├── assets/
│   └── git-learning-hub2.gif  # GIF demonstrativo
├── .github/
│   └── workflows/
│       └── ci.yml         # Pipeline CI
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração Vite
├── tailwind.config.js     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
├── eslint.config.js       # Configuração ESLint
├── CONTRIBUTING.md        # Guia de contribuição
├── CODE_OF_CONDUCT.md     # Código de conduta
└── LICENSE                # Licença MIT
```

---

## Começando

### Pré-requisitos

```bash
node --version  # v18 ou superior
npm --version   # v9 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/git-learning-hub.git
cd git-learning-hub
```

2. **Instale as dependências**

```bash
npm install
```

### Uso Local

```bash
npm run dev
```

Acesse: `http://localhost:5173/`

**Produção:** [git-learning-hub.vercel.app](https://git-learning-hub.vercel.app)

---

## Scripts Disponíveis

```bash
# Desenvolvimento com HMR
npm run dev

# Build de produção
npm run build

# Preview do build local
npm run preview

# Lint (ESLint)
npm run lint

# Formatação (Prettier)
npm run format

# Testes unitários (Vitest)
npm run test

# Testes com cobertura
npm run test:coverage

# Type checking (TypeScript)
npm run typecheck
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com lint, type check e testes via GitHub Actions
- **Type Safety** — TypeScript em strict mode
- **Testes** — Testes unitários com Vitest
- **Linting** — ESLint com regras TypeScript + Prettier para formatação
- **Dependabot** — Atualizações automáticas de segurança

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md). Para código de conduta, consulte [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. Cada push na branch `main` aciona build e deploy, com URLs de preview para Pull Requests.

---

## FAQ

<details>
<summary><strong>Preciso ter Git instalado para usar a plataforma?</strong></summary>

Não. O terminal é completamente simulado no navegador — não há execução real de comandos Git. Isso permite praticar com segurança sem risco de afetar repositórios locais.
</details>

<details>
<summary><strong>A plataforma funciona offline?</strong></summary>

Sim, após o carregamento inicial. Toda a lógica, lições e simulação de terminal rodam 100% client-side no navegador.
</details>

<details>
<summary><strong>O progresso é salvo entre sessões?</strong></summary>

Sim. Pontuação, lições completadas, badges e streaks são persistidos localmente no navegador via localStorage.
</details>

<details>
<summary><strong>Quais comandos Git são cobertos?</strong></summary>

26 lições cobrindo init, add, commit, status, log, diff, branch, checkout, merge, clone, push, pull, remote, rebase, stash, cherry-pick e reset — do iniciante ao avançado.
</details>

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#git-learning-hub)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
