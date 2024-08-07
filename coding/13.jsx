import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class BuggyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { throwError: false };
  }

  handleClick = () => {
    this.setState({ throwError: true });
  }

  render() {
    if (this.state.throwError) {
      throw new Error('I crashed!');
    }
    return <button onClick={this.handleClick}>Trigger Error</button>;
  }
}

const App = () => {
  return (
    <div className="app-container">
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
