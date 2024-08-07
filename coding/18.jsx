import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChangeBackgroundColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    }
  };

  return (
    <div className="app-container">
      <h1>React Ref Example</h1>
      <div ref={divRef} className="ref-box">
        Click the button to change my background color.
      </div>
      <button onClick={handleChangeBackgroundColor}>Change Background Color</button>
      <br />
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={handleFocusInput}>Focus Input</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
