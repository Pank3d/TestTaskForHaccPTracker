import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { Staffer } from '@shared/api';
import { useModalStore, useConfirmModal } from '@features/ModalOverlay';
import { useDeleteStafferMutation } from '@entities/index';
import { StafferForm } from '../ui/StafferForm';

export const useStafferTableActions = () => {
  const { openModal } = useModalStore();
  const { confirm } = useConfirmModal();
  const deleteMutation = useDeleteStafferMutation();

  const handleEdit = (staffer: Staffer) => {
    openModal({
      title: 'Редактировать сотрудника',
      content: <StafferForm staffer={staffer} />,
      maxWidth: 'sm',
    });
  };

  const handleDelete = (staffer: Staffer) => {
    confirm({
      title: 'Удалить сотрудника?',
      hint: `Вы действительно хотите удалить сотрудника ${staffer.last_name} ${staffer.first_name}?`,
      onSubmit: async () => {
        await deleteMutation.mutateAsync(staffer.id);
      },
      submitText: 'Удалить',
      cancelText: 'Отмена',
    });
  };

  const handleCreate = () => {
    openModal({
      title: 'Добавить сотрудника',
      content: <StafferForm />,
      maxWidth: 'sm',
    });
  };

  const tableActions = (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={handleCreate}
    >
      Добавить сотрудника
    </Button>
  );

  return {
    handleEdit,
    handleDelete,
    handleCreate,
    tableActions,
  };
};
