import type { InputProps } from '../Input';
import type { DropdownOption } from '../Dropdown';
import { z } from 'zod';

export interface FormFieldConfig {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'select';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  autoComplete?: string;
  inputProps?: Partial<InputProps>;
  options?: DropdownOption[];
}

export interface ApiError {
  response?: {
    data?: {
      detail?: string;
      errors?: string;
      [key: string]: any;
    };
    status?: number;
  };
  message?: string;
}

export interface FormConfig<T extends z.ZodType> {
  fields: FormFieldConfig[];
  validationSchema: T;
  onSubmit: (values: z.infer<T>) => void | Promise<void>;
  submitButtonText?: string;
  initialValues?: Partial<z.infer<T>>;
  error?: ApiError | null;
}
