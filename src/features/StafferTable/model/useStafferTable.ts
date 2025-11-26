import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import type { Staffer } from '@shared/api';
import { createStafferColumns } from '../config/tableColumns';

const STATUS_COLORS = {
  'Работает': 'success',
  'Активен': 'success',
  'В отпуске': 'warning',
  'Уволен': 'error',
} as const;

export const getStatusColor = (status: string) => {
  return STATUS_COLORS[status as keyof typeof STATUS_COLORS] || 'default';
};

interface UseStafferTableProps {
  onEdit?: (staffer: Staffer) => void;
  onDelete?: (staffer: Staffer) => void;
}

export const useStafferTable = ({ onEdit, onDelete }: UseStafferTableProps) => {
  const columns = useMemo<ColumnDef<Staffer, any>[]>(
    () => createStafferColumns(onEdit, onDelete),
    [onEdit, onDelete]
  );

  return {
    columns,
  };
};
