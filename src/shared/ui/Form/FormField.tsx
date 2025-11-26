import { Field } from 'formik';
import type { FieldProps } from 'formik';
import { Input } from '../Input';
import type { FormFieldConfig } from './Form.types';

interface FormFieldComponentProps {
  fieldConfig: FormFieldConfig;
}

export const FormField = ({ fieldConfig }: FormFieldComponentProps) => {
  const { name, label, type = 'text', placeholder, disabled, fullWidth = true, autoComplete, inputProps } = fieldConfig;

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => (
        <Input
          {...field}
          label={label}
          type={type}
          placeholder={placeholder}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error ? String(meta.error) : ''}
          disabled={disabled || form.isSubmitting}
          fullWidth={fullWidth}
          autoComplete={autoComplete}
          {...inputProps}
        />
      )}
    </Field>
  );
};
