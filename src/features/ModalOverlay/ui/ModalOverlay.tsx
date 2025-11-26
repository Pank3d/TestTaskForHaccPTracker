import { Modal } from '@shared/ui';
import { useModalStore } from '../model/modalStore';

export const ModalOverlay = () => {
  const { isOpen, title, content, actions, maxWidth, closeModal } = useModalStore();

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      title={title}
      maxWidth={maxWidth}
      actions={actions}
    >
      {content}
    </Modal>
  );
};
