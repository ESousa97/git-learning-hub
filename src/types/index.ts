export interface UserProgress {
  completedLessons: string[];
  totalScore: number;
  currentStreak: number;
  badges: string[];
}

export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Module {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  lessons: number;
  difficulty: Difficulty;
}
