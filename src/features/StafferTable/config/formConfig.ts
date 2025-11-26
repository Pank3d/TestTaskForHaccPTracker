import { z } from 'zod';
import type { DropdownOption } from '@shared/ui';

export const STATUSES = [
  { value: 'Работает', label: 'Работает' },
  { value: 'В отпуске', label: 'В отпуске' },
  { value: 'Уволен', label: 'Уволен' },
];

const requiredString = (message: string = 'Обязательное поле') =>
  z.preprocess((val) => val ?? '', z.string().min(1, message));

export const stafferValidationSchema = z.object({
  first_name: requiredString('Обязательное поле'),
  last_name: requiredString('Обязательное поле'),
  middle_name: z.string().optional().or(z.literal('')),
  position: requiredString('Обязательное поле'),
  status: requiredString('Обязательное поле'),
  tg_url: z.string().optional().or(z.literal('')),
});

export interface StafferFormValues {
  first_name: string;
  last_name: string;
  middle_name?: string;
  position: string;
  status: string;
  tg_url?: string;
}

export const createStafferFields = (
  positionOptions: DropdownOption[],
  statusOptions: DropdownOption[]
) => [
  {
    name: 'last_name',
    label: 'Фамилия',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'first_name',
    label: 'Имя',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'middle_name',
    label: 'Отчество',
    type: 'text' as const,
  },
  {
    name: 'position',
    label: 'Должность',
    type: 'select' as const,
    options: positionOptions,
    required: true,
  },
  {
    name: 'status',
    label: 'Статус',
    type: 'select' as const,
    options: statusOptions,
    required: true,
  },
  {
    name: 'tg_url',
    label: 'Telegram URL',
    type: 'text' as const,
  },
];
