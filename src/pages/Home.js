import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = ({ onAddToCart, onAddToWishlist }) => {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts 
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
    </div>
  );
};

export default Home;