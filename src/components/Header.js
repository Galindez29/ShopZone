import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems = [], onSearch = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Envío gratis en pedidos +$50</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/help" className="hover:text-yellow-400 transition-colors">
                Ayuda
              </Link>
              <Link to="/track" className="hover:text-yellow-400 transition-colors">
                Rastrear pedido
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="bg-gradient-to-r from-slate-800 to-slate-600 text-white p-2 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">ShopZone</h1>
              <p className="text-xs text-slate-500 -mt-1">Tu tienda online</p>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos, marcas y más..."
                className="w-full px-4 py-3 pl-12 pr-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-slate-800 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-4 py-1.5 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buscar
              </motion.button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/account">
              <motion.div
                className="flex flex-col items-center text-slate-600 hover:text-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <User className="w-6 h-6" />
                <span className="text-xs font-medium">Cuenta</span>
              </motion.div>
            </Link>

            <Link to="/wishlist">
              <motion.div
                className="flex flex-col items-center text-slate-600 hover:text-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-6 h-6" />
                <span className="text-xs font-medium">Favoritos</span>
              </motion.div>
            </Link>

            <Link to="/cart">
              <motion.div
                className="flex flex-col items-center text-slate-600 hover:text-slate-800 transition-colors relative"
                whileHover={{ scale: 1.05 }}
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="text-xs font-medium">Carrito</span>
                {cartItemsCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-yellow-400 text-slate-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <Link
                to="/categories"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                <Menu className="w-4 h-4" />
                Todas las categorías
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/electronics" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Electrónicos
                </Link>
                <Link to="/fashion" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Moda
                </Link>
                <Link to="/home" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Hogar
                </Link>
                <Link to="/offers" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                  Ofertas
                </Link>
              </div>
            </div>
            <div className="hidden md:block text-sm text-slate-500">
              Envío gratis en compras superiores a $50
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;