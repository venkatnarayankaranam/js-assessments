import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY - 10,
      left: rect.left + window.scrollX + rect.width / 2,
    });
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {visible && (
        <div className="tooltip" style={{ top: position.top, left: position.left }}>
          {text}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button className="tooltip-button">Hover over me</button>
      </Tooltip>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
