import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './index.css'; // Tailwind styles

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
