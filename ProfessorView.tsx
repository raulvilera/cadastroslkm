import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { Incident, User, Student, ProfessorReferral } from '../types';
import StatusBadge from './StatusBadge';
import { getProfessorNameFromEmail } from '../professorsData';

interface ProfessorViewProps {
  user: User;
  incidents: Incident[];
  students: Student[];
  classes: string[];
  onSave: (incident: Incident | Incident[]) => void;
  onDelete: (id: string) => void;
  onUpdateIncident: (updated: Incident) => void;
  onLogout: () => void;
  onOpenSearch?: () => void;
  onSyncStudents?: () => void;
  onToggleView?: () => void;
  viewMode?: 'gestor' | 'professor';
}

const LISTA_IRREGULARIDADES = [
  'ATRASO', 'SEM MATERIAL', 'USO DE CELULAR', 'CONVERSA', 'DESRESPEITO',
  'INDISCIPLINA', 'DESACATO', 'SEM TAREFA', 'SAIU SEM PERMISSÃO'
];

const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconDownload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

const ProfessorView: React.FC<ProfessorViewProps> = ({
  user, incidents, students, classes, onSave, onDelete, onUpdateIncident, onLogout, onToggleView, viewMode
}) => {
  // ── Header fixo — altura dinâmica ─────────────────────────────────────────
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(52);
  useEffect(() => {
    const update = () => { if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight); };
    update();
    const ro = new ResizeObserver(update);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Toast e Confirm internos ──────────────────────────────────────────────
  const [pvToast, setPvToast] = useState<{ msg: string; type: 'success'|'error'|'info'|'warning'; id: number }|null>(null);
  const pvShowToast = (msg: string, type: 'success'|'error'|'info'|'warning' = 'info', dur = 4000) => {
    const id = Date.now(); setPvToast({ msg, type, id });
    setTimeout(() => setPvToast(t => t?.id === id ? null : t), dur);
  };
  const [pvConfirm, setPvConfirm] = useState<{ msg: string; onOk: () => void }|null>(null);
  const pvAskConfirm = (msg: string, onOk: () => void) => setPvConfirm({ msg, onOk });

  const [professorName, setProfessorName] = useState('');
  // Nome automático pelo email
  useEffect(() => {
    if (user?.email) setProfessorName(getProfessorNameFromEmail(user.email));
  }, [user?.email]);

  const [classRoom, setClassRoom] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [discipline, setDiscipline] = useState('');
  const [selectedIrregularities, setSelectedIrregularities] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [registerDate, setRegisterDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingIncident, setViewingIncident] = useState<Incident | null>(null);
  const [editingIncident, setEditingIncident] = useState<Incident | null>(null);
  const [editDescription, setEditDescription] = useState('');
  const [viewingFeedback, setViewingFeedback] = useState<Incident | null>(null);

  // ── Encaminhamentos do Professor (múltiplos) ─────────────────────────────
  const [profReferrals, setProfReferrals] = useState<ProfessorReferral[]>([]);
  // Pop-up para digitar descrição da orientação individual
  const [showOrientacaoModal, setShowOrientacaoModal] = useState(false);
  const [orientacaoText, setOrientacaoText] = useState('');
  // Pop-up calendário de Busca Ativa
  const [showBuscaAtivaModal, setShowBuscaAtivaModal] = useState(false);
  const [buscaAtivaDates, setBuscaAtivaDates] = useState<string[]>([]);
  const [buscaAtivaCalMonth, setBuscaAtivaCalMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const dateInputRef = useRef<HTMLInputElement>(null);
  const studentsInClass = useMemo(() => students.filter(a => a.turma === classRoom), [classRoom, students]);

  const canActOnIncident = (inc: Incident) => {
    if (user.role === 'gestor') return true;
    return !inc.authorEmail || inc.authorEmail === user.email;
  };

  const toggleStudent = (nome: string) => {
    setSelectedStudents(prev => prev.includes(nome) ? prev.filter(s => s !== nome) : [...prev, nome]);
  };

  const toggleIrregularity = (item: string) => {
    setSelectedIrregularities(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const triggerCalendar = () => {
    if (dateInputRef.current) {
      try {
        if ((dateInputRef.current as any).showPicker) {
          (dateInputRef.current as any).showPicker();
        } else {
          dateInputRef.current.focus();
        }
      } catch (_err) {
        dateInputRef.current.focus();
      }
    }
  };

  // ── Helpers de encaminhamento múltiplo ──────────────────────────────────
  const hasReferral = (type: ProfessorReferral['type']) =>
    profReferrals.some(r => r.type === type);

  const toggleEncGestao = () => {
    if (hasReferral('encaminhamento_gestao')) {
      setProfReferrals(prev => prev.filter(r => r.type !== 'encaminhamento_gestao'));
    } else {
      setProfReferrals(prev => [...prev, { type: 'encaminhamento_gestao' }]);
    }
  };

  const handleSelectBuscaAtiva = () => {
    const existing = profReferrals.find(r => r.type === 'busca_ativa');
    if (existing?.description) {
      const now = new Date();
      const parsed = existing.description.split(', ').map((d: string) => {
        const [day, month] = d.split('/');
        if (!day || !month) return '';
        return `${now.getFullYear()}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`;
      }).filter(Boolean);
      setBuscaAtivaDates(parsed);
    } else {
      setBuscaAtivaDates([]);
    }
    setShowBuscaAtivaModal(true);
  };

  const handleConfirmBuscaAtiva = () => {
    if (buscaAtivaDates.length === 0) {
      setProfReferrals(prev => prev.filter(r => r.type !== 'busca_ativa'));
      setShowBuscaAtivaModal(false);
      return;
    }
    const sorted = [...buscaAtivaDates].sort();
    const formatted = sorted.map((d: string) => {
      const [, month, day] = d.split('-');
      return `${day}/${month}`;
    }).join(', ');
    setProfReferrals(prev => {
      const sem = prev.filter(r => r.type !== 'busca_ativa');
      return [...sem, { type: 'busca_ativa', description: formatted }];
    });
    setShowBuscaAtivaModal(false);
  };

  const toggleBuscaAtivaDate = (dateStr: string) => {
    setBuscaAtivaDates(prev =>
      prev.includes(dateStr) ? prev.filter((d: string) => d !== dateStr) : [...prev, dateStr]
    );
  };

  const handleSelectOrientacao = () => {
    if (hasReferral('orientacao_individual')) {
      setProfReferrals(prev => prev.filter(r => r.type !== 'orientacao_individual'));
      return;
    }
    const existing = profReferrals.find(r => r.type === 'orientacao_individual');
    setOrientacaoText(existing?.description || '');
    setShowOrientacaoModal(true);
  };

  const handleConfirmOrientacao = () => {
    if (!orientacaoText.trim()) {
      pvShowToast('Por favor, descreva a orientação realizada.', 'warning'); return;
    }
    const desc = orientacaoText.trim().toUpperCase();
    setProfReferrals(prev => {
      const sem = prev.filter(r => r.type !== 'orientacao_individual');
      return [...sem, { type: 'orientacao_individual', description: desc }];
    });
    setShowOrientacaoModal(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!professorName || !classRoom || selectedStudents.length === 0 || !description) {
      pvShowToast('Preencha seu Nome, Turma, selecione ao menos um Aluno e relate o fato.', 'warning'); return;
      return;
    }
    setIsSaving(true);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const [year, month, day] = registerDate.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    const newIncidents: Incident[] = selectedStudents.map((nome, index) => {
      const studentData = students.find(s => s.nome === nome && s.turma === classRoom);
      return {
        id: crypto.randomUUID(),
        date: formattedDate,
        professorName: professorName.toUpperCase(),
        classRoom,
        studentName: nome.toUpperCase(),
        ra: studentData ? studentData.ra : '---',
        discipline: (discipline || 'N/A').toUpperCase(),
        irregularities: selectedIrregularities.length > 0 ? selectedIrregularities.join(', ') : 'NENHUMA',
        description: description.toUpperCase(),
        time: timeStr,
        category: 'OCORRÊNCIA',
        severity: 'Média',
        status: 'Pendente',
        source: 'professor',
        authorEmail: user.email,
        escola: 'fioravante',
        professorReferrals: profReferrals.length > 0 ? profReferrals : undefined,
        // Legado: manter campo antigo para compatibilidade
        referralType: profReferrals.length > 0 ? profReferrals[0].type : undefined,
        referralDescription: profReferrals.find(r => r.type === 'orientacao_individual')?.description,
      } as Incident;
    });

    try {
      onSave(newIncidents);
      pvShowToast(`${newIncidents.length} registro(s) gravado(s) com sucesso!`, 'success');
      setSelectedStudents([]);
      setDescription('');
      setSelectedIrregularities([]);
      setDiscipline('');
      setProfReferrals([]);
    } catch (err) {
      pvShowToast('Erro ao gravar os registros.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownloadPDF = async (inc: Incident) => {
    try {
      const { generateIncidentPDF } = await import('../services/pdfService');
      await generateIncidentPDF(inc, 'download');
    } catch (err) {
      pvShowToast('Erro ao gerar PDF.', 'error');
    }
  };

  const handleViewPDF = async (inc: Incident) => {
    try {
      const { generateIncidentPDF } = await import('../services/pdfService');
      await generateIncidentPDF(inc, 'view');
    } catch (_err) {
      setViewingIncident(inc);
    }
  };

  // ── Helpers devolutiva da gestão ─────────────────────────────────────
  const hasFeedback = (inc: Incident): boolean =>
    !!(inc.managementFeedback || (inc.managementReferrals && inc.managementReferrals.length > 0));

  const isUnreadFeedback = (inc: Incident): boolean =>
    hasFeedback(inc) && !inc.managementFeedbackReadAt;

  const handleMarkRead = (inc: Incident) => {
    if (!isUnreadFeedback(inc)) return;
    onUpdateIncident({ ...inc, managementFeedbackReadAt: new Date().toISOString() });
  };

  const handleViewFeedback = (inc: Incident) => {
    setViewingFeedback(inc);
    handleMarkRead(inc);
  };

  const handleDownloadPDFWithFeedback = async (inc: Incident) => {
    handleMarkRead(inc);
    try {
      const { generateIncidentPDF } = await import('../services/pdfService');
      await generateIncidentPDF(inc, 'download');
    } catch (err) { pvShowToast('Erro ao gerar PDF.', 'error'); }
  };

  const handleSaveEdit = () => {
    if (!editingIncident) return;
    onUpdateIncident({ ...editingIncident, description: editDescription.toUpperCase() });
    setEditingIncident(null);
    setEditDescription('');
    pvShowToast('Registro atualizado com sucesso!', 'success');
  };

  const handleDelete = (inc: Incident) => {
    if (!canActOnIncident(inc)) {
      pvShowToast('Você só pode excluir seus próprios registros.', 'error'); return;
      return;
    }
    pvAskConfirm('Deseja excluir permanentemente este registro?', () => onDelete(inc.id));
  };

  const filteredHistory = useMemo(() => {
    if (!incidents) return [];
    const term = searchTerm.toLowerCase();
    return incidents.filter(i =>
      (i.studentName || '').toLowerCase().includes(term) ||
      (i.classRoom || '').toLowerCase().includes(term) ||
      (i.professorName || '').toLowerCase().includes(term)
    );
  }, [incidents, searchTerm]);

  const unreadCount = filteredHistory.filter(isUnreadFeedback).length;

  // Labels dos encaminhamentos para tabela (múltiplos)
  const referralLabels = (inc: Incident): string[] => {
    const refs = inc.professorReferrals || [];
    if (refs.length > 0) {
      return refs.map(r =>
        r.type === 'orientacao_individual' ? '🗣 Orientação Individual' :
        r.type === 'encaminhamento_gestao' ? '📋 Enc. Gestora' :
        r.type === 'busca_ativa'           ? '🔍 Busca Ativa' : r.type
      );
    }
    // Legado
    if (inc.referralType === 'orientacao_individual') return ['🗣 Orientação Individual'];
    if (inc.referralType === 'encaminhamento_gestao') return ['📋 Enc. Gestora'];
    if (inc.referralType === 'busca_ativa')           return ['🔍 Busca Ativa'];
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#000d1a] to-[#001a35] font-sans pb-12" style={{ paddingTop: headerHeight }}>
      <header ref={headerRef} className="bg-gradient-to-r from-black via-[#001030] to-[#002b5c] text-white px-8 py-3 flex justify-between items-center border-b border-white/10 shadow-lg fixed top-0 left-0 right-0 z-[50]">
        <div className="flex flex-col">
          <h1 className="text-sm font-black uppercase tracking-tighter">Área do Professor 2026</h1>
          <p className="text-[9px] font-bold text-blue-200/60 uppercase tracking-widest leading-none">EE Lydia Kitz Moreira</p>
        </div>
        <div className="flex gap-6 items-center">
          {unreadCount > 0 && (
            <div className="flex items-center gap-1.5 bg-amber-400 text-black px-3 py-1 rounded-full shadow animate-pulse">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span className="text-[9px] font-black uppercase">{unreadCount} devolutiva{unreadCount > 1 ? 's' : ''}</span>
            </div>
          )}
          <span className="text-[10px] font-bold text-white/70">{user.email}</span>
          {onToggleView && (
            <button
              onClick={onToggleView}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-4 py-1.5 rounded text-[10px] font-black uppercase transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              title="Ver como Gestão"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Ver como Gestão
            </button>
          )}
          <button onClick={onLogout} className="bg-white text-[#002b5c] px-4 py-1.5 rounded text-[10px] font-black uppercase hover:bg-gray-100 transition-all shadow-md">Sair</button>
        </div>
      </header>

      {/* ── BANNER DEVOLUTIVA NÃO LIDA ─────────────────────────────── */}
      {unreadCount > 0 && (
        <div className="bg-amber-400 border-b-2 border-amber-600 px-8 py-3 flex items-center gap-3">
          <svg className="w-4 h-4 text-amber-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
          <p className="font-black text-[10px] text-amber-900 uppercase tracking-wide">
            {unreadCount} devolutiva{unreadCount > 1 ? 's' : ''} da equipe gestora aguarda{unreadCount > 1 ? 'm' : ''} sua leitura — registros destacados em amarelo no painel abaixo
          </p>
        </div>
      )}

      <main className="max-w-7xl mx-auto mt-8 px-6 space-y-8">
        {/* FORMULÁRIO */}
        <div className="bg-gradient-to-br from-black via-[#000d1a] to-[#001a35] rounded-xl shadow-2xl overflow-hidden border border-white/5">
          <div className="bg-gradient-to-r from-black to-[#002b5c] py-3 text-center border-b border-blue-900/40">
            <h2 className="text-white font-black text-xs uppercase tracking-widest">LANÇAMENTO DE REGISTROS DISCIPLINARES</h2>
          </div>
          <div className="p-8 bg-gradient-to-br from-black via-[#000d1a] to-[#001a35]">
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest">PROFESSOR RESPONSÁVEL</label>
                  <input type="text" value={professorName} onChange={e => setProfessorName(e.target.value)} placeholder="Nome do professor..." className="w-full h-11 px-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest">TURMA / SÉRIE</label>
                  <select value={classRoom} onChange={e => { setClassRoom(e.target.value); setSelectedStudents([]); }} className="w-full h-11 px-4 bg-white border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Selecione a turma...</option>
                    {classes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest">SELECIONE OS ALUNOS</label>
                  <span className="text-[9px] font-black bg-white/10 text-white px-3 py-1 rounded-full uppercase">{selectedStudents.length} Selecionado(s)</span>
                </div>
                <div className="w-full h-64 overflow-y-auto bg-white/95 border border-gray-300 rounded-2xl p-4 custom-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 shadow-inner">
                  {classRoom ? studentsInClass.map((a, idx) => (
                    <label key={a.ra || idx} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${selectedStudents.includes(a.nome) ? 'bg-blue-600 border-blue-400 text-white shadow-md' : idx % 2 === 0 ? 'bg-white border-gray-100 text-black hover:border-blue-200' : 'bg-blue-50 border-blue-100 text-black hover:border-blue-300'}`}>
                      <input type="checkbox" checked={selectedStudents.includes(a.nome)} onChange={() => toggleStudent(a.nome)} className="w-5 h-5 rounded-md text-blue-600" />
                      <span className="text-[10px] font-black uppercase truncate">{a.nome}</span>
                    </label>
                  )) : (
                    <div className="col-span-full h-full flex items-center justify-center text-gray-400 text-[10px] font-black uppercase italic">Selecione uma turma para carregar os alunos...</div>
                  )}
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl p-4 border border-white/10 shadow-inner">
                <h3 className="text-yellow-400 font-black text-[9px] uppercase tracking-widest mb-3">CONFERÊNCIA DE NOMES E RAs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {selectedStudents.length > 0 ? selectedStudents.map((name, i) => {
                    const student = students.find(s => s.nome === name && s.turma === classRoom);
                    return (
                      <div key={i} className="flex justify-between items-center bg-white/10 px-3 py-2 rounded-lg border border-white/5">
                        <span className="text-[9px] font-bold text-white uppercase truncate mr-2">{name}</span>
                        <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 rounded text-[10px] font-black shadow-sm font-mono">{student?.ra}</span>
                      </div>
                    );
                  }) : (
                    <div className="col-span-full py-2 text-center text-white/20 text-[9px] font-black uppercase italic">Nenhum aluno selecionado</div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white uppercase tracking-widest">IRREGULARIDADES</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'ATRASO',            icon: '⏰' },
                    { label: 'SEM MATERIAL',       icon: '📚' },
                    { label: 'USO DE CELULAR',     icon: '📵' },
                    { label: 'CONVERSA',           icon: '💬' },
                    { label: 'DESRESPEITO',        icon: '🚫' },
                    { label: 'INDISCIPLINA',       icon: '⚠️' },
                    { label: 'DESACATO',           icon: '😤' },
                    { label: 'SEM TAREFA',         icon: '📝' },
                    { label: 'SAIU SEM PERMISSÃO', icon: '🚪' },
                  ].map(({ label, icon }) => {
                    const selected = selectedIrregularities.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleIrregularity(label)}
                        className={`flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl border-2 transition-all text-center
                          ${selected
                            ? 'bg-[#1e3a8a] border-blue-400 text-white shadow-lg scale-[1.03]'
                            : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'}`}
                      >
                        <span className="text-base leading-none">{icon}</span>
                        <span className="text-[8px] font-black uppercase leading-tight">{label}</span>
                        {selected && <span className="text-[7px] text-blue-300 font-black">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── ENCAMINHAMENTOS (múltipla seleção) ──────────────── */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-white uppercase tracking-widest">ENCAMINHAMENTOS <span className="text-white/40 normal-case font-normal">(selecione quantos quiser)</span></label>
                <div className="flex flex-wrap gap-3">

                  {/* Orientação Individual — abre pop-up */}
                  <button type="button" onClick={handleSelectOrientacao}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 transition-all text-[10px] font-black uppercase
                      ${hasReferral('orientacao_individual') ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg' : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Orientação Individual com o Estudante
                    {hasReferral('orientacao_individual') && <span className="ml-1 text-emerald-200">✓</span>}
                  </button>

                  {/* Encaminhamento Gestora — toggle direto */}
                  <button type="button" onClick={toggleEncGestao}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 transition-all text-[10px] font-black uppercase
                      ${hasReferral('encaminhamento_gestao') ? 'bg-orange-600 border-orange-400 text-white shadow-lg' : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Encaminhamento para a Equipe Gestora
                    {hasReferral('encaminhamento_gestao') && <span className="ml-1 text-orange-200">✓</span>}
                  </button>

                  {/* Busca Ativa — abre calendário */}
                  <button type="button" onClick={handleSelectBuscaAtiva}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 transition-all text-[10px] font-black uppercase
                      ${hasReferral('busca_ativa') ? 'bg-sky-600 border-sky-400 text-white shadow-lg' : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
                    Busca Ativa
                    {hasReferral('busca_ativa') && <span className="ml-1 text-sky-200">✓</span>}
                  </button>
                </div>

                {/* Previews dos encaminhamentos marcados */}
                {profReferrals.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    {hasReferral('orientacao_individual') && (
                      <div className="bg-emerald-900/30 border border-emerald-600/40 rounded-xl p-3">
                        <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-1">✓ Orientação Individual</p>
                        {profReferrals.find(r => r.type === 'orientacao_individual')?.description && (
                          <p className="text-[10px] text-white/80 font-medium leading-relaxed">
                            {profReferrals.find(r => r.type === 'orientacao_individual')?.description}
                          </p>
                        )}
                        <button type="button" onClick={() => { setOrientacaoText(profReferrals.find(r => r.type==='orientacao_individual')?.description||''); setShowOrientacaoModal(true); }}
                          className="mt-1 text-[9px] font-black text-emerald-400 hover:text-emerald-300 underline uppercase">Editar descrição</button>
                      </div>
                    )}
                    {hasReferral('encaminhamento_gestao') && (
                      <div className="bg-orange-900/30 border border-orange-600/40 rounded-xl p-3">
                        <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest">✓ Encaminhamento para a Equipe Gestora</p>
                      </div>
                    )}
                    {hasReferral('busca_ativa') && (
                      <div className="bg-sky-900/30 border border-sky-600/40 rounded-xl p-3">
                        <p className="text-[9px] font-black text-sky-400 uppercase tracking-widest mb-1">✓ Busca Ativa — Ausências Registradas</p>
                        {profReferrals.find(r => r.type === 'busca_ativa')?.description && (
                          <p className="text-[10px] text-white/80 font-bold leading-relaxed">
                            {profReferrals.find(r => r.type === 'busca_ativa')?.description}
                          </p>
                        )}
                        <button type="button" onClick={handleSelectBuscaAtiva}
                          className="mt-1 text-[9px] font-black text-sky-400 hover:text-sky-300 underline uppercase">Editar datas</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* ── FIM ENCAMINHAMENTOS ─────────────────────────────────── */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest">DISCIPLINA</label>
                  <input type="text" value={discipline} onChange={e => setDiscipline(e.target.value)} className="w-full h-11 px-4 bg-white border border-gray-300 rounded-xl text-xs font-bold text-black outline-none" placeholder="Ex: Português" />
                </div>
                <div className="space-y-1 cursor-pointer" onClick={triggerCalendar}>
                  <label className="text-[10px] font-black text-white uppercase tracking-widest block cursor-pointer">DATA DO OCORRIDO</label>
                  <input ref={dateInputRef} type="date" value={registerDate} onChange={e => setRegisterDate(e.target.value)} className="w-full h-11 px-4 bg-white border border-gray-300 rounded-xl text-xs font-bold text-black outline-none cursor-pointer" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-white uppercase tracking-widest">RELATO DOS FATOS (DESCRIÇÃO)</label>
                <textarea rows={3} value={description} onChange={e => setDescription(e.target.value)} className="w-full p-4 bg-white border border-gray-300 rounded-2xl text-xs font-bold text-black outline-none" placeholder="Descreva o ocorrido detalhadamente..."></textarea>
              </div>

              <div className="flex justify-center pt-2">
                <button type="submit" disabled={isSaving || selectedStudents.length === 0} className="px-16 py-5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-[13px] uppercase tracking-[0.2em] rounded-2xl shadow-2xl transition-all border-b-[6px] border-blue-900 disabled:opacity-50 active:translate-y-1 active:border-b-0">
                  {isSaving ? 'GRAVANDO...' : `EFETUAR REGISTRO PARA ${selectedStudents.length} ALUNO(S)`}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* PAINEL DE REGISTROS */}
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
          <div className="px-6 sm:px-8 py-5 border-b border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-black to-[#002b5c]">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <h3 className="text-[11px] sm:text-[13px] text-white font-black uppercase tracking-widest text-center w-full md:text-left">PAINEL DE REGISTROS</h3>
              <p className="text-blue-200/60 text-[9px] font-bold uppercase mt-0.5 text-center md:text-left">Visualize, baixe o PDF ou edite seus registros</p>
            </div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Filtrar histórico..." className="bg-white/10 border border-white/20 rounded px-4 py-2 text-[10px] font-bold outline-none focus:bg-white focus:text-black w-full md:w-64 text-white placeholder:text-white/40 shadow-inner" />
          </div>

          <div className="max-h-[600px] overflow-auto custom-scrollbar bg-gray-50">

            {/* ── CARDS MOBILE (< sm) ─────────────────────────────────── */}
            <div className="sm:hidden flex flex-col gap-[12px] bg-gray-100/80 p-3">
              {filteredHistory.length > 0 ? filteredHistory.map((inc) => {
                const unread = isUnreadFeedback(inc);
                const hasFb  = hasFeedback(inc);
                return (
                  <div key={inc.id} className={`p-4 space-y-2 rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.10)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.22)] transition-shadow border ${unread ? 'border-amber-300 border-l-4 border-l-amber-400' : hasFb ? 'border-emerald-200' : 'border-blue-100'}`}
                    style={{ background: unread ? 'linear-gradient(to bottom, #fffbeb 60%, #fde68a 100%)' : hasFb ? 'linear-gradient(to bottom, #f0fdf4 60%, #bbf7d0 100%)' : 'linear-gradient(to bottom, #ffffff 60%, #dbeafe 100%)' }}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-gray-500">{inc.date}</span>
                        <span className="bg-blue-100 text-blue-800 text-[9px] font-black px-2 py-0.5 rounded-full">{inc.classRoom}</span>
                        {unread && <span className="bg-amber-500 text-white text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full">NOVA</span>}
                      </div>
                      <StatusBadge status={inc.status || 'Pendente'} size="small" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-[#002b5c] uppercase">{inc.studentName}</p>
                      <p className="text-[9px] font-bold text-gray-400">RA: {inc.ra} · {inc.discipline || '---'}</p>
                    </div>
                    {inc.irregularities && inc.irregularities !== 'NENHUMA' && (
                      <p className="text-[9px] font-bold text-red-600 uppercase">{inc.irregularities}</p>
                    )}
                    {referralLabels(inc).length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {referralLabels(inc).map((lb, i) => (
                          <span key={i} className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${lb.includes('Orientação') ? 'bg-emerald-100 text-emerald-700' : lb.includes('Gestora') ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'}`}>{lb}</span>
                        ))}
                      </div>
                    )}
                    <p className="text-[9px] text-gray-600 italic leading-snug">{inc.description}</p>
                    {hasFb && (
                      <button onClick={() => handleViewFeedback(inc)} className={`w-full text-left flex items-center gap-1 text-[8px] font-black uppercase px-2 py-1.5 rounded transition-all ${unread ? 'bg-amber-400 text-amber-900' : 'bg-emerald-100 text-emerald-700'}`}>
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                        {unread ? 'Ver devolutiva da gestão' : '✅ Devolutiva registrada'}
                      </button>
                    )}
                    <div className="flex gap-2 pt-1">
                      <button onClick={() => handleViewPDF(inc)} className="flex-1 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1"><IconEye /> Ver</button>
                      <button onClick={() => handleDownloadPDFWithFeedback(inc)} className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 ${hasFb ? 'bg-amber-100 text-amber-700' : 'bg-green-50 text-green-600'}`}><IconDownload /> PDF</button>
                      {canActOnIncident(inc) && (
                        <button onClick={() => { setEditingIncident(inc); setEditDescription(inc.description || ''); }} className="flex-1 py-1.5 bg-yellow-50 text-yellow-600 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1"><IconEdit /> Editar</button>
                      )}
                      {canActOnIncident(inc) && (
                        <button onClick={() => handleDelete(inc)} className="flex-1 py-1.5 bg-red-50 text-red-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1"><IconTrash /> Excluir</button>
                      )}
                    </div>
                  </div>
                );
              }) : (
                <div className="px-6 py-16 text-center text-gray-400 text-[10px] font-black uppercase italic tracking-[0.2em] bg-white">Os registros gravados aparecerão automaticamente nesta grade...</div>
              )}
            </div>

            {/* ── TABELA DESKTOP (≥ sm) ────────────────────────────────── */}
            <table className="hidden sm:table w-full border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-[#f8fafc] z-20">
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-center w-[100px]">DATA</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">PROFESSOR</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-center w-[90px]">TURMA</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">ALUNO</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-center w-[110px]">RA</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">DISCIPLINA</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">IRREGULARIDADES</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">ENCAMINHAMENTO</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-left">DESCRIÇÃO</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-center w-[110px]">STATUS</th>
                  <th className="border border-gray-300 px-3 py-3 text-[9px] font-black uppercase text-center w-[110px]">AÇÕES</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredHistory.length > 0 ? filteredHistory.map((inc) => {
                  const unread = isUnreadFeedback(inc);
                  const hasFb  = hasFeedback(inc);
                  return (
                  <tr key={inc.id} className={`transition-colors ${unread ? 'bg-amber-50 border-l-4 border-l-amber-400 hover:bg-amber-100' : hasFb ? 'bg-emerald-50/30 hover:bg-emerald-50/60' : 'hover:bg-blue-50/50'}`}>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-bold text-gray-500 text-center whitespace-nowrap bg-gray-50/50">
                      {inc.date}
                      {unread && <span className="block mt-0.5 bg-amber-500 text-white text-[7px] font-black uppercase px-1 py-0.5 rounded-full">NOVA</span>}
                      {hasFb && !unread && <span className="block mt-0.5 bg-emerald-500 text-white text-[7px] font-black uppercase px-1 py-0.5 rounded-full">LIDA</span>}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-black text-gray-800 uppercase truncate max-w-[150px]">{inc.professorName}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-black text-center text-blue-900 uppercase bg-blue-50/20">{inc.classRoom}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-black text-gray-900 uppercase">{inc.studentName}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-bold text-center text-blue-700 font-mono tracking-tighter">{inc.ra}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-bold text-gray-600 uppercase italic truncate max-w-[120px]">{inc.discipline || '---'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-bold text-red-600 uppercase max-w-[180px] truncate">{inc.irregularities || '---'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] font-bold max-w-[160px]">
                      {referralLabels(inc).length > 0 ? referralLabels(inc).map((lb, i) => (
                        <span key={i} className={`block text-[9px] font-bold ${lb.includes('Orientação') ? 'text-emerald-600' : lb.includes('Gestora') ? 'text-orange-600' : lb.includes('Busca') ? 'text-sky-600' : 'text-gray-400'}`}>{lb}</span>
                      )) : <span className="text-gray-300">—</span>}
                      {inc.managementReferrals && inc.managementReferrals.length > 0 && (
                        <div className="mt-1">
                          {inc.managementReferrals.map((mr, i) => (
                            <span key={i} className="block text-[8px] font-bold text-purple-600 truncate">🏫 {mr.type}</span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 text-[9px] max-w-[250px]">
                      <p className="font-medium text-gray-400 truncate">{inc.description}</p>
                      {hasFb && (
                        <button onClick={() => handleViewFeedback(inc)} className={`mt-1 w-full text-left flex items-center gap-1 text-[8px] font-black uppercase px-2 py-1 rounded transition-all ${unread ? 'bg-amber-400 text-amber-900 hover:bg-amber-500' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'}`}>
                          <svg className="w-2.5 h-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                          {unread ? 'Ver devolutiva da gestão' : '✅ Devolutiva registrada'}
                        </button>
                      )}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-center">
                      <StatusBadge status={inc.status || 'Pendente'} size="small" />
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex items-center justify-center gap-1">
                        <button title="Visualizar ocorrência" onClick={() => handleViewPDF(inc)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all shadow-sm"><IconEye /></button>
                        <button title={hasFb ? "Baixar PDF completo (com devolutiva)" : "Baixar PDF"} onClick={() => handleDownloadPDFWithFeedback(inc)} className={`p-1.5 rounded-lg transition-all shadow-sm ${hasFb ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}><IconDownload /></button>
                        {canActOnIncident(inc) && (
                          <button title="Editar descrição" onClick={() => { setEditingIncident(inc); setEditDescription(inc.description || ''); }} className="p-1.5 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-all shadow-sm"><IconEdit /></button>
                        )}
                        {canActOnIncident(inc) && (
                          <button title="Excluir registro" onClick={() => handleDelete(inc)} className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all shadow-sm"><IconTrash /></button>
                        )}
                      </div>
                    </td>
                  </tr>
                  );
                }) : (
                  <tr><td colSpan={11} className="px-6 py-16 text-center text-gray-400 text-[10px] font-black uppercase italic tracking-[0.2em] bg-white">Os registros gravados aparecerão automaticamente nesta grade...</td></tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-[#f8fafc] px-8 py-3 border-t border-gray-300 flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-black text-gray-400 uppercase">Sistema de Ocorrências EE Lydia Kitz Moreira • v2026.1</span>
              <span className="flex items-center gap-1 text-[8px] font-black text-amber-700 uppercase"><span className="w-2.5 h-2.5 bg-amber-400 rounded-sm inline-block"></span>Devolutiva nova</span>
              <span className="flex items-center gap-1 text-[8px] font-black text-emerald-700 uppercase"><span className="w-2.5 h-2.5 bg-emerald-300 rounded-sm inline-block"></span>Devolutiva lida</span>
            </div>
            <span className="text-[10px] font-black text-[#004a99] uppercase">{filteredHistory.length} registros no histórico</span>
          </div>
        </section>
      </main>

      {/* ── MODAL DEVOLUTIVA DA GESTÃO ────────────────────────────────────── */}
      {viewingFeedback && (
        <div className="fixed inset-0 bg-black/70 z-[150] flex items-center justify-center p-4" onClick={() => setViewingFeedback(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 px-6 py-4 text-white">
              <h3 className="font-black text-sm uppercase tracking-widest">Devolutiva da Equipe Gestora</h3>
              <p className="text-amber-100 text-[9px] font-bold mt-0.5 uppercase">{viewingFeedback.studentName} • {viewingFeedback.date} • {viewingFeedback.classRoom}</p>
            </div>
            <div className="p-6 space-y-4">

              {/* Dados originais */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Registro Original</p>
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-[8px] font-black text-gray-400 uppercase">Aluno</span><p className="text-[10px] font-bold text-gray-800 uppercase">{viewingFeedback.studentName}</p></div>
                  <div><span className="text-[8px] font-black text-gray-400 uppercase">Turma</span><p className="text-[10px] font-bold text-blue-800">{viewingFeedback.classRoom}</p></div>
                </div>
                <div><span className="text-[8px] font-black text-gray-400 uppercase">Descrição</span><p className="text-[10px] font-medium text-gray-700 mt-0.5">{viewingFeedback.description}</p></div>

                {/* Encaminhamentos do professor */}
                {(() => {
                  const refs = viewingFeedback.professorReferrals || [];
                  const hasLegacy = !refs.length && viewingFeedback.referralType;
                  if (!refs.length && !hasLegacy) return null;
                  const list = refs.length > 0 ? refs : [{ type: viewingFeedback.referralType!, description: viewingFeedback.referralDescription }];
                  return (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Encaminhamentos (Professor)</p>
                      {list.map((r, i) => (
                        <div key={i} className={`text-[9px] font-bold uppercase ${r.type === 'orientacao_individual' ? 'text-emerald-700' : r.type === 'busca_ativa' ? 'text-sky-700' : 'text-orange-600'}`}>
                          {r.type === 'orientacao_individual' ? '🗣 Orientação Individual' : r.type === 'busca_ativa' ? '🔍 Busca Ativa' : '📋 Enc. Equipe Gestora'}
                          {r.description && <span className="block text-[9px] font-normal text-gray-600 normal-case ml-3">{r.description}</span>}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black text-gray-400 uppercase">Status:</span>
                <StatusBadge status={viewingFeedback.status || 'Pendente'} size="small" />
              </div>

              {/* Encaminhamentos da gestão */}
              {(viewingFeedback.managementReferrals && viewingFeedback.managementReferrals.length > 0) && (
                <div className="space-y-1">
                  <p className="text-[8px] font-black text-amber-700 uppercase tracking-widest">Encaminhamentos (Gestão)</p>
                  <div className="space-y-1.5">
                    {viewingFeedback.managementReferrals.map((mr, i) => (
                      <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                        <p className="font-black text-amber-900 text-[9px] uppercase">{mr.type}</p>
                        {mr.description && <p className="text-[9px] text-gray-700 mt-0.5 font-medium">{mr.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Observações textuais */}
              {viewingFeedback.managementFeedback && (
                <div className="space-y-1">
                  <p className="text-[8px] font-black text-amber-700 uppercase tracking-widest">Observações Adicionais</p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl px-4 py-3">
                    <p className="text-[10px] font-bold text-gray-800 leading-relaxed">{viewingFeedback.managementFeedback}</p>
                  </div>
                </div>
              )}

              {viewingFeedback.managementFeedbackAt && (
                <p className="text-[8px] text-gray-400 uppercase text-right">
                  Registrado em {new Date(viewingFeedback.managementFeedbackAt).toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' })}
                </p>
              )}

              <div className="flex gap-3 pt-1">
                <button onClick={() => handleDownloadPDFWithFeedback(viewingFeedback)} className="flex-1 py-3 bg-amber-500 text-white font-black text-[10px] uppercase rounded-xl hover:bg-amber-600 transition-all flex items-center justify-center gap-2 shadow-md">
                  <IconDownload /> Baixar PDF Completo
                </button>
                <button onClick={() => setViewingFeedback(null)} className="flex-1 py-3 bg-gray-100 text-gray-600 font-black text-[10px] uppercase rounded-xl hover:bg-gray-200 transition-all">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal Calendário Busca Ativa ─────────────────────────────────── */}
      {showBuscaAtivaModal && (() => {
        const { year, month } = buscaAtivaCalMonth;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const MONTHS_PT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        const DAYS_PT = ['D','S','T','Q','Q','S','S'];
        const cells: (number|null)[] = [];
        for (let i = 0; i < firstDay; i++) cells.push(null);
        for (let d = 1; d <= daysInMonth; d++) cells.push(d);
        while (cells.length % 7 !== 0) cells.push(null);

        return (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-sky-900 to-sky-700 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
                  <h3 className="font-black text-xs uppercase tracking-widest">Busca Ativa — Registro de Ausências</h3>
                </div>
                <p className="text-sky-200 text-[9px] font-bold uppercase">Clique nas datas em que o aluno esteve ausente</p>
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => setBuscaAtivaCalMonth(prev => {
                    const d = new Date(prev.year, prev.month - 1, 1);
                    return { year: d.getFullYear(), month: d.getMonth() };
                  })} className="p-2 rounded-xl hover:bg-sky-50 text-sky-700 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <span className="font-black text-sm text-sky-900 uppercase tracking-wide">
                    {MONTHS_PT[month]} {year}
                  </span>
                  <button type="button" onClick={() => setBuscaAtivaCalMonth(prev => {
                    const d = new Date(prev.year, prev.month + 1, 1);
                    return { year: d.getFullYear(), month: d.getMonth() };
                  })} className="p-2 rounded-xl hover:bg-sky-50 text-sky-700 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {DAYS_PT.map((d, i) => (
                    <div key={i} className="text-center text-[9px] font-black text-gray-400 uppercase py-1">{d}</div>
                  ))}
                  {cells.map((day, i) => {
                    if (!day) return <div key={i} />;
                    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
                    const selected = buscaAtivaDates.includes(dateStr);
                    const today = new Date();
                    const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===day;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleBuscaAtivaDate(dateStr)}
                        className={`aspect-square rounded-xl text-[11px] font-black transition-all flex items-center justify-center
                          ${selected
                            ? 'bg-sky-600 text-white shadow-md scale-105'
                            : isToday
                              ? 'bg-sky-100 text-sky-700 ring-2 ring-sky-400'
                              : 'hover:bg-sky-50 text-gray-700'
                          }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="min-h-[52px] bg-sky-50 rounded-2xl border border-sky-200 px-4 py-3">
                  {buscaAtivaDates.length === 0 ? (
                    <p className="text-[9px] text-sky-400 font-bold uppercase text-center">Nenhuma data selecionada</p>
                  ) : (
                    <div>
                      <p className="text-[8px] font-black text-sky-500 uppercase tracking-widest mb-1">Ausências registradas:</p>
                      <p className="text-[11px] font-black text-sky-800 leading-relaxed">
                        {[...buscaAtivaDates].sort().map((d: string) => {
                          const [,m,day] = d.split('-');
                          return `${day}/${m}`;
                        }).join(' · ')}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => { setProfReferrals(prev => prev.filter(r => r.type !== 'busca_ativa')); setBuscaAtivaDates([]); setShowBuscaAtivaModal(false); }}
                    className="flex-1 py-3 bg-gray-100 text-gray-500 font-black text-[10px] uppercase rounded-2xl hover:bg-gray-200 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmBuscaAtiva}
                    disabled={buscaAtivaDates.length === 0}
                    className="flex-1 py-3 bg-sky-600 text-white font-black text-[10px] uppercase rounded-2xl hover:bg-sky-700 transition-all shadow-md disabled:opacity-40"
                  >
                    Confirmar ({buscaAtivaDates.length})
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── POP-UP: ORIENTAÇÃO INDIVIDUAL ──────────────────────────────────── */}
      {showOrientacaoModal && (
        <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4" onClick={() => setShowOrientacaoModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 space-y-5" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-xl px-6 py-4 text-white">
              <h3 className="font-black text-sm uppercase tracking-widest">Orientação Individual com o Estudante</h3>
              <p className="text-emerald-200/70 text-[9px] font-bold mt-0.5 uppercase">Descreva a orientação realizada</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Descrição da Orientação</label>
              <textarea
                rows={5}
                value={orientacaoText}
                onChange={e => setOrientacaoText(e.target.value)}
                className="w-full p-4 bg-gray-50 border-2 border-emerald-200 rounded-2xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Descreva detalhadamente a orientação realizada com o estudante..."
                autoFocus
              />
            </div>
            <div className="flex gap-3 pt-1">
              <button onClick={handleConfirmOrientacao} className="flex-1 py-3 bg-emerald-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-emerald-700 transition-all">Confirmar Encaminhamento</button>
              <button onClick={() => setShowOrientacaoModal(false)} className="flex-1 py-3 bg-gray-100 text-gray-600 font-black text-[10px] uppercase rounded-xl hover:bg-gray-200 transition-all">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL VISUALIZAR */}
      {viewingIncident && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={() => setViewingIncident(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-black to-[#002b5c] rounded-xl px-6 py-4 text-white">
              <h3 className="font-black text-sm uppercase tracking-widest">Detalhes da Ocorrência</h3>
              <p className="text-blue-200/60 text-[9px] font-bold mt-0.5 uppercase">EE Fioravante Iervolino</p>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="grid grid-cols-2 gap-2">
                <div><span className="font-black text-gray-500 uppercase text-[9px]">Data</span><p className="font-bold text-gray-900">{viewingIncident.date}</p></div>
                <div><span className="font-black text-gray-500 uppercase text-[9px]">Turma</span><p className="font-bold text-blue-800">{viewingIncident.classRoom}</p></div>
              </div>
              <div><span className="font-black text-gray-500 uppercase text-[9px]">Aluno</span><p className="font-bold text-gray-900 uppercase">{viewingIncident.studentName}</p></div>
              <div className="grid grid-cols-2 gap-2">
                <div><span className="font-black text-gray-500 uppercase text-[9px]">RA</span><p className="font-mono font-bold text-blue-700">{viewingIncident.ra}</p></div>
                <div><span className="font-black text-gray-500 uppercase text-[9px]">Disciplina</span><p className="font-bold text-gray-700">{viewingIncident.discipline || '---'}</p></div>
              </div>
              <div><span className="font-black text-gray-500 uppercase text-[9px]">Professor</span><p className="font-bold text-gray-900 uppercase">{viewingIncident.professorName}</p></div>
              <div><span className="font-black text-gray-500 uppercase text-[9px]">Irregularidades</span><p className="font-bold text-red-600 uppercase">{viewingIncident.irregularities || '---'}</p></div>
              <div><span className="font-black text-gray-500 uppercase text-[9px]">Descrição</span><p className="font-bold text-gray-800 bg-gray-50 p-3 rounded-xl border mt-1">{viewingIncident.description}</p></div>
              {/* Encaminhamentos do professor (múltiplos) */}
              {(() => {
                const refs = viewingIncident.professorReferrals || [];
                const hasLegacy = !refs.length && viewingIncident.referralType;
                if (!refs.length && !hasLegacy) return null;
                const list = refs.length > 0 ? refs : [{ type: viewingIncident.referralType!, description: viewingIncident.referralDescription }];
                return (
                  <div>
                    <span className="font-black text-gray-500 uppercase text-[9px]">Encaminhamentos (Professor)</span>
                    {list.map((r, i) => (
                      <div key={i} className="mt-1">
                        <p className={`font-bold uppercase text-[10px] ${r.type === 'orientacao_individual' ? 'text-emerald-700' : r.type === 'busca_ativa' ? 'text-sky-700' : 'text-orange-600'}`}>
                          {r.type === 'orientacao_individual' ? '🗣 Orientação Individual com o Estudante' : r.type === 'busca_ativa' ? '🔍 Busca Ativa' : '📋 Encaminhamento para a Equipe Gestora'}
                        </p>
                        {r.description && <p className="text-[10px] text-gray-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200 mt-1">{r.description}</p>}
                      </div>
                    ))}
                  </div>
                );
              })()}
              {/* Encaminhamentos da gestão */}
              {viewingIncident.managementReferrals && viewingIncident.managementReferrals.length > 0 && (
                <div>
                  <span className="font-black text-gray-500 uppercase text-[9px]">Encaminhamento Gestão</span>
                  {viewingIncident.managementReferrals.map((mr, i) => (
                    <div key={i} className="mt-1 bg-purple-50 border border-purple-200 rounded-xl p-3">
                      <p className="font-black text-purple-700 text-[9px] uppercase">{mr.type}</p>
                      {mr.description && <p className="text-[10px] text-gray-700 mt-1">{mr.description}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => handleDownloadPDF(viewingIncident)} className="flex-1 py-3 bg-blue-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"><IconDownload /> Baixar PDF</button>
              <button onClick={() => setViewingIncident(null)} className="flex-1 py-3 bg-gray-100 text-gray-600 font-black text-[10px] uppercase rounded-xl hover:bg-gray-200 transition-all">Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITAR */}
      {editingIncident && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={() => setEditingIncident(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 space-y-4" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-black to-[#002b5c] rounded-xl px-6 py-4 text-white">
              <h3 className="font-black text-sm uppercase tracking-widest">Editar Descrição</h3>
              <p className="text-blue-200/60 text-[9px] font-bold mt-0.5 uppercase">{editingIncident.studentName} • {editingIncident.date}</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Descrição da Ocorrência</label>
              <textarea rows={5} value={editDescription} onChange={e => setEditDescription(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-300 rounded-2xl text-xs font-bold text-black outline-none focus:ring-2 focus:ring-blue-400" placeholder="Edite a descrição..." />
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={handleSaveEdit} className="flex-1 py-3 bg-blue-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-blue-700 transition-all">Salvar Alteração</button>
              <button onClick={() => setEditingIncident(null)} className="flex-1 py-3 bg-gray-100 text-gray-600 font-black text-[10px] uppercase rounded-xl hover:bg-gray-200 transition-all">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast Professor ──────────────────────────────────────────────── */}
      {pvToast && (
        <div className={`fixed top-5 right-5 z-[9999] flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm transition-all
          ${pvToast.type === 'success' ? 'bg-emerald-600 text-white' :
            pvToast.type === 'error'   ? 'bg-red-600 text-white' :
            pvToast.type === 'warning' ? 'bg-orange-500 text-white' :
                                         'bg-[#1e3a8a] text-white'}`}>
          <span className="text-lg leading-none">
            {pvToast.type === 'success' ? '✅' : pvToast.type === 'error' ? '❌' : pvToast.type === 'warning' ? '⚠️' : 'ℹ️'}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide leading-snug">{pvToast.msg}</span>
          <button onClick={() => setPvToast(null)} className="ml-auto text-white/60 hover:text-white text-xs font-black">✕</button>
        </div>
      )}

      {/* ── Confirm Professor ─────────────────────────────────────────────── */}
      {pvConfirm && (
        <div className="fixed inset-0 z-[9998] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 space-y-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <p className="text-center text-sm font-bold text-gray-800 uppercase tracking-wide">{pvConfirm.msg}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { pvConfirm.onOk(); setPvConfirm(null); }} className="flex-1 py-3 bg-red-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-red-700 transition-all">Confirmar</button>
              <button onClick={() => setPvConfirm(null)} className="flex-1 py-3 bg-gray-100 text-gray-600 font-black text-[10px] uppercase rounded-xl hover:bg-gray-200 transition-all">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 7px; width: 7px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1d4ed8; border-radius: 20px; }
      `}</style>
    </div>
  );
};

export default ProfessorView;
