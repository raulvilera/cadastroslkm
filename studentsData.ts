import { Student } from './types';

// LGPD: dados de alunos NÃO são mais embutidos no código.
// Os alunos vêm da planilha (via /api/sheets) e do Supabase, somente após o login.
export const STUDENTS_DB: Student[] = [];
