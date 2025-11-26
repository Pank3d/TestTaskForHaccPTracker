import { z } from 'zod';
import type { FormFieldConfig } from '@shared/ui';

export const loginValidationSchema = z.object({
  email: z
    .string()
    .min(1, 'Email обязателен')
    .email('Введите корректный email'),
  password: z
    .string()
    .min(1, 'Пароль обязателен')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type LoginFormValues = z.infer<typeof loginValidationSchema>;

export const loginFormFields: FormFieldConfig[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'admin@example.com',
    autoComplete: 'email',
    fullWidth: true,
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите пароль',
    autoComplete: 'current-password',
    fullWidth: true,
  },
];
