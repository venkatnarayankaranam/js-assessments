import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: { name: 'John Doe', loggedIn: false },
    theme: 'light',
  });

  const login = (name) => {
    setState({ ...state, user: { name, loggedIn: true } });
  };

  const logout = () => {
    setState({ ...state, user: { name: '', loggedIn: false } });
  };

  const toggleTheme = () => {
    setState({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <AppContext.Provider value={{ state, login, logout, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const UserInfo = () => {
  const { state, login, logout } = useAppContext();

  return (
    <div>
      {state.user.loggedIn ? (
        <div>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login('Jane Doe')}>Login</button>
      )}
    </div>
  );
};

const ThemeToggle = () => {
  const { state, toggleTheme } = useAppContext();

  return (
    <div>
      <p>Current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>React Context State Management</h1>
        <UserInfo />
        <ThemeToggle />
      </div>
    </AppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
