import React from 'react';
import PropTypes from 'prop-types';
import './toast.css';

const Toast = ({ type, size, title, message, timeAgo }) => {
  return (
    <div className={`toast ${type} ${size}`}>
      <div className="toast-icon">
        {type === 'success' && <span>&#10003;</span>}
        {type === 'danger' && <span>&#9888;</span>}
        {type === 'warning' && <span>&#9888;</span>}
        {type === 'notification' && <span>&#128276;</span>}
      </div>
      <div className="toast-content">
        <strong className="toast-title">{title}</strong>
        <p className="toast-message">{message}</p>
        {timeAgo && <span className="toast-time">{timeAgo}</span>}
      </div>
      <button className="toast-close">&#10006;</button>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'notification']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timeAgo: PropTypes.string,
};

export default Toast;
