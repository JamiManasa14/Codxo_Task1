import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="app">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>

  );
};

export default App;
