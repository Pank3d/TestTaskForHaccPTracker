import { MenuItem, Select, type SelectChangeEvent, FormControl, InputLabel } from '@mui/material';
import type { DropdownProps } from './Dropdown.types';

export function Dropdown<T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
  fullWidth = true,
  label,
  ...restProps
}: DropdownProps<T>) {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T);
  };

  const labelId = label ? `dropdown-label-${String(label).replace(/\s+/g, '-')}` : undefined;

  return (
    <FormControl fullWidth={fullWidth} error={restProps.error}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <Select<T>
        value={value}
        onChange={handleChange}
        fullWidth={fullWidth}
        displayEmpty={!!placeholder}
        labelId={labelId}
        label={label}
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
    </FormControl>
  );
}
