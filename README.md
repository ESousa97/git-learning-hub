# Git Learning Hub

**Plataforma interativa para aprender Git de forma prática, gamificada e acessível via navegador.**

<p align="center">
  <a href="https://git-learning-hub.vercel.app" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🚀_Acesse_a_Plataforma-000000?style=flat&logoColor=white" alt="Acesse a Plataforma">
  </a>
</p>

---

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/ESousa97/git-learning-hub?style=flat&logo=opensourceinitiative&logoColor=white&label=License&color=22c55e" alt="License MIT">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/ESousa97/git-learning-hub/ci.yml?branch=main&style=flat&logo=githubactions&logoColor=white&label=CI" alt="CI Status">
  </a>
  <a href="https://www.codefactor.io/repository/github/esousa97/git-learning-hub">
    <img src="https://img.shields.io/codefactor/grade/github/ESousa97/git-learning-hub?style=flat&logo=codefactor&logoColor=white&label=Code%20Quality" alt="CodeFactor Grade">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub">
    <img src="https://img.shields.io/github/languages/top/ESousa97/git-learning-hub?style=flat&logo=typescript&logoColor=white&label=TypeScript&color=3178c6" alt="TypeScript">
  </a>
</p>

<p align="center">
  <a href="https://github.com/ESousa97/git-learning-hub/commits/main">
    <img src="https://img.shields.io/github/last-commit/ESousa97/git-learning-hub?style=flat&logo=git&logoColor=white&label=Last%20Commit&color=f97316" alt="Last Commit">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub/issues">
    <img src="https://img.shields.io/github/issues/ESousa97/git-learning-hub?style=flat&logo=github&logoColor=white&label=Issues&color=eab308" alt="Issues">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub/pulls">
    <img src="https://img.shields.io/github/issues-pr/ESousa97/git-learning-hub?style=flat&logo=github&logoColor=white&label=PRs&color=a855f7" alt="Pull Requests">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub">
    <img src="https://img.shields.io/github/repo-size/ESousa97/git-learning-hub?style=flat&logo=github&logoColor=white&label=Size&color=64748b" alt="Repo Size">
  </a>
</p>

---

## 📖 Sobre

O **Git Learning Hub** é uma aplicação web interativa concebida como plataforma pedagógica para o ensino de Git. O projeto aborda a curva de aprendizado associada ao Git através de uma abordagem **"aprender fazendo"** (learning by doing).

### ✨ Principais Características

- 🎮 **Aprendizado Gamificado** — Pontos, níveis, badges e streaks
- 💻 **Terminal Interativo** — Pratique comandos Git com feedback instantâneo
- 📚 **Módulos Progressivos** — Do básico ao avançado, passo a passo
- 📊 **Dashboard de Progresso** — Acompanhe sua evolução
- 🌐 **100% no Navegador** — Sem instalação, funciona offline após carregar

---

## 🚀 Demo

<p align="center">
  <img src="./assets/git-learning-hub2.gif" alt="Git Learning Hub Demo" width="100%">
</p>

**[🔗 Acesse agora: git-learning-hub.vercel.app](https://git-learning-hub.vercel.app)**

---

## 🛠️ Tech Stack

| Tecnologia | Propósito |
|------------|-----------|
| ![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat&logo=react&logoColor=white) | Framework UI |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript&logoColor=white) | Tipagem estática |
| ![Vite](https://img.shields.io/badge/Vite-7.x-646cff?style=flat&logo=vite&logoColor=white) | Build tool |
| ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06b6d4?style=flat&logo=tailwindcss&logoColor=white) | Estilização |
| ![Vitest](https://img.shields.io/badge/Vitest-4.x-6e9f18?style=flat&logo=vitest&logoColor=white) | Testes |
| ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat&logo=vercel&logoColor=white) | Hospedagem |

---

## 📂 Estrutura do Projeto

```
git-learning-hub/
├── .github/              # CI/CD, templates, Dependabot
├── src/
│   ├── components/       # Componentes React
│   ├── data/             # Dados das lições
│   ├── styles/           # Estilos globais
│   ├── test/             # Testes unitários
│   └── types/            # Tipos TypeScript
├── public/               # Assets estáticos
└── [configs]             # Configurações (Vite, Tailwind, ESLint, etc.)
```

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ESousa97/git-learning-hub.git
cd git-learning-hub

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Verificar código com ESLint |
| `npm run format` | Formatar código com Prettier |
| `npm run test` | Executar testes |
| `npm run test:coverage` | Testes com coverage |
| `npm run typecheck` | Verificar tipos TypeScript |

---

## 🎓 Módulos de Aprendizado

| Módulo | Lições | Dificuldade | Conteúdo |
|--------|--------|-------------|----------|
| **Git Básico** | 8 | 🟢 Iniciante | init, add, commit, status, log, diff |
| **Branches & Merge** | 6 | 🟡 Intermediário | branch, checkout, merge, conflitos |
| **Colaboração** | 5 | 🟡 Intermediário | clone, push, pull, remote |
| **Git Avançado** | 7 | 🔴 Avançado | rebase, stash, cherry-pick, reset |

---

## 🧪 Qualidade de Código

O projeto mantém altos padrões de qualidade através de:

- ✅ **ESLint** — Linting com regras TypeScript
- ✅ **Prettier** — Formatação consistente
- ✅ **TypeScript Strict** — Tipagem rigorosa
- ✅ **Vitest** — Testes unitários
- ✅ **GitHub Actions** — CI/CD automatizado
- ✅ **Dependabot** — Atualizações de segurança

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja nosso [Guia de Contribuição](CONTRIBUTING.md).

```bash
# Fork o repositório
# Crie uma branch: git checkout -b feature/nova-feature
# Faça commit: git commit -m 'feat: adiciona nova feature'
# Push: git push origin feature/nova-feature
# Abra um Pull Request
```

Por favor, siga nosso [Código de Conduta](CODE_OF_CONDUCT.md).

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👤 Autor

<p align="left">
  <a href="https://github.com/ESousa97">
    <img src="https://img.shields.io/badge/GitHub-ESousa97-181717?style=flat&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/enoque-sousa-bb89aa168/">
    <img src="https://img.shields.io/badge/LinkedIn-Enoque_Sousa-0a66c2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

---

## ⭐ Apoie o Projeto

Se este projeto te ajudou, considere dar uma ⭐ no repositório!

<p align="center">
  <a href="https://github.com/ESousa97/git-learning-hub/stargazers">
    <img src="https://img.shields.io/github/stars/ESousa97/git-learning-hub?style=flat&logo=github&label=Stars&color=eab308" alt="Stars">
  </a>
  <a href="https://github.com/ESousa97/git-learning-hub/network/members">
    <img src="https://img.shields.io/github/forks/ESousa97/git-learning-hub?style=flat&logo=github&label=Forks&color=22c55e" alt="Forks">
  </a>
</p>

<p align="center">
  <sub>Desenvolvido com ❤️ por <a href="https://github.com/ESousa97">Enoque Sousa</a></sub>
</p>

