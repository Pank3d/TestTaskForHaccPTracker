import { create } from 'zustand';
import type { ReactNode } from 'react';

interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  openModal: (config: {
    title?: string;
    content: ReactNode;
    actions?: ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: undefined,
  content: undefined,
  actions: undefined,
  maxWidth: 'sm',
  openModal: (config) =>
    set({
      isOpen: true,
      title: config.title,
      content: config.content,
      actions: config.actions,
      maxWidth: config.maxWidth || 'sm',
    }),
  closeModal: () =>
    set({
      isOpen: false,
      title: undefined,
      content: undefined,
      actions: undefined,
    }),
}));
