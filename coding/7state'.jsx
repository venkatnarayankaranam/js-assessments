import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const StateManager = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello, React Hooks!');

  useEffect(() => {
    console.log('Component mounted or updated');

    return () => {
      console.log('Cleanup on component unmount or before re-render');
    };
  }, []); 

  useEffect(() => {
    console.log(`Count value changed: ${count}`);
  }, [count]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleTextChange = () => setText('React Hooks are awesome!');

  return (
    <div>
      <h2>State Manager Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Text: {text}</p>
      <button onClick={handleTextChange}>Change Text</button>
    </div>
  );
};

ReactDOM.render(<StateManager />, document.getElementById('root'));


