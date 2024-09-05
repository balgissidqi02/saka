import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css'; 

const Breadcrumb = ({ items, type, size }) => {
  return (
    <nav className={`breadcrumb breadcrumb-${type} breadcrumb-${size}`}>
      <ol>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
            <a href={item.link}>{item.label}</a>
            {index < items.length - 1 && <span className="breadcrumb-separator"> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  type: PropTypes.oneOf(['default', 'custom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Breadcrumb.defaultProps = {
  type: 'default',
  size: 'medium',
};

export default Breadcrumb;
