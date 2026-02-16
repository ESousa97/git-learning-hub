import type { FC } from 'react';
import { Lock, CheckCircle, Clock, Star } from 'lucide-react';
import type { Module, UserProgress } from '../types';

interface ModuleCardProps {
  module: Module;
  onSelect: (moduleId: string) => void;
  userProgress: UserProgress;
}

const ModuleCard: FC<ModuleCardProps> = ({ module, onSelect, userProgress }) => {
  const completedLessons = userProgress.completedLessons.filter(
    (lesson: string) => lesson.startsWith(module.id)
  ).length;

  const progressPercent = (completedLessons / module.lessons) * 100;
  const isCompleted = completedLessons === module.lessons;
  const isUnlocked =
    module.id === 'basics' ||
    completedLessons > 0 ||
    userProgress.completedLessons.some((lesson: string) => lesson.includes('basics'));

  const getDifficultyColor = (difficulty: Module['difficulty']) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'text-green-400 bg-green-400/20';
      case 'Intermediário':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Avançado':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
        isUnlocked ? 'hover:-translate-y-1' : 'opacity-60 cursor-not-allowed'
      }`}
      onClick={() => isUnlocked && onSelect(module.id)}
    >
      <div
        className={`
          relative rounded-2xl p-5 md:p-6 min-h-[17rem] h-full
          bg-gradient-to-br ${module.color}
          shadow-lg group-hover:shadow-2xl transition-all duration-300
        `}
      >
        {/* Lock/Complete Status */}
        <div className="absolute top-4 right-4">
          {!isUnlocked ? (
            <Lock className="w-6 h-6 text-white/80" />
          ) : isCompleted ? (
            <CheckCircle className="w-6 h-6 text-white" />
          ) : (
            <Clock className="w-6 h-6 text-white/80" />
          )}
        </div>

        {/* Module Icon */}
        <div className="mb-4 text-white">{module.icon}</div>

        {/* Module Info */}
        <div className="relative z-10 flex h-full flex-col">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight pr-8">{module.title}</h3>

          <p className="text-white/90 text-sm mb-3 md:mb-4">{module.description}</p>

          {/* Difficulty Badge */}
          <div
            className={`
              inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4
              ${getDifficultyColor(module.difficulty)}
            `}
          >
            {module.difficulty}
          </div>

          {/* Progress */}
          <div className="space-y-2 mt-auto">
            <div className="flex justify-between items-center text-white/90 text-sm">
              <span>
                {completedLessons}/{module.lessons} lições
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>

            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Lessons Preview */}
          <div className="mt-4 flex items-center gap-2 text-white/80 text-xs">
            <Star className="w-3 h-3" />
            <span>
              {module.lessons} lições •{' '}
              {module.id === 'basics'
                ? ' 2h'
                : module.id === 'branching'
                ? ' 1.5h'
                : module.id === 'collaboration'
                ? ' 1h'
                : ' 2.5h'}{' '}
              de conteúdo
            </span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        {isUnlocked && (
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        )}
      </div>

    </div>
  );
};

export default ModuleCard;
