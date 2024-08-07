import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';

const items = ['Gcc', 'Venkatnarayan', 'Tirumala', 'Love'];

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <ItemList items={items} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
