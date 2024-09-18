
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ShowNow from './pages/ShopNow'; 
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import YourOrders from './pages/YourOrders'; 
import { CartProvider } from './pages/CartContext'; 
import './App.css';

const App = () => {
  return (
    <CartProvider> {}
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/show-now" element={<ShowNow />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/orders" element={<YourOrders />} /> {/* New route added */}
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; 2024 ShoPannu. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
