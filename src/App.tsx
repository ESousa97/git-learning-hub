import { useState } from 'react';
import { Play, Book, GitBranch, GitCommit, GitMerge, Trophy, Star, Zap } from 'lucide-react';
import Header from './components/Header';
import ModuleCard from './components/ModuleCard';
import LessonViewer from './components/LessonViewer';
import ProgressDashboard from './components/ProgressDashboard';
import type { UserProgress, Module } from './types';
import './styles/globals.css';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'module' | 'progress'>('home');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: [],
    totalScore: 0,
    currentStreak: 0,
    badges: ['git-starter']
  });

  const modules: Module[] = [
    {
      id: 'basics',
      title: 'Git Básico',
      icon: <Book className="w-6 h-6" />,
      description: 'Aprenda os conceitos fundamentais do Git',
      color: 'from-blue-500 to-blue-600',
      lessons: 8,
      difficulty: 'Iniciante'
    },
    {
      id: 'branching',
      title: 'Branches & Merge',
      icon: <GitBranch className="w-6 h-6" />,
      description: 'Domine o trabalho com branches',
      color: 'from-green-500 to-green-600',
      lessons: 6,
      difficulty: 'Intermediário'
    },
    {
      id: 'collaboration',
      title: 'Colaboração',
      icon: <GitMerge className="w-6 h-6" />,
      description: 'Trabalhe em equipe com Git',
      color: 'from-purple-500 to-purple-600',
      lessons: 5,
      difficulty: 'Intermediário'
    },
    {
      id: 'advanced',
      title: 'Git Avançado',
      icon: <Zap className="w-6 h-6" />,
      description: 'Técnicas avançadas e troubleshooting',
      color: 'from-red-500 to-red-600',
      lessons: 7,
      difficulty: 'Avançado'
    }
  ];

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId);
    setCurrentView('module');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header 
        currentView={currentView}
        onBackToHome={handleBackToHome}
        userProgress={userProgress}
      />
      
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {currentView === 'home' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-8 md:py-10">
              <div className="mb-6">
                <GitCommit className="w-16 h-16 mx-auto text-blue-400 mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Git Learning <span className="text-blue-400">Hub</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Aprenda Git de forma interativa e divertida! 
                  Domine o controle de versão através de exercícios práticos.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                <button 
                  onClick={() => handleModuleSelect('basics')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Começar Agora
                </button>
                <button 
                  onClick={() => setCurrentView('progress')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
                >
                  <Trophy className="w-5 h-5" />
                  Meu Progresso
                </button>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onSelect={handleModuleSelect}
                  userProgress={userProgress}
                />
              ))}
            </div>

            {/* Features Section */}
            <div className="bg-gray-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Por que aprender Git aqui?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <GitCommit className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Terminal Interativo</h3>
                  <p className="text-gray-400">Pratique comandos Git em um terminal simulado</p>
                </div>
                <div className="text-center">
                  <GitBranch className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Exercícios Práticos</h3>
                  <p className="text-gray-400">Resolva problemas reais com feedback instantâneo</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Sistema de Progresso</h3>
                  <p className="text-gray-400">Ganhe badges e acompanhe sua evolução</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'module' && selectedModule && (
          <LessonViewer 
            moduleId={selectedModule}
            userProgress={userProgress}
            setUserProgress={setUserProgress}
            onBackToHome={handleBackToHome}
          />
        )}

        {currentView === 'progress' && (
          <ProgressDashboard 
            userProgress={userProgress}
            modules={modules}
          />
        )}
      </main>
    </div>
  );
}

export default App;
