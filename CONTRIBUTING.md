# Contribuindo para o Git Learning Hub

Obrigado por considerar contribuir para o Git Learning Hub! 🎉

Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)

## Código de Conduta

Este projeto adota o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, você concorda em manter este código.

## Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/git-learning-hub.git
cd git-learning-hub

# Adicione o upstream
git remote add upstream https://github.com/ESousa97/git-learning-hub.git
```

### 2. Crie uma Branch

```bash
# Atualize sua branch main
git checkout main
git pull upstream main

# Crie uma branch para sua feature/fix
git checkout -b feature/minha-nova-feature
# ou
git checkout -b fix/correcao-do-bug
```

### 3. Desenvolva

Faça suas alterações seguindo os [padrões de código](#padrões-de-código).

### 4. Teste

```bash
# Execute os testes
npm run test

# Verifique o linting
npm run lint

# Verifique a formatação
npm run format:check

# Verifique os tipos
npm run typecheck
```

### 5. Commit

Siga o padrão [Conventional Commits](#commits).

### 6. Push e Pull Request

```bash
git push origin feature/minha-nova-feature
```

Abra um Pull Request no GitHub.

## Configuração do Ambiente

### Pré-requisitos

- Node.js 18+ 
- npm 9+

### Instalação

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Executa o ESLint |
| `npm run lint:fix` | Corrige problemas do ESLint automaticamente |
| `npm run format` | Formata o código com Prettier |
| `npm run test` | Executa os testes em modo watch |
| `npm run test:ci` | Executa os testes uma vez |
| `npm run test:coverage` | Executa os testes com coverage |
| `npm run typecheck` | Verifica tipos TypeScript |

## Padrões de Código

### TypeScript

- Use tipos explícitos sempre que possível
- Prefira `interface` para objetos, `type` para unions/intersections
- Use `type` imports: `import type { ... } from '...'`

### React

- Use functional components com hooks
- Use `FC` para tipagem de componentes
- Mantenha componentes pequenos e focados

### Estilos

- Use Tailwind CSS para estilização
- Evite CSS inline
- Siga os design tokens definidos em `tailwind.config.js`

### Estrutura de Arquivos

```
src/
├── components/     # Componentes React
├── data/          # Dados estáticos
├── styles/        # Estilos globais
├── test/          # Configuração e testes
└── types/         # Tipos TypeScript
```

## Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

| Tipo | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Formatação (não afeta código) |
| `refactor` | Refatoração |
| `test` | Adição/modificação de testes |
| `chore` | Tarefas de manutenção |
| `perf` | Melhoria de performance |
| `ci` | Configuração de CI/CD |

### Exemplos

```bash
feat(lessons): add new git stash lesson
fix(terminal): correct command validation for git add
docs(readme): update installation instructions
refactor(components): simplify ModuleCard props
test(app): add integration tests for navigation
```

## Pull Requests

### Checklist

- [ ] Código segue os padrões do projeto
- [ ] Testes passam (`npm run test:ci`)
- [ ] Lint passa (`npm run lint`)
- [ ] TypeScript compila (`npm run typecheck`)
- [ ] Documentação atualizada (se necessário)
- [ ] Commits seguem Conventional Commits

### Processo de Review

1. Um maintainer revisará seu PR
2. Podem ser solicitadas alterações
3. Após aprovação, o PR será mergeado

## Reportando Bugs

Use o template de [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md).

Inclua:
- Descrição clara do bug
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (navegador, OS)

## Sugerindo Melhorias

Use o template de [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md).

Inclua:
- Descrição clara da melhoria
- Motivação e casos de uso
- Alternativas consideradas

---

## 🙏 Agradecimentos

Obrigado por contribuir! Sua ajuda torna o Git Learning Hub melhor para todos.
