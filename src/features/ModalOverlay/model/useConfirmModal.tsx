import { Button, Typography, Stack } from '@mui/material';
import { useModalStore } from './modalStore';

interface ConfirmModalOptions {
  title: string;
  hint?: string;
  onSubmit: () => void | Promise<void>;
  onCancel?: () => void;
  submitText?: string;
  cancelText?: string;
}

export const useConfirmModal = () => {
  const { openModal, closeModal } = useModalStore();

  const confirm = ({
    title,
    hint,
    onSubmit,
    onCancel,
    submitText = 'Подтвердить',
    cancelText = 'Отмена',
  }: ConfirmModalOptions) => {
    const handleSubmit = async () => {
      await onSubmit();
      closeModal();
    };

    const handleCancel = () => {
      onCancel?.();
      closeModal();
    };

    openModal({
      title,
      content: hint ? (
        <Stack spacing={2}>
          <Typography>{hint}</Typography>
        </Stack>
      ) : null,
      actions: (
        <>
          <Button onClick={handleCancel} color="inherit">
            {cancelText}
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {submitText}
          </Button>
        </>
      ),
      maxWidth: 'xs',
    });
  };

  return { confirm };
};
