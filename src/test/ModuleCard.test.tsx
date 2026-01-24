import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModuleCard from '../components/ModuleCard';
import { Book } from 'lucide-react';
import type { Module, UserProgress } from '../types';

const mockModule: Module = {
  id: 'basics',
  title: 'Git Básico',
  icon: <Book className="w-6 h-6" />,
  description: 'Aprenda os conceitos fundamentais do Git',
  color: 'from-blue-500 to-blue-600',
  lessons: 8,
  difficulty: 'Iniciante',
};

const mockProgress: UserProgress = {
  completedLessons: [],
  totalScore: 0,
  currentStreak: 0,
  badges: ['git-starter'],
};

describe('ModuleCard', () => {
  it('renders module title and description', () => {
    render(
      <ModuleCard
        module={mockModule}
        onSelect={vi.fn()}
        userProgress={mockProgress}
      />
    );

    expect(screen.getByText('Git Básico')).toBeInTheDocument();
    expect(screen.getByText('Aprenda os conceitos fundamentais do Git')).toBeInTheDocument();
  });

  it('shows difficulty badge', () => {
    render(
      <ModuleCard
        module={mockModule}
        onSelect={vi.fn()}
        userProgress={mockProgress}
      />
    );

    expect(screen.getByText('Iniciante')).toBeInTheDocument();
  });

  it('shows progress as 0% when no lessons completed', () => {
    render(
      <ModuleCard
        module={mockModule}
        onSelect={vi.fn()}
        userProgress={mockProgress}
      />
    );

    expect(screen.getByText('0/8 lições')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();

    render(
      <ModuleCard
        module={mockModule}
        onSelect={handleSelect}
        userProgress={mockProgress}
      />
    );

    await user.click(screen.getByText('Git Básico'));
    expect(handleSelect).toHaveBeenCalledWith('basics');
  });
});
