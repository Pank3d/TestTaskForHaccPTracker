import { createColumnHelper } from '@tanstack/react-table';
import { IconButton, Box, Chip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import type { Staffer } from '@shared/api';
import { getStatusColor } from '../model/useStafferTable';

const columnHelper = createColumnHelper<Staffer>();

export const createStafferColumns = (
  onEdit?: (staffer: Staffer) => void,
  onDelete?: (staffer: Staffer) => void
) => [
  columnHelper.accessor(
    (row) => `${row.last_name} ${row.first_name} ${row.middle_name || ''}`,
    {
      id: 'fullName',
      header: 'ФИО',
      cell: (info) => info.getValue(),
    }
  ),
  columnHelper.accessor('position.name', {
    header: 'Должность',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: (info) => (
      <Chip
        label={info.getValue()}
        color={getStatusColor(info.getValue())}
        size="small"
      />
    ),
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Действия',
    cell: (info) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        {onEdit && (
          <IconButton
            size="small"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(info.row.original);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        )}
        {onDelete && (
          <IconButton
            size="small"
            color="error"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(info.row.original);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    ),
  }),
];
