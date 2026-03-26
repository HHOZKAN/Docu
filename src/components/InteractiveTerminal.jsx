import { useState, useRef, useEffect } from 'react';

export default function InteractiveTerminal({ instruction, expectedCommand, successOutput }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  // Focus automatique quand on clique sur la fenêtre
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return; // Ne rien faire si l'input est vide

      const newHistory = [...history, `user@linux:~$ ${input}`];

      if (input.trim() === expectedCommand) {
        if (successOutput) newHistory.push(successOutput);
        newHistory.push('✅ Bravo ! Commande validée.');
      } else {
        newHistory.push(`bash: commande incorrecte.`);
        newHistory.push(`💡 Indice : as-tu essayé "${expectedCommand}" ?`);
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-gray-700 shadow-2xl font-mono text-sm">
      {/* Fausse barre de titre macOS / Linux */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-900">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs tracking-wider">Terminal d'entraînement</span>
      </div>

      {/* Corps du terminal */}
      <div
        className="bg-[#0D1117] p-5 min-h-[250px] cursor-text flex flex-col"
        onClick={focusInput}
      >
        <div className="text-blue-400 mb-4 pb-2 border-b border-gray-800">
          # Exercice : {instruction}
        </div>

        <div className="flex-1 space-y-1">
          {history.map((line, i) => (
            <div
              key={i}
              className={`
                ${line.startsWith('✅') ? 'text-green-400 font-bold mt-2' : ''}
                ${line.startsWith('💡') ? 'text-yellow-400' : ''}
                ${line.startsWith('user@') ? 'text-white mt-3' : ''}
                ${!line.match(/^[✅💡user@]/) ? 'text-gray-400 whitespace-pre-wrap' : ''}
              `}
            >
              {line}
            </div>
          ))}

          <div className="flex items-center mt-3">
            <span className="text-green-400 mr-2 font-semibold">user@linux:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-gray-100 flex-1 w-full"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}