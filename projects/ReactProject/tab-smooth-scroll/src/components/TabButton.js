import React from 'react';
import './TabButton.css';

const TabButton = ({ id, active, onClick, children }) => {
  return (
    <button
      id={id}
      className={`tab-button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
