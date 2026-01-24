# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added
- Configuração de testes com Vitest
- Testes unitários para App e ModuleCard
- ESLint com TypeScript e Prettier
- Prettier para formatação consistente
- GitHub Actions para CI (lint, test, build)
- Dependabot para atualizações automáticas
- Templates de Issue e Pull Request
- Documentação de contribuição (CONTRIBUTING.md)
- Código de Conduta (CODE_OF_CONDUCT.md)
- Política de Segurança (SECURITY.md)
- Design tokens centralizados no Tailwind
- EditorConfig para consistência entre editores

### Changed
- Refatorado sistema de estilos (removidas duplicações)
- Consolidados tipos TypeScript em arquivo central
- Atualizado Vite para v7.x
- Atualizado ESLint config para flat config
- Melhorada estrutura de pastas do projeto

### Fixed
- Corrigidas vulnerabilidades de segurança em dependências
- Corrigido ESLint que não funcionava

### Removed
- Removido App.css duplicado (estilos movidos para globals.css)
- Removido components.d.ts não utilizado

## [1.0.0] - 2024-XX-XX

### Added
- Lançamento inicial do Git Learning Hub
- 4 módulos de aprendizado: Básico, Branches, Colaboração, Avançado
- Terminal interativo simulado
- Sistema de progresso com pontos e badges
- Quizzes interativos
- Dashboard de progresso
- Interface responsiva
- Deploy na Vercel

### Modules
- **Git Básico**: 8 lições cobrindo fundamentos
- **Branches & Merge**: 6 lições sobre branching
- **Colaboração**: 5 lições sobre trabalho em equipe
- **Git Avançado**: 7 lições sobre técnicas avançadas

---

[Unreleased]: https://github.com/ESousa97/git-learning-hub/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ESousa97/git-learning-hub/releases/tag/v1.0.0
