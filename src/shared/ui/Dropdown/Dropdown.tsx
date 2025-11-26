import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { DropdownProps } from './Dropdown.types';

export function Dropdown<T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
  fullWidth = true,
  ...restProps
}: DropdownProps<T>) {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T);
  };

  return (
    <Select<T>
      value={value}
      onChange={handleChange}
      fullWidth={fullWidth}
      displayEmpty={!!placeholder}
      {...restProps}
    >
      {placeholder && (
        <MenuItem value="">
          {placeholder}
        </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={String(option.value)} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
