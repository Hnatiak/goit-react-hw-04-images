import PropTypes from 'prop-types';
// import { Component } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ srcModal, altModal, onCloseModal }) => {
  const onEscape = e => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  const onClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscape);

    return () => window.removeEventListener('keydown', onEscape);
  });

  return createPortal(
    <div className={css.backdrop} onClick={onClick}>
      <div className={css.modal}>
        <div className={css.wrapper}>
          <button className={css.button} type="button" onClick={onCloseModal}>
            <BsXLg className={css.icon}/>
          </button>
        </div>
        <div>
          <img src={srcModal} alt={altModal}/>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  srcModal: PropTypes.string.isRequired,
  altModal: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;