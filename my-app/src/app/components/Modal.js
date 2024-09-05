import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ title, content, showFooter, onConfirm, onCancel, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className={`modal modal-${size}`}>
            <div className="modal-header">
              <h4>{title}</h4>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-content">{content}</div>
            {showFooter && (
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Modal.defaultProps = {
  showFooter: true,
  onConfirm: () => {},
  onCancel: () => {},
  size: 'medium',  // Default size
};

export default Modal;
