// arash-frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<iframe src="http://localhost:3001/admin" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        {/* مسیرهای دیگر برنامه وبلاگ شما */}
      </Routes>
    </Router>
  );
};

export default App;
