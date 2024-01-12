import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Yesno from './pages/yes-no';
import Yes from "./pages/code-scan" 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Yesno />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </Router>
  );
}

// Export the App component
export default App;
