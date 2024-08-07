import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const itemsData = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8 },
  { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.0 },
  { id: 5, name: 'Strawberry', category: 'Fruit', price: 1.5 },
  { id: 6, name: 'Potato', category: 'Vegetable', price: 0.6 },
];

const App = () => {
  const [items, setItems] = useState(itemsData);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'price') {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="app-container">
      <h1>Filter and Sort List</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={handleFilterChange}
        />
        <select value={sort} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <ul className="item-list">
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
