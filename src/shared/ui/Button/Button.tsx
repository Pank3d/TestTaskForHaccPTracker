import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { forwardRef } from 'react';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading = false, disabled, variant = 'contained', fullWidth = false, ...props }, ref) => {
    return (
      <MuiButton
        ref={ref}
        variant={variant}
        disabled={disabled || loading}
        fullWidth={fullWidth}
        {...props}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          children
        )}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
