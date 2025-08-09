import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) {
        return prevItems.filter(item => item.id !== product.id);
      }
      return [...prevItems, product];
    });
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Implementar lógica de búsqueda
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={cartItems}
          onSearch={handleSearch}
        />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/product/:id" 
              element={
                <ProductDetail 
                  onAddToCart={handleAddToCart}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveFromCart}
                />
              } 
            />
            {/* Rutas adicionales para futuras páginas */}
            <Route path="/categories" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Categorías - Próximamente</h1></div>} />
            <Route path="/offers" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Ofertas - Próximamente</h1></div>} />
            <Route path="/account" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Mi Cuenta - Próximamente</h1></div>} />
            <Route path="/wishlist" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">Lista de Deseos - Próximamente</h1></div>} />
          </Routes>
        </motion.main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;