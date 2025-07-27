// src/data/lessons.ts

export interface InteractiveContent {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Command {
  command: string;
  description: string;
  expected: string;
}

export interface ExerciseContent {
  task: string;
  command: string;
  expectedOutput: string;
  hint: string;
  explanation: string;
}

export interface LessonContent {
  theory?: string;
  interactive?: InteractiveContent;
  exercise?: ExerciseContent;
  commands?: Command[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'theory' | 'command' | 'practical';
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  description: string;
  content: LessonContent;
}

export interface Badge {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Tip {
  title: string;
  description: string;
  icon: string;
}

export const lessonsData: Record<string, Lesson[]> = {
  basics: [
    {
      id: 'basics-1',
      title: 'O que é Git?',
      type: 'theory',
      duration: '5 min',
      difficulty: 'Iniciante',
      description: 'Entenda os conceitos fundamentais do Git e controle de versão',
      content: {
        theory: `
Git é um sistema de controle de versão distribuído criado por Linus Torvalds em 2005. 

**Por que usar Git?**
• 📚 **Histórico completo**: Rastreia todas as mudanças nos seus arquivos
• 🔄 **Colaboração**: Permite que várias pessoas trabalhem no mesmo projeto
• 🔒 **Backup distribuído**: Cada desenvolvedor tem uma cópia completa do projeto
• 🌿 **Branches**: Trabalhe em funcionalidades paralelas sem afetar o código principal

**Conceitos básicos:**
• **Repositório**: Pasta que contém seu projeto e todo o histórico
• **Commit**: Um snapshot do seu projeto em um momento específico
• **Working Directory**: Os arquivos que você está editando
• **Staging Area**: Área temporária antes de fazer commit

Git é diferente de outros sistemas porque é **distribuído** - não depende de um servidor central!
        `,
        interactive: {
          question: 'Qual é a principal vantagem do Git ser um sistema distribuído?',
          options: [
            'É mais rápido que sistemas centralizados',
            'Cada desenvolvedor tem uma cópia completa do histórico',
            'Usa menos espaço em disco',
            'É mais fácil de aprender'
          ],
          correct: 1,
          explanation: 'Correto! Com Git distribuído, cada clone é um backup completo do projeto, incluindo todo o histórico. Isso significa que você pode trabalhar offline e ter segurança total dos dados.'
        }
      }
    },
    {
      id: 'basics-2',
      title: 'Instalação e Configuração',
      type: 'practical',
      duration: '10 min',
      difficulty: 'Iniciante',
      description: 'Configure o Git no seu sistema e defina suas credenciais',
      content: {
        theory: `
Antes de começar a usar Git, precisamos configurá-lo corretamente.

**Configurações essenciais:**
• Nome de usuário
• Email
• Editor padrão
• Comportamento de line endings

Estas configurações são importantes porque aparecem em todos os seus commits!
        `,
        commands: [
          {
            command: 'git config --global user.name "Seu Nome"',
            description: 'Define seu nome para os commits',
            expected: 'Configuração salva com sucesso'
          },
          {
            command: 'git config --global user.email "seu@email.com"',
            description: 'Define seu email para os commits',
            expected: 'Email configurado com sucesso'
          },
          {
            command: 'git config --list',
            description: 'Visualiza todas as configurações',
            expected: 'Lista de configurações do Git'
          }
        ]
      }
    },
    {
      id: 'basics-3',
      title: 'git init - Criando um Repositório',
      type: 'command',
      duration: '8 min',
      difficulty: 'Iniciante',
      description: 'Aprenda a inicializar um novo repositório Git',
      content: {
        theory: `
O comando \`git init\` cria um novo repositório Git em uma pasta.

**O que acontece quando você executa git init?**
• Cria uma pasta oculta \`.git\` na raiz do projeto
• Esta pasta contém toda a infraestrutura do Git
• Transforma uma pasta comum em um repositório Git

**Sintaxe:**
\`\`\`bash
git init                    # Inicializa na pasta atual
git init nome-do-projeto    # Cria pasta e inicializa
\`\`\`

⚠️ **Importante**: Nunca delete a pasta .git - você perderia todo o histórico!
        `,
        exercise: {
          task: 'Inicialize um novo repositório Git',
          command: 'git init',
          expectedOutput: 'Initialized empty Git repository',
          hint: 'Digite exatamente: git init',
          explanation: 'Parabéns! Você criou seu primeiro repositório Git. A pasta .git foi criada e contém toda a infraestrutura necessária.'
        }
      }
    },
    {
      id: 'basics-4',
      title: 'git add - Staging Area',
      type: 'command',
      duration: '12 min',
      difficulty: 'Iniciante',
      description: 'Entenda como preparar arquivos para commit',
      content: {
        theory: `
O **Staging Area** (Área de Preparação) é um conceito único do Git.

**Fluxo de trabalho Git:**
1. **Working Directory**: Você edita arquivos
2. **Staging Area**: Você prepara mudanças com \`git add\`
3. **Repository**: Você salva mudanças com \`git commit\`

**Comandos git add:**
\`\`\`bash
git add arquivo.txt        # Adiciona um arquivo específico
git add .                 # Adiciona todos os arquivos
git add *.js              # Adiciona todos arquivos .js
git add pasta/            # Adiciona toda uma pasta
\`\`\`

**Por que usar Staging Area?**
• Permite commits mais organizados
• Você pode escolher exatamente o que incluir
• Revisa mudanças antes de committar
        `,
        exercise: {
          task: 'Adicione todos os arquivos ao staging area',
          command: 'git add .',
          expectedOutput: 'Files added to staging area',
          hint: 'Use git add . para adicionar todos os arquivos',
          explanation: 'Perfeito! Todos os arquivos foram adicionados ao staging area e estão prontos para commit.'
        }
      }
    },
    {
      id: 'basics-5',
      title: 'git commit - Salvando Mudanças',
      type: 'command',
      duration: '15 min',
      difficulty: 'Iniciante',
      description: 'Aprenda a criar commits significativos',
      content: {
        theory: `
O \`git commit\` cria um snapshot permanente das mudanças no staging area.

**Anatomia de um commit:**
• **Hash único**: Identifica o commit (ex: a1b2c3d...)
• **Autor**: Quem fez o commit
• **Data/Hora**: Quando foi feito
• **Mensagem**: Descreve as mudanças
• **Mudanças**: Diff do que foi alterado

**Boas práticas para mensagens:**
✅ \`git commit -m "Add user authentication"\`
✅ \`git commit -m "Fix login redirect bug"\`
✅ \`git commit -m "Update README with setup instructions"\`

❌ \`git commit -m "fix"\`
❌ \`git commit -m "updates"\`
❌ \`git commit -m "asdasd"\`

**Comandos úteis:**
\`\`\`bash
git commit -m "mensagem"     # Commit com mensagem
git commit -am "mensagem"    # Add + commit (só arquivos já rastreados)
git commit --amend          # Modifica o último commit
\`\`\`
        `,
        exercise: {
          task: 'Faça seu primeiro commit com uma mensagem descritiva',
          command: 'git commit -m "Initial commit"',
          expectedOutput: 'Commit created successfully',
          hint: 'Use git commit -m "sua mensagem" entre aspas',
          explanation: 'Excelente! Você criou seu primeiro commit. Esta é agora uma versão salva do seu projeto que nunca será perdida.'
        }
      }
    },
    {
      id: 'basics-6',
      title: 'git status - Verificando Estado',
      type: 'command',
      duration: '10 min',
      difficulty: 'Iniciante',
      description: 'Monitore o estado dos seus arquivos',
      content: {
        theory: `
O \`git status\` é seu melhor amigo! Mostra o estado atual do repositório.

**Informações que git status fornece:**
• Arquivos modificados
• Arquivos no staging area
• Arquivos não rastreados (untracked)
• Branch atual
• Commits à frente/atrás do remote

**Estados dos arquivos:**
• 🔴 **Modified**: Arquivo foi alterado mas não está staged
• 🟢 **Staged**: Arquivo está pronto para commit
• 🔵 **Untracked**: Arquivo novo que Git não conhece
• ⚪ **Unmodified**: Arquivo não foi alterado

**Exemplo de saída:**
\`\`\`
On branch main
Changes to be committed:
  modified:   arquivo.txt

Changes not staged for commit:
  modified:   outro.txt

Untracked files:
  novo-arquivo.txt
\`\`\`
        `,
        exercise: {
          task: 'Verifique o status atual do repositório',
          command: 'git status',
          expectedOutput: 'On branch main\nnothing to commit, working tree clean',
          hint: 'Digite git status para ver o estado atual',
          explanation: 'Ótimo! O git status é essencial para entender o que está acontecendo no seu repositório.'
        }
      }
    },
    {
      id: 'basics-7',
      title: 'git log - Histórico de Commits',
      type: 'command',
      duration: '12 min',
      difficulty: 'Iniciante',
      description: 'Explore o histórico do seu projeto',
      content: {
        theory: `
O \`git log\` mostra o histórico de commits do seu projeto.

**Variações úteis:**
\`\`\`bash
git log                    # Histórico completo
git log --oneline         # Uma linha por commit
git log --graph           # Mostra branches visualmente
git log -p                # Mostra as mudanças de cada commit
git log --author="nome"   # Commits de um autor específico
git log --since="1 week ago"  # Commits da última semana
\`\`\`

**Informações em cada commit:**
• **Hash**: Identificador único (SHA-1)
• **Author**: Quem fez o commit
• **Date**: Quando foi feito
• **Message**: Descrição das mudanças

**Navegação no log:**
• **Espaço**: Próxima página
• **q**: Sair do log
• **j/k**: Navegar para cima/baixo
        `,
        exercise: {
          task: 'Visualize o histórico de commits',
          command: 'git log --oneline',
          expectedOutput: 'a1b2c3d Initial commit',
          hint: 'Use git log --oneline para ver uma versão resumida',
          explanation: 'Perfeito! O git log é fundamental para entender a evolução do seu projeto.'
        }
      }
    },
    {
      id: 'basics-8',
      title: 'git diff - Visualizando Mudanças',
      type: 'command',
      duration: '15 min',
      difficulty: 'Iniciante',
      description: 'Compare versões e veja exatamente o que mudou',
      content: {
        theory: `
O \`git diff\` mostra as diferenças entre versões dos arquivos.

**Tipos de diff:**
\`\`\`bash
git diff                  # Working directory vs staging area
git diff --staged         # Staging area vs último commit
git diff HEAD            # Working directory vs último commit
git diff commit1 commit2  # Entre dois commits específicos
\`\`\`

**Lendo o output do diff:**
\`\`\`diff
- linha removida (vermelho)
+ linha adicionada (verde)
  linha sem mudança
@@ -1,3 +1,4 @@  # Localização das mudanças
\`\`\`

**Casos de uso:**
• Revisar mudanças antes de committar
• Verificar o que foi alterado
• Comparar versões diferentes
• Debug de problemas

**Dicas:**
• Use \`git diff --color-words\` para diffs mais legíveis
• \`git diff --name-only\` mostra apenas nomes dos arquivos
        `,
        exercise: {
          task: 'Veja as mudanças que estão staged para commit',
          command: 'git diff --staged',
          expectedOutput: 'No differences found (nothing staged)',
          hint: 'Use git diff --staged para ver mudanças no staging area',
          explanation: 'Ótimo! O git diff é essencial para revisar suas mudanças antes de committar.'
        }
      }
    }
  ],

  branching: [
    {
      id: 'branching-1',
      title: 'Conceito de Branches',
      type: 'theory',
      duration: '8 min',
      difficulty: 'Intermediário',
      description: 'Entenda o poder dos branches no Git',
      content: {
        theory: `
**Branches** são como universos paralelos do seu código!

**O que são branches?**
• Linhas independentes de desenvolvimento
• Permitem trabalhar em funcionalidades sem afetar o código principal
• São extremamente leves no Git (apenas ponteiros)

**Branch principal:**
• \`main\` (ou \`master\` em projetos antigos)
• Contém a versão estável do projeto
• Nunca deve ser quebrada

**Casos de uso:**
• 🚀 **feature/login**: Nova funcionalidade de login
• 🐛 **hotfix/critical-bug**: Correção urgente
• 🧪 **experiment/new-ui**: Testes experimentais
• 📚 **docs/api-documentation**: Documentação

**Vantagens:**
• Isolamento total de mudanças
• Facilita code review
• Permite desenvolvimento paralelo
• Rollback fácil se algo der errado
        `,
        interactive: {
          question: 'Qual é a principal vantagem de usar branches?',
          options: [
            'Economizar espaço em disco',
            'Trabalhar em funcionalidades sem afetar o código principal',
            'Acelerar o Git',
            'Fazer backup automático'
          ],
          correct: 1,
          explanation: 'Exato! Branches permitem desenvolvimento isolado, mantendo o código principal estável.'
        }
      }
    },
    {
      id: 'branching-2',
      title: 'git branch - Gerenciando Branches',
      type: 'command',
      duration: '12 min',
      difficulty: 'Intermediário',
      description: 'Criar, listar e deletar branches',
      content: {
        theory: `
O comando \`git branch\` gerencia branches no seu repositório.

**Comandos essenciais:**
\`\`\`bash
git branch                  # Lista branches locais
git branch -a              # Lista todos os branches (local + remote)
git branch nome-branch     # Cria novo branch
git branch -d nome-branch  # Deleta branch (safe)
git branch -D nome-branch  # Força deleção
git branch -m novo-nome    # Renomeia branch atual
\`\`\`

**Visualizando branches:**
\`\`\`bash
git branch -v              # Mostra último commit de cada branch
git branch --merged        # Branches já merged
git branch --no-merged     # Branches não merged
\`\`\`

**Convenções de nomenclatura:**
• \`feature/user-authentication\`
• \`bugfix/login-redirect\`
• \`hotfix/security-patch\`
• \`docs/api-updates\`
        `,
        exercise: {
          task: 'Crie um novo branch chamado "feature/awesome-feature"',
          command: 'git branch feature/awesome-feature',
          expectedOutput: 'Branch created successfully',
          hint: 'Use git branch seguido do nome do branch',
          explanation: 'Perfeito! Você criou um novo branch. Note que você ainda está no branch atual - para mudar, use git checkout.'
        }
      }
    }
    // ... mais lições de branching
  ],

  collaboration: [
    {
      id: 'collaboration-1',
      title: 'git clone - Copiando Repositórios',
      type: 'command',
      duration: '10 min',
      difficulty: 'Intermediário',
      description: 'Aprenda a clonar repositórios remotos',
      content: {
        theory: `
O \`git clone\` cria uma cópia local de um repositório remoto.

**Sintaxe:**
\`\`\`bash
git clone <url-do-repositorio>
git clone <url> nome-da-pasta
git clone --depth 1 <url>  # Clone shallow (sem histórico)
\`\`\`

**O que acontece no clone:**
• Downloads todos os arquivos
• Cria cópia completa do histórico
• Configura remote "origin" automaticamente
• Faz checkout do branch principal

**Protocolos suportados:**
• HTTPS: \`https://github.com/user/repo.git\`
• SSH: \`git@github.com:user/repo.git\`
• Local: \`/path/to/repo\`
        `,
        exercise: {
          task: 'Clone um repositório de exemplo',
          command: 'git clone https://github.com/example/repo.git',
          expectedOutput: 'Repository cloned successfully',
          hint: 'Use git clone seguido da URL do repositório',
          explanation: 'Ótimo! Você clonou um repositório e agora tem uma cópia local completa.'
        }
      }
    }
    // ... mais lições de collaboration
  ],

  advanced: [
    {
      id: 'advanced-1',
      title: 'git rebase - Reorganizando Histórico',
      type: 'command',
      duration: '20 min',
      difficulty: 'Avançado',
      description: 'Aprenda a reorganizar commits de forma elegante',
      content: {
        theory: `
O \`git rebase\` é uma ferramenta poderosa para reorganizar o histórico.

**Rebase vs Merge:**
• **Merge**: Mantém histórico original, cria merge commit
• **Rebase**: Reescreve histórico, cria linha linear

**Tipos de rebase:**
\`\`\`bash
git rebase main              # Rebase branch atual em main
git rebase -i HEAD~3         # Interactive rebase dos últimos 3 commits
git rebase --onto new-base old-base branch  # Rebase avançado
\`\`\`

**Interactive rebase permite:**
• **pick**: Manter commit como está
• **reword**: Mudar mensagem do commit
• **edit**: Pausar para editar commit
• **squash**: Combinar com commit anterior
• **drop**: Remover commit

⚠️ **NUNCA** faça rebase de commits já compartilhados!
        `,
        exercise: {
          task: 'Faça rebase interativo dos últimos 2 commits',
          command: 'git rebase -i HEAD~2',
          expectedOutput: 'Interactive rebase started',
          hint: 'Use git rebase -i HEAD~2 para editar os últimos 2 commits',
          explanation: 'Excelente! O rebase interativo é uma ferramenta poderosa para manter um histórico limpo.'
        }
      }
    }
    // ... mais lições avançadas
  ]
};

export const badges: Record<string, Badge> = {
  'git-starter': {
    name: 'Git Starter',
    description: 'Completou a primeira lição',
    icon: '🌱',
    color: 'green'
  },
  'commit-master': {
    name: 'Commit Master',
    description: 'Fez 10 commits corretos',
    icon: '💾',
    color: 'blue'
  },
  'branch-ninja': {
    name: 'Branch Ninja',
    description: 'Dominou o uso de branches',
    icon: '🥷',
    color: 'purple'
  },
  'merge-champion': {
    name: 'Merge Champion',
    description: 'Resolveu conflitos como um pro',
    icon: '🏆',
    color: 'gold'
  },
  'rebase-wizard': {
    name: 'Rebase Wizard',
    description: 'Reorganizou histórico perfeitamente',
    icon: '🧙‍♂️',
    color: 'indigo'
  }
};

export const tips: Tip[] = [
  {
    title: 'Commits Frequentes',
    description: 'Faça commits pequenos e frequentes. É mais fácil reverter mudanças específicas.',
    icon: '💡'
  },
  {
    title: 'Mensagens Descritivas',
    description: 'Escreva mensagens que expliquem "por que" você fez a mudança, não "o que" mudou.',
    icon: '📝'
  },
  {
    title: 'Branches para Tudo',
    description: 'Crie um branch para cada feature ou bug fix. Mantenha main sempre estável.',
    icon: '🌿'
  },
  {
    title: 'Git Status é Vida',
    description: 'Use git status constantemente para entender o estado atual do repositório.',
    icon: '🔍'
  }
];
