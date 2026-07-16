import React, { useEffect, useRef, useState } from 'react';

interface StripedSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  triggerClassName?: string;
}

/**
 * Dropdown com linhas em cores alternadas (branco / azul claro).
 *
 * Motivo de existir: um <select> nativo do HTML, no Android/Chrome mobile,
 * é desenhado pelo próprio sistema operacional — o CSS do app não consegue
 * colorir as opções individualmente (foi o que aconteceu na tela em que
 * "Selecione..." aparecia toda branca mesmo já havendo classes de cor nas
 * <option>). Este componente substitui o <select> por uma lista customizada,
 * então as cores alternadas funcionam em qualquer navegador/aparelho.
 */
const StripedSelect: React.FC<StripedSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Selecione...',
  triggerClassName = 'w-full h-11 px-4 bg-white border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-blue-400',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePick = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`${triggerClassName} flex items-center justify-between gap-2 text-left`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-72 overflow-y-auto rounded-xl border border-gray-200 shadow-2xl bg-white">
          <button
            type="button"
            onClick={() => handlePick('')}
            className="w-full text-left px-4 py-2.5 text-xs font-bold text-gray-500 bg-white hover:bg-blue-100 transition-colors border-b border-gray-100"
          >
            {placeholder}
          </button>
          {options.map((opt, idx) => (
            <button
              key={opt}
              type="button"
              onClick={() => handlePick(opt)}
              className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors hover:bg-blue-200
                ${opt === value ? 'ring-2 ring-inset ring-blue-500' : ''}
                ${idx % 2 === 0 ? 'bg-white text-black' : 'bg-blue-100 text-black'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StripedSelect;
