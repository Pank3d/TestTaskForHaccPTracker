import type { ColumnDef, SortingState, PaginationState, OnChangeFn } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  isLoading?: boolean;
  onRowClick?: (row: TData) => void;
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  manualPagination?: boolean;
  manualSorting?: boolean;
  pageCount?: number;
  tableActions?: ReactNode;
}
