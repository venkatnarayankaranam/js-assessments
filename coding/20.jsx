import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';
import './index.css';

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }) => (
  <div className="list-item" style={style}>
    {items[index]}
  </div>
);

const App = () => {
  return (
    <div className="app-container">
      <h1>Virtualized List Example</h1>
      <List
        height={400}
        itemCount={items.length}  
        itemSize={35}  
        width={300}  
      >
        {Row}
      </List>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
