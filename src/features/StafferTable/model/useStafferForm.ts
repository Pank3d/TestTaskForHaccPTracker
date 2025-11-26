import { useMemo } from 'react';
import { usePositions, useCreateStafferMutation, useUpdateStafferMutation } from '@entities/index';
import { useModalStore } from '@features/ModalOverlay';
import type { Staffer } from '@shared/api';
import { STATUSES, type StafferFormValues } from '../config/formConfig';

interface UseStafferFormProps {
  staffer?: Staffer;
}

export const useStafferForm = ({ staffer }: UseStafferFormProps = {}) => {
  const { data: positions = [], isLoading: positionsLoading } = usePositions();
  const createMutation = useCreateStafferMutation();
  const updateMutation = useUpdateStafferMutation();
  const { closeModal } = useModalStore();

  const initialValues: StafferFormValues = useMemo(
    () => ({
      first_name: staffer?.first_name || '',
      last_name: staffer?.last_name || '',
      middle_name: staffer?.middle_name || '',
      position: staffer?.position?.id?.toString() || '',
      status: staffer?.status || 'Работает',
      tg_url: staffer?.tg_url || '',
    }),
    [staffer]
  );

  const positionOptions = useMemo(
    () =>
      positions.map((pos) => ({
        value: pos.id.toString(),
        label: pos.name,
      })),
    [positions]
  );

  const statusOptions = STATUSES;

  const handleCreate = async (values: StafferFormValues) => {
    await createMutation.mutateAsync(values);
    closeModal();
  };

  const handleEdit = async (values: StafferFormValues) => {
    if (!staffer) return;
    await updateMutation.mutateAsync({
      id: staffer.id,
      staffer: values,
    });
    closeModal();
  };

  return {
    initialValues,
    positionOptions,
    statusOptions,
    positionsLoading,
    handleCreate,
    handleEdit,
    isSubmitting: createMutation.isPending || updateMutation.isPending,
  };
};
