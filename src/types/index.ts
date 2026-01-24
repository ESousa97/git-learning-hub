import type { ReactNode } from 'react';

/**
 * User progress tracking data
 */
export interface UserProgress {
  completedLessons: string[];
  totalScore: number;
  currentStreak: number;
  badges: string[];
}

/**
 * Difficulty levels for lessons and modules
 */
export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

/**
 * Learning module definition
 */
export interface Module {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
  lessons: number;
  difficulty: Difficulty;
}

/**
 * Lesson content type
 */
export type LessonType = 'theory' | 'command' | 'practical';
