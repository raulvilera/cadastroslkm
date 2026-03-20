import React, { useState, useMemo } from 'react';
import type { Incident, Student } from '../types';

interface SearchModalProps {
  incidents: Incident[];
  students: Student[];
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ incidents, students, onClose }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { incidents: [], students: [] };

    const matchedIncidents = incidents.filter(inc =>
      inc.studentName?.toLowerCase().includes(q) ||
      inc.ra?.toLowerCase().includes(q) ||
      inc.classRoom?.toLowerCase().includes(q) ||
      inc.description?.toLowerCase().includes(q) ||
      inc.irregularities?.toLowerCase().includes(q) ||
      inc.professorName?.toLowerCase().includes(q) ||
      inc.authorEmail?.toLowerCase().includes(q) ||
      inc.date?.includes(q)
    );

    const matchedStudents = students.filter(s =>
      s.nome?.toLowerCase().includes(q) ||
      s.ra?.toLowerCase().includes(q) ||
      s.turma?.toLowerCase().includes(q)
    );

    return { incidents: matchedIncidents, students: matchedStudents };
  }, [query, incidents, students]);

  const total = results.incidents.length + results.students.length;

  const statusColor: Record<string, string> = {
    'Pendente': 'bg-yellow-100 text-yellow-800',
    'Em Análise': 'bg-blue-100 text-blue-800',
    'Em Andamento': 'bg-blue-100 text-blue-800',
    'Resolvido': 'bg-green-100 text-green-800',
    'Resolvida': 'bg-green-100 text-green-800',
    'Visualizada': 'bg-gray-100 text-gray-600',
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-t-2xl px-6 py-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="flex-1">
            <h2 className="text-white font-black text-sm uppercase tracking-widest">Busca Permanente</h2>
            <p className="text-teal-100/70 text-[9px] font-bold uppercase">Pesquise alunos, ocorrências, turmas ou professores</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Input */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Nome do aluno, RA, turma, professor..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-[11px] font-bold outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
            />
          </div>
          {query.trim() && (
            <p className="text-[9px] font-black text-gray-400 uppercase mt-2 tracking-widest">
              {total} resultado{total !== 1 ? 's' : ''} encontrado{total !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 p-4 space-y-4">
          {!query.trim() && (
            <div className="text-center py-12 text-gray-400">
              <svg className="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-[10px] font-black uppercase tracking-widest">Digite para buscar</p>
            </div>
          )}

          {query.trim() && total === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-[10px] font-black uppercase tracking-widest">Nenhum resultado encontrado</p>
            </div>
          )}

          {/* Ocorrências */}
          {results.incidents.length > 0 && (
            <div>
              <h3 className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Ocorrências ({results.incidents.length})
              </h3>
              <div className="space-y-2">
                {results.incidents.map(inc => (
                  <div key={inc.id} className="border border-gray-100 rounded-xl p-3 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <p className="font-black text-[11px] text-gray-900">{inc.studentName}</p>
                        <p className="text-[9px] text-gray-500 font-bold">
                          {inc.classRoom} · {inc.date} {inc.time ? `· ${inc.time}` : ''}
                        </p>
                        {inc.professorName && (
                          <p className="text-[9px] text-gray-400 font-bold">Prof: {inc.professorName}</p>
                        )}
                      </div>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${statusColor[inc.status] || 'bg-gray-100 text-gray-600'}`}>
                        {inc.status}
                      </span>
                    </div>
                    {inc.description && (
                      <p className="text-[10px] text-gray-600 mt-1 line-clamp-2">{inc.description}</p>
                    )}
                    {inc.irregularities && (
                      <p className="text-[9px] text-orange-600 font-bold mt-1">{inc.irregularities}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alunos */}
          {results.students.length > 0 && (
            <div>
              <h3 className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Alunos ({results.students.length})
              </h3>
              <div className="space-y-2">
                {results.students.map((s, i) => (
                  <div key={s.ra || i} className="border border-gray-100 rounded-xl p-3 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-center justify-between">
                    <div>
                      <p className="font-black text-[11px] text-gray-900">{s.nome}</p>
                      <p className="text-[9px] text-gray-500 font-bold">RA: {s.ra} · Turma: {s.turma}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">
                      {s.turma}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
