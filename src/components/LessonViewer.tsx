import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Clock, 
  Book, 
  Terminal as TerminalIcon, 
  Code, 
  Lightbulb, 
  Target 
} from 'lucide-react';
import { lessonsData, type Lesson } from '../data/lessons';
import type { UserProgress } from '../types';
import Terminal from './Terminal';

interface LessonViewerProps {
  moduleId: string;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onBackToHome: () => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({
  moduleId,
  userProgress,
  setUserProgress,
  onBackToHome,
}) => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [lessonCompleted, setLessonCompleted] = useState<boolean>(false);

  const lessons: Lesson[] = lessonsData[moduleId] || [];
  const currentLesson: Lesson | undefined = lessons[currentLessonIndex];

  useEffect(() => {
    if (currentLesson) {
      const isCompleted = userProgress.completedLessons.includes(currentLesson.id);
      setLessonCompleted(isCompleted);
      setShowAnswer(false);
      setSelectedAnswer(null);
    }
  }, [currentLessonIndex, currentLesson, userProgress]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    if (
      currentLesson?.content.interactive &&
      answerIndex === currentLesson.content.interactive.correct
    ) {
      markLessonCompleted();
    }
  };

  const handleCommandSuccess = () => {
    markLessonCompleted();
  };

  const markLessonCompleted = () => {
    if (!lessonCompleted && currentLesson) {
      setLessonCompleted(true);
      setUserProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, currentLesson.id],
        totalScore: prev.totalScore + 10,
        currentStreak: prev.currentStreak + 1,
      }));
    }
  };

  const nextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400 bg-green-400/20';
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/20';
      case 'Avançado': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'theory': return <Book className="w-5 h-5" />;
      case 'command': return <TerminalIcon className="w-5 h-5" />;
      case 'practical': return <Code className="w-5 h-5" />;
      default: return <Play className="w-5 h-5" />;
    }
  };

  const formatTheoryContent = (theory: string): string => {
    return theory
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-700 px-2 py-1 rounded text-green-400 font-mono text-sm">$1</code>')
      .replace(/^• (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^([^<])/gm, '<p class="mb-4">$1')
      .replace(/([^>])$/gm, '$1</p>');
  };

  if (!currentLesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">Módulo não encontrado</h2>
        <button onClick={onBackToHome} className="btn btn-primary">
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header da Lição */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">{currentLesson.title}</h1>
              <p className="text-gray-400">{currentLesson.description}</p>
            </div>
          </div>
          
          {lessonCompleted && (
            <CheckCircle className="w-8 h-8 text-green-400" />
          )}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getDifficultyColor(currentLesson.difficulty)}`}>
            {getTypeIcon(currentLesson.type)}
            <span className="text-sm font-medium">
              {currentLesson.type === 'theory' ? 'Teoria' : 
               currentLesson.type === 'command' ? 'Comando' : 'Prático'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{currentLesson.duration}</span>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentLesson.difficulty)}`}>
            {currentLesson.difficulty}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>Progresso do Módulo</span>
          <span>{currentLessonIndex + 1}/{lessons.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentLessonIndex + 1) / lessons.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Conteúdo da Lição */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
        {/* Teoria */}
        {currentLesson.content.theory && (
          <div className="mb-8">
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: formatTheoryContent(currentLesson.content.theory)
                }}
              />
            </div>
          </div>
        )}

        {/* Questão Interativa */}
        {currentLesson.content.interactive && (
          <div className="bg-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Teste seu Conhecimento</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{currentLesson.content.interactive.question}</p>
            
            <div className="space-y-3">
              {currentLesson.content.interactive.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showAnswer
                      ? index === currentLesson.content.interactive?.correct
                        ? 'border-green-500 bg-green-500/20 text-green-300'
                        : selectedAnswer === index
                        ? 'border-red-500 bg-red-500/20 text-red-300'
                        : 'border-gray-600 bg-gray-700/50 text-gray-400'
                      : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10'
                  }`}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            {showAnswer && currentLesson.content.interactive && (
              <div className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === currentLesson.content.interactive.correct
                  ? 'bg-green-500/20 border border-green-500/50'
                  : 'bg-red-500/20 border border-red-500/50'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {selectedAnswer === currentLesson.content.interactive.correct ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                  )}
                  <span className="font-semibold text-white">
                    {selectedAnswer === currentLesson.content.interactive.correct ? 'Correto!' : 'Não foi dessa vez...'}
                  </span>
                </div>
                <p className="text-gray-300">
                  {currentLesson.content.interactive.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Terminal Interativo */}
        {currentLesson.content.exercise && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TerminalIcon className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Exercício Prático</h3>
            </div>
            <Terminal 
              lesson={currentLesson}
              onCommandSuccess={handleCommandSuccess}
              isCompleted={lessonCompleted}
            />
          </div>
        )}

        {/* Comandos Práticos */}
        {currentLesson.content.commands && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Comandos para Praticar</h3>
            </div>
            <div className="space-y-4">
              {currentLesson.content.commands.map((cmd, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-green-400 font-mono bg-gray-800 px-3 py-1 rounded">
                      {cmd.command}
                    </code>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{cmd.description}</p>
                  <p className="text-gray-500 text-xs">Resultado esperado: {cmd.expected}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navegação */}
      <div className="flex justify-between items-center">
        <button
          onClick={previousLesson}
          disabled={currentLessonIndex === 0}
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="flex items-center gap-2">
          {lessons.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentLessonIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentLessonIndex
                  ? 'bg-blue-500'
                  : userProgress.completedLessons.includes(lessons[index].id)
                  ? 'bg-green-500'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextLesson}
          disabled={currentLessonIndex === lessons.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Próxima
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default LessonViewer;
