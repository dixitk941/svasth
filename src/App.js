import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import ProductPage from './pages/ProductPage';
// import OrderPage from './pages/OrderPage';
// import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        {/* <Route path="/order" element={<OrderPage />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
