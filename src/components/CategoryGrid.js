import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryGrid = () => {
  const categoryImages = {
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    home: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    sports: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    books: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Explora por categorías
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestras categorías cuidadosamente organizadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/category/${category.id}`}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
                        {category.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <div className="flex items-center text-white/90 group-hover:text-yellow-400 transition-colors">
                        <span className="font-medium">Explorar</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/categories">
            <motion.button
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todas las categorías
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;