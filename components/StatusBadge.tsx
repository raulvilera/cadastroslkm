import React from 'react';
import { Incident } from '../types';

interface StatusBadgeProps {
    status: Incident['status'] | string;
    size?: 'small' | 'medium' | 'large';
    showLabel?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'medium', showLabel = true }) => {
    const statusConfig: Record<string, { color: string; textColor: string; borderColor: string; bgLight: string; icon: string; label: string }> = {
        'Pendente': {
            color: 'bg-red-500',
            textColor: 'text-red-600',
            borderColor: 'border-red-200',
            bgLight: 'bg-red-50',
            icon: '🔴',
            label: 'PENDENTE'
        },
        'Em Análise': {
            color: 'bg-yellow-500',
            textColor: 'text-yellow-700',
            borderColor: 'border-yellow-200',
            bgLight: 'bg-yellow-50',
            icon: '🟡',
            label: 'EM ANÁLISE'
        },
        'Resolvido': {
            color: 'bg-green-500',
            textColor: 'text-green-700',
            borderColor: 'border-green-200',
            bgLight: 'bg-green-50',
            icon: '🟢',
            label: 'RESOLVIDO'
        },
        'Arquivado': {
            color: 'bg-gray-500',
            textColor: 'text-gray-600',
            borderColor: 'border-gray-200',
            bgLight: 'bg-gray-50',
            icon: '⚫',
            label: 'ARQUIVADO'
        },
        'Concluído': {
            color: 'bg-blue-500',
            textColor: 'text-blue-700',
            borderColor: 'border-blue-200',
            bgLight: 'bg-blue-50',
            icon: '🔵',
            label: 'CONCLUÍDO'
        },
    };

    const config = statusConfig[status] ?? {
        color: 'bg-gray-400',
        textColor: 'text-gray-600',
        borderColor: 'border-gray-200',
        bgLight: 'bg-gray-50',
        icon: '⚪',
        label: String(status ?? '---').toUpperCase()
    };

    const sizeClasses = {
        small: 'text-[7px] px-2 py-0.5',
        medium: 'text-[8px] px-3 py-1',
        large: 'text-[9px] px-4 py-1.5'
    };

    return (
        <span
            className={`
        inline-flex items-center gap-1
        ${sizeClasses[size]}
        ${config.bgLight}
        ${config.textColor}
        ${config.borderColor}
        border
        rounded-full
        font-black
        uppercase
        tracking-wider
        shadow-sm
        whitespace-nowrap
      `}
        >
            <span className="text-[10px]">{config.icon}</span>
            {showLabel && <span>{config.label}</span>}
        </span>
    );
};

export default StatusBadge;
