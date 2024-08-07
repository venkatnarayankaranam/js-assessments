import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PaginatedList = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return (
    <div>
      <h2>Paginated List</h2>
      <ul>
        {getPaginatedItems().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
  ];

  return (
    <div>
      <h1>My App</h1>
      <PaginatedList items={items} itemsPerPage={5} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
