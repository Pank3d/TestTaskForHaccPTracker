import { Table } from '@shared/ui';
import type { Staffer } from '@shared/api';
import { useStafferTable } from '../model/useStafferTable';

interface StafferTableProps {
  data: Staffer[];
  isLoading?: boolean;
  onEdit?: (staffer: Staffer) => void;
  onDelete?: (staffer: Staffer) => void;
}

export const StafferTable = ({ data, isLoading, onEdit, onDelete }: StafferTableProps) => {
  const { columns } = useStafferTable({ onEdit, onDelete });

  return <Table data={data} columns={columns} isLoading={isLoading} />;
};
