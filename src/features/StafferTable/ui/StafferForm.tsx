import { Form } from '@shared/ui';
import { Box, CircularProgress } from '@mui/material';
import { useStafferForm } from '../model/useStafferForm';
import { stafferValidationSchema, createStafferFields } from '../config/formConfig';
import type { Staffer } from '@shared/api';

interface StafferFormProps {
  staffer?: Staffer;
}

export const StafferForm = ({ staffer }: StafferFormProps) => {
  const {
    initialValues,
    positionOptions,
    statusOptions,
    positionsLoading,
    handleCreate,
    handleEdit,
  } = useStafferForm({ staffer });

  if (positionsLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  const fields = createStafferFields(positionOptions, statusOptions);

  return (
    <Form
      config={{
        fields,
        validationSchema: stafferValidationSchema,
        onSubmit: staffer ? handleEdit : handleCreate,
        submitButtonText: staffer ? 'Сохранить' : 'Создать',
        initialValues,
      }}
    />
  );
};
