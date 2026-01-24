import type { FC } from 'react';
import { Trophy, Star, Zap, TrendingUp, Award, Target, Clock } from 'lucide-react';
import { badges, tips } from '../data/lessons';
import type { UserProgress, Module } from '../types';

interface ProgressDashboardProps {
  userProgress: UserProgress;
  modules: Module[];
}

const ProgressDashboard: FC<ProgressDashboardProps> = ({ userProgress, modules }) => {
  const totalLessons = modules.reduce((sum: number, module: Module) => sum + module.lessons, 0);
  const completedLessons = userProgress.completedLessons.length;
  const progressPercent = (completedLessons / totalLessons) * 100;

  const getModuleProgress = (moduleId: string): number => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 0;

    const moduleCompletedLessons = userProgress.completedLessons.filter(
      (lesson: string) => lesson.startsWith(moduleId)
    ).length;

    return (moduleCompletedLessons / module.lessons) * 100;
  };

  const getLevel = (score: number) => {
    if (score >= 200) return { level: 5, name: 'Git Master', color: 'text-purple-400' };
    if (score >= 150) return { level: 4, name: 'Git Expert', color: 'text-blue-400' };
    if (score >= 100) return { level: 3, name: 'Git Professional', color: 'text-green-400' };
    if (score >= 50) return { level: 2, name: 'Git Intermediate', color: 'text-yellow-400' };
    return { level: 1, name: 'Git Beginner', color: 'text-gray-400' };
  };

  const currentLevel = getLevel(userProgress.totalScore);
  const nextLevelScore = [50, 100, 150, 200, 300][currentLevel.level - 1] || 300;
  const levelProgress = ((userProgress.totalScore % nextLevelScore) / nextLevelScore) * 100;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Seu Progresso</h1>
        <p className="text-gray-400 text-lg">Acompanhe sua jornada de aprendizado Git</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{completedLessons}</div>
          <div className="text-gray-400">Lições Concluídas</div>
          <div className="text-sm text-gray-500">de {totalLessons} total</div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{userProgress.totalScore}</div>
          <div className="text-gray-400">Pontos Totais</div>
          <div className="text-sm text-gray-500">10 pontos por lição</div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-orange-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{userProgress.currentStreak}</div>
          <div className="text-gray-400">Sequência Atual</div>
          <div className="text-sm text-gray-500">lições seguidas</div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{userProgress.badges.length}</div>
          <div className="text-gray-400">Badges Conquistadas</div>
          <div className="text-sm text-gray-500">de {Object.keys(badges).length} possíveis</div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Nível Atual</h2>
            <p className="text-gray-400">Continue estudando para subir de nível!</p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${currentLevel.color}`}>
              Nível {currentLevel.level}
            </div>
            <div className={`text-sm ${currentLevel.color}`}>
              {currentLevel.name}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{userProgress.totalScore} pontos</span>
            <span>{nextLevelScore} pontos para próximo nível</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(levelProgress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Module Progress */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Progresso por Módulo</h2>
        <div className="space-y-4">
          {modules.map((module: Module) => {
            const progress = getModuleProgress(module.id);
            const isCompleted = progress === 100;

            return (
              <div key={module.id} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                  {module.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{module.title}</h3>
                    <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${module.color}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {isCompleted && (
                  <Trophy className="w-6 h-6 text-yellow-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Badges Conquistadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(badges).map(([badgeId, badge]) => {
            const isEarned = userProgress.badges.includes(badgeId);

            return (
              <div
                key={badgeId}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isEarned
                    ? 'border-yellow-500/50 bg-yellow-500/10'
                    : 'border-gray-600 bg-gray-700/30 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{badge.icon}</div>
                  <div>
                    <h3 className={`font-semibold ${isEarned ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {badge.name}
                    </h3>
                    <p className={`text-sm ${isEarned ? 'text-gray-300' : 'text-gray-500'}`}>
                      {badge.description}
                    </p>
                  </div>
                </div>
                {!isEarned && (
                  <div className="text-xs text-gray-500 mt-2">
                    🔒 Badge bloqueada
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Atividade Recente</h2>
        {userProgress.completedLessons.length > 0 ? (
          <div className="space-y-3">
            {userProgress.completedLessons.slice(-5).reverse().map((lessonId, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">
                    Lição concluída: {lessonId.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
                  </div>
                  <div className="text-sm text-gray-400">
                    +10 pontos • Há alguns minutos
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">Nenhuma atividade ainda</p>
            <p className="text-sm text-gray-500">Complete sua primeira lição para ver o histórico</p>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Dicas para Continuar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="text-xl">{tip.icon}</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-400">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Progresso Geral</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-white">{Math.round(progressPercent)}%</div>
            <div className="text-gray-400">Concluído</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-white">{completedLessons}/{totalLessons}</div>
            <div className="text-sm text-gray-400">Lições</div>
          </div>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
            style={{ width: `${Math.max(progressPercent, 8)}%` }}
          >
            {progressPercent > 10 && (
              <span className="text-xs font-bold text-white">
                {Math.round(progressPercent)}%
              </span>
            )}
          </div>
        </div>

        {progressPercent === 100 ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Parabéns!</h3>
            <p className="text-gray-300">Você completou todos os módulos do Git Learning Hub!</p>
          </div>
        ) : (
          <div className="text-center py-4">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-white mb-2">Continue Aprendendo!</h3>
            <p className="text-gray-400">
              Você está fazendo um ótimo progresso. Continue praticando para dominar o Git!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressDashboard;
