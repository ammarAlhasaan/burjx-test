import type {ReactNode} from 'react';
import React from 'react';
import cn from 'classnames';
import styles from './modal.module.scss';

export type ModalProps = {
  /**
   * Controls whether the modal is visible or hidden.
   */
  isOpen: boolean;

  /**
   * Function to call when the modal should be closed.
   */
  onClose: () => void;

  /**
   * The content to display inside the modal.
   */
  children: ReactNode;

  /**
   * Optional title displayed in the modal header.
   */
  title?: string;

  /**
   * If true, clicking outside the modal will close it.
   */
  closeOnOverlayClick?: boolean;

  /**
   * Optional class name for custom styling.
   */
  className?: string;
};

const Modal = (
  {
    isOpen,
    onClose,
    children,
    title,
    closeOnOverlayClick = true,
    className,
  }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={cn(styles.modal, className)}
        onClick={(e) => e.stopPropagation()} // prevent click from bubbling to overlay
      >
        <div
          className={cn(styles.modalWrapper)}
        >
          {title && <div className={styles.header}><h4 className="mt-0">{title}</h4></div>}
          <div className={styles.body}>{children}</div>
          <button className={styles.close} onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
