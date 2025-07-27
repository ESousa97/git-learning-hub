import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import type { Lesson } from '../data/lessons';

interface TerminalOutput {
  type: 'input' | 'success' | 'error';
  content: string;
  timestamp: number;
}

interface TerminalProps {
  lesson: Lesson;
  onCommandSuccess: () => void;
  isCompleted: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ lesson, onCommandSuccess, isCompleted }) => {
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<TerminalOutput[]>([]);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const exercise = lesson.content.exercise;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const executeCommand = () => {
    if (!command.trim() || !exercise) return;

    const newOutput: TerminalOutput[] = [...output];
    newOutput.push({
      type: 'input',
      content: `$ ${command}`,
      timestamp: Date.now()
    });

    // Simula validação do comando
    const isCorrect = validateCommand(command.trim(), exercise.command);
    
    if (isCorrect) {
      newOutput.push({
        type: 'success',
        content: exercise.expectedOutput,
        timestamp: Date.now()
      });
      
      if (!isCompleted) {
        setTimeout(() => {
          onCommandSuccess();
        }, 500);
      }
    } else {
      newOutput.push({
        type: 'error',
        content: `Comando incorreto. Tente novamente.`,
        timestamp: Date.now()
      });
      setAttempts(prev => prev + 1);
    }

    setOutput(newOutput);
    setCommand('');
    
    // Auto-scroll to bottom
    setTimeout(() => {
      const terminal = document.getElementById('terminal-output');
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }, 100);
  };

  const validateCommand = (userCommand: string, expectedCommand: string): boolean => {
    // Remove espaços extras e normaliza
    const normalizeCommand = (cmd: string): string => {
      return cmd.toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
    };

    const userNormalized = normalizeCommand(userCommand);
    const expectedNormalized = normalizeCommand(expectedCommand);
    
    // Validações específicas por tipo de comando
    if (expectedNormalized.includes('git init')) {
      return userNormalized === 'git init';
    }
    
    if (expectedNormalized.includes('git add')) {
      return userNormalized === 'git add .' || userNormalized === 'git add -a';
    }
    
    if (expectedNormalized.includes('git commit')) {
      return userNormalized.includes('git commit -m') && userNormalized.includes('"');
    }
    
    // Validação genérica
    return userNormalized === expectedNormalized;
  };

  const clearTerminal = () => {
    setOutput([]);
    setCommand('');
    setAttempts(0);
    setShowHint(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const getPrompt = (): string => {
    return 'user@git-learning:~/project';
  };

  if (!exercise) {
    return null;
  }

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TerminalIcon className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">Terminal Interativo</span>
            {isCompleted && (
              <CheckCircle className="w-5 h-5 text-green-400" />
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-yellow-400 hover:text-yellow-300 transition-colors p-1"
              title="Mostrar dica"
            >
              <Lightbulb className="w-4 h-4" />
            </button>
            <button
              onClick={clearTerminal}
              className="text-gray-400 hover:text-white transition-colors p-1"
              title="Limpar terminal"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Task Description */}
      <div className="bg-blue-900/30 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <Play className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-medium">Tarefa:</span>
        </div>
        <p className="text-gray-300">{exercise.task}</p>
      </div>

      {/* Hint */}
      {showHint && (
        <div className="bg-yellow-900/30 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Dica:</span>
          </div>
          <p className="text-gray-300">{exercise.hint}</p>
        </div>
      )}

      {/* Terminal Output */}
      <div 
        id="terminal-output"
        className="h-64 overflow-y-auto p-4 font-mono text-sm bg-gray-900"
      >
        {/* Welcome Message */}
        {output.length === 0 && (
          <div className="text-gray-500 mb-4">
            <p>Git Learning Hub Terminal v1.0</p>
            <p>Digite o comando Git solicitado para continuar...</p>
            <p></p>
          </div>
        )}

        {/* Output History */}
        {output.map((item, index) => (
          <div key={index} className="mb-2">
            {item.type === 'input' && (
              <div className="flex items-center">
                <span className="text-green-400 mr-2">{getPrompt()}$</span>
                <span className="text-white">{item.content.replace('$ ', '')}</span>
              </div>
            )}
            
            {item.type === 'success' && (
              <div className="text-green-400 ml-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {item.content}
              </div>
            )}
            
            {item.type === 'error' && (
              <div className="text-red-400 ml-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {item.content}
              </div>
            )}
          </div>
        ))}

        {/* Current Input Line */}
        {!isCompleted && (
          <div className="flex items-center">
            <span className="text-green-400 mr-2">{getPrompt()}$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent text-white outline-none flex-1 font-mono"
              placeholder="Digite o comando Git..."
              autoComplete="off"
            />
            <span className="text-green-400 animate-pulse">|</span>
          </div>
        )}

        {/* Success Message */}
        {isCompleted && (
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Exercício Concluído!</span>
            </div>
            <p className="text-gray-300">{exercise.explanation}</p>
          </div>
        )}
      </div>

      {/* Footer with attempts */}
      {attempts > 0 && !isCompleted && (
        <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">
              Tentativas: {attempts}
            </span>
            {attempts >= 2 && !showHint && (
              <button
                onClick={() => setShowHint(true)}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Precisa de uma dica?
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
