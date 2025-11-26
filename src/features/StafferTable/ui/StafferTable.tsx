import { Table } from '@shared/ui';
import type { Staffer } from '@shared/api';
import { useStafferTable } from '../model/useStafferTable';
import { useStafferTableActions } from '../model/useStafferTableActions';

interface StafferTableProps {
  data: Staffer[];
  isLoading?: boolean;
}

export const StafferTable = ({ data, isLoading }: StafferTableProps) => {
  const { handleEdit, handleDelete, tableActions } = useStafferTableActions();
  const { columns } = useStafferTable({ onEdit: handleEdit, onDelete: handleDelete });

  return <Table data={data} columns={columns} isLoading={isLoading} tableActions={tableActions} />;
};
