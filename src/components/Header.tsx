import type { FC } from 'react';
import { GitCommit, ArrowLeft, Trophy, Star, Zap } from 'lucide-react';
import type { UserProgress } from '../types';

interface HeaderProps {
  currentView: 'home' | 'module' | 'progress';
  onBackToHome: () => void;
  userProgress: UserProgress;
}

const Header: FC<HeaderProps> = ({ currentView, onBackToHome, userProgress }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo e navegação */}
          <div className="flex items-center gap-4">
            {currentView !== 'home' && (
              <button
                onClick={onBackToHome}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            
            <div className="flex items-center gap-3">
              <GitCommit className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Git Learning Hub</h1>
                <p className="text-sm text-gray-400">Aprenda Git de forma interativa</p>
              </div>
            </div>
          </div>

          {/* Status do usuário */}
          <div className="flex items-center gap-4 md:gap-6 ml-auto">
            {/* Score */}
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5" />
              <span className="font-semibold">{userProgress.totalScore}</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-2 text-orange-400">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">{userProgress.currentStreak}</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 text-green-400">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">{userProgress.badges.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-gray-400">Progresso:</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${Math.min((userProgress.completedLessons.length / 26) * 100, 100)}%` 
                  }}
                />
              </div>
              <span className="text-sm text-gray-400">
                {userProgress.completedLessons.length}/26
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden mt-3">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Progresso Geral</span>
            <span>{userProgress.completedLessons.length}/26 lições</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min((userProgress.completedLessons.length / 26) * 100, 100)}%` 
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
