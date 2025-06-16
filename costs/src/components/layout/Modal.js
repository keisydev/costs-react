import styles from './Modal.module.css'
import { FaTimes } from 'react-icons/fa' // Ícone para fechar

function Modal({ isOpen, onClose, onConfirm, children }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          <FaTimes />
        </button>
        <div className={styles.modal_body}>
          {children}
        </div>
        <div className={styles.modal_actions}>
          <button className={styles.cancel_button} onClick={onClose}>
            Cancelar
          </button>
          <button className={styles.confirm_button} onClick={onConfirm}>
            Confirmar Exclusão
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal