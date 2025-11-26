import type { SelectProps } from '@mui/material';

export interface DropdownOption<T = string | number> {
  value: T;
  label: string;
}

export interface DropdownProps<T = string | number> extends Omit<SelectProps<T>, 'onChange'> {
  options: DropdownOption<T>[];
  onChange: (value: T) => void | Promise<void>;
  placeholder?: string;
}
