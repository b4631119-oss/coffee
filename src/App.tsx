import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import ShopPage from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/Cart';
import Reservation from './pages/Reservation';
import Account from './pages/Account';
import Admin from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact';
import { Privacy, Returns } from './pages/StaticPages';

function App() {
  return (
    <AppProvider>
      <Router basename="/Coffee">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/returns" element={<Returns />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
