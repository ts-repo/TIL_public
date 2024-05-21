import React from 'react';
import './TabContent.css';

const TabContent = ({ id, active, children }) => {
  return (
    <div id={id} className={`tab-content ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default TabContent;
