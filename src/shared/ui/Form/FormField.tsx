import { Field } from 'formik';
import type { FieldProps } from 'formik';
import { FormHelperText } from '@mui/material';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';
import type { FormFieldConfig } from './Form.types';

interface FormFieldComponentProps {
  fieldConfig: FormFieldConfig;
}

export const FormField = ({ fieldConfig }: FormFieldComponentProps) => {
  const { name, label, type = 'text', placeholder, disabled, fullWidth = true, autoComplete, inputProps, options } = fieldConfig;

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const hasError = (meta.touched || form.submitCount > 0) && Boolean(meta.error);
        const errorMessage = (meta.touched || form.submitCount > 0) && meta.error ? String(meta.error) : '';

        if (type === 'select' && options) {
          return (
            <div>
              <Dropdown
                label={label}
                value={field.value || ''}
                onChange={(value) => {
                  form.setFieldValue(name, value);
                }}
                options={options}
                error={hasError}
                disabled={disabled || form.isSubmitting}
                fullWidth={fullWidth}
              />
              {hasError && <FormHelperText error>{errorMessage}</FormHelperText>}
            </div>
          );
        }

        return (
          <Input
            {...field}
            label={label}
            type={type}
            placeholder={placeholder}
            error={hasError}
            helperText={errorMessage}
            disabled={disabled || form.isSubmitting}
            fullWidth={fullWidth}
            autoComplete={autoComplete}
            {...inputProps}
          />
        );
      }}
    </Field>
  );
};
