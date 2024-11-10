import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './Top';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
};

export default App;