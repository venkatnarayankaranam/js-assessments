import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MemoizedItem = React.memo(({ item }) => {
  console.log('Rendering MemoizedItem:', item);
  return <li>{item}</li>;
});

const NonMemoizedItem = ({ item }) => {
  console.log('Rendering NonMemoizedItem:', item);
  return <li>{item}</li>;
};

const App = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Carrot']);
  const [count, setCount] = useState(0);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="app-container">
      <h1>React Memo Example</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <div>
        <h2>Memoized Items</h2>
        <ul>
          {items.map((item, index) => (
            <MemoizedItem key={index} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Non-Memoized Items</h2>
        <ul>
          {items.map((item, index) => (
            <NonMemoizedItem key={index} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Re-render Count: {count}</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
