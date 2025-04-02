import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/report" element={<Report />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
