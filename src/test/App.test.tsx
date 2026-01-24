import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText('Git Learning')).toBeInTheDocument();
    expect(screen.getByText('Hub')).toBeInTheDocument();
  });

  it('renders the start button', () => {
    render(<App />);
    expect(screen.getByText('Começar Agora')).toBeInTheDocument();
  });

  it('renders all module cards', () => {
    render(<App />);
    expect(screen.getByText('Git Básico')).toBeInTheDocument();
    expect(screen.getByText('Branches & Merge')).toBeInTheDocument();
    expect(screen.getByText('Colaboração')).toBeInTheDocument();
    expect(screen.getByText('Git Avançado')).toBeInTheDocument();
  });

  it('renders the progress button', () => {
    render(<App />);
    expect(screen.getByText('Meu Progresso')).toBeInTheDocument();
  });
});
