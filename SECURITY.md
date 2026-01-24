# Política de Segurança

## Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | :white_check_mark: |

## Reportando uma Vulnerabilidade

A segurança do Git Learning Hub é levada a sério. Se você descobrir uma vulnerabilidade de segurança, pedimos que a reporte de forma responsável.

### Como Reportar

**NÃO** abra uma issue pública para vulnerabilidades de segurança.

Em vez disso:

1. **Email**: Entre em contato diretamente com os maintainers através do GitHub
2. **GitHub Security Advisories**: Use a aba "Security" do repositório para criar um advisory privado

### O que Incluir

Por favor, inclua o máximo de informações possível:

- Tipo de vulnerabilidade (XSS, CSRF, injeção, etc.)
- Passos para reproduzir o problema
- Impacto potencial
- Sugestões de correção (se houver)

### Processo de Resposta

1. **Confirmação**: Você receberá uma confirmação em até 48 horas
2. **Avaliação**: Avaliaremos a vulnerabilidade e determinaremos sua severidade
3. **Correção**: Trabalharemos em uma correção
4. **Divulgação**: Coordenaremos a divulgação pública após a correção

### Escopo

Esta política se aplica a:

- Código-fonte do repositório
- Dependências diretas
- Infraestrutura de build/deploy (GitHub Actions)

### Fora do Escopo

- Vulnerabilidades em serviços de terceiros (Vercel, GitHub)
- Ataques de engenharia social
- Ataques físicos

## Práticas de Segurança

### Dependências

- Usamos Dependabot para atualizações automáticas de segurança
- Executamos `npm audit` regularmente
- Mantemos dependências atualizadas

### CI/CD

- Pull requests passam por verificação de segurança
- Secrets são gerenciados via GitHub Secrets
- Builds são reproduzíveis

### Código

- ESLint com regras de segurança
- TypeScript strict mode
- Sem segredos hardcoded no código

## Reconhecimento

Agradecemos a todos que reportam vulnerabilidades de forma responsável. Contribuidores de segurança serão reconhecidos no CHANGELOG (com permissão).

---

Obrigado por ajudar a manter o Git Learning Hub seguro! 🔒
