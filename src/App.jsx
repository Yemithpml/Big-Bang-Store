import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import New from './pages/New';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import Popular from './pages/Popular';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/new" element={<New />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;