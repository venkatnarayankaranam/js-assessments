import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fetchItems = (start, end) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = [];
      for (let i = start; i < end; i++) {
        items.push(`Item ${i + 1}`);
      }
      resolve(items);
    }, 1000);
  });
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    loadMoreItems();
  }, []);

  const loadMoreItems = async () => {
    setLoading(true);
    const newItems = await fetchItems(items.length, items.length + 10);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setLoading(false);
    if (newItems.length === 0) {
      setHasMore(false);
    }
  };

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="list-container">
      <h1>Infinite Scroll List</h1>
      <ul>
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <li ref={lastItemRef} key={index}>
                {item}
              </li>
            );
          } else {
            return <li key={index}>{item}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

ReactDOM.render(<InfiniteScrollList />, document.getElementById('root'));
