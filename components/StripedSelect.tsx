import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface StripedSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  triggerClassName?: string;
  /** Tamanho da fonte usado no botão e nas opções da lista (ex: 'text-xs', 'text-sm', 'text-base'). */
  optionTextClassName?: string;
  /** Centraliza o texto no botão fechado e nas opções da lista (em vez de alinhar à esquerda). */
  centered?: boolean;
}

/**
 * Dropdown com linhas em cores alternadas (branco / azul claro).
 *
 * Por que existe: um <select> nativo do HTML, no Android/Chrome mobile,
 * é desenhado pelo próprio sistema operacional — o CSS do app não consegue
 * colorir as opções individualmente.
 *
 * A lista de opções é renderizada em um portal (fora da árvore normal do
 * componente), com posição calculada a partir do botão. Isso evita que a
 * lista seja cortada por algum contêiner pai com "overflow: hidden" (era
 * o que acontecia dentro dos cards da Gestão, que cortavam a lista e por
 * isso as cores pareciam não aparecer).
 */
const StripedSelect: React.FC<StripedSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Selecione...',
  triggerClassName = 'w-full h-11 px-4 bg-white border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-blue-400',
  optionTextClassName = 'text-xs',
  centered = false,
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateCoords = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({ top: rect.bottom + window.scrollY + 4, left: rect.left + window.scrollX, width: rect.width });
    }
  };

  useEffect(() => {
    if (!open) return;
    updateCoords();
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleReflow = () => updateCoords();
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleReflow, true);
    window.addEventListener('resize', handleReflow);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleReflow, true);
      window.removeEventListener('resize', handleReflow);
    };
  }, [open]);

  const handlePick = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`${triggerClassName} relative flex items-center`}
      >
        <span className={`truncate w-full pr-6 ${centered ? 'text-center' : 'text-left'}`}>{value || placeholder}</span>
        <svg
          className={`w-4 h-4 shrink-0 absolute right-3 top-1/2 -translate-y-1/2 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && createPortal(
        <div
          ref={panelRef}
          style={{ position: 'absolute', top: coords.top, left: coords.left, width: coords.width }}
          className="z-[9999] max-h-72 overflow-y-auto rounded-xl border border-gray-200 shadow-2xl bg-white"
        >
          <button
            type="button"
            onClick={() => handlePick('')}
            className={`w-full ${centered ? 'text-center' : 'text-left'} px-4 py-2.5 ${optionTextClassName} font-bold text-gray-500 bg-white hover:bg-blue-100 transition-colors border-b border-gray-100`}
          >
            {placeholder}
          </button>
          {options.map((opt, idx) => (
            <button
              key={opt}
              type="button"
              onClick={() => handlePick(opt)}
              className={`w-full ${centered ? 'text-center' : 'text-left'} px-4 py-2.5 ${optionTextClassName} font-bold transition-colors hover:bg-blue-200
                ${opt === value ? 'ring-2 ring-inset ring-blue-500' : ''}
                ${idx % 2 === 0 ? 'bg-white text-black' : 'bg-blue-100 text-black'}`}
            >
              {opt}
            </button>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default StripedSelect;
