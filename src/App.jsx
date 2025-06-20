import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItems from './pages/AddItems';
import ViewItems from './pages/ViewItems';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState('light');


 useEffect(() => {
  const savedItems = localStorage.getItem('items');
  try {
    if (savedItems) {
      const parsed = JSON.parse(savedItems);
      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    }
  } catch (err) {
    console.error('Invalid JSON in localStorage:', err);
  }
}, []);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="nav-link">View Items</Link>
            <Link to="/add" className="nav-link">Add Items</Link>
          </div>
        </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode/> : <MdLightMode/>}
          </button>

          
        <Routes>
          <Route
            path="/"
            element={<ViewItems items={items} setItems={setItems} />}
          />
          <Route
            path="/add"
            element={<AddItems items={items} setItems={setItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
