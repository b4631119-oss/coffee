import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Star, Truck, Shield } from 'lucide-react';

export default function ShopPage() {
  const { products, addToCart, addToWishlist, darkMode, searchQuery, setSearchQuery } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Beans', 'Merchandise', 'Hot Drink', 'Cold Drink', 'Food'];
  
  const shopProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      {/* Header */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-07fcbe16d735?w=1920&h=500&fit=crop"
            alt="Coffee beans and merchandise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-cream mb-4">Online Shop</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Take the Coffeetoria experience home. Premium beans, artisan merchandise, and more — delivered to your door.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className={`${darkMode ? 'bg-dark-card border-dark-surface' : 'bg-beige border-beige-dark'} border-b py-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-caramel" />
              <span className={darkMode ? 'text-cream/70' : 'text-espresso/70'}>Free shipping over $35</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-caramel" />
              <span className={darkMode ? 'text-cream/70' : 'text-espresso/70'}>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-caramel" />
              <span className={darkMode ? 'text-cream/70' : 'text-espresso/70'}>Freshness guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className={`sticky top-16 lg:top-20 z-30 ${darkMode ? 'bg-dark-bg/95' : 'bg-cream/95'} backdrop-blur-md border-b ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-full border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-caramel text-white shadow-md'
                      : darkMode ? 'bg-dark-card text-cream/70 hover:bg-dark-surface' : 'bg-white text-espresso/70 hover:bg-beige'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {shopProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className={`text-lg ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>No products found. Try adjusting your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {shopProducts.map((product, index) => (
                <div key={product.id} className={`card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md animate-fade-in-up`} style={{ animationDelay: `${index * 0.05}s` }}>
                  <Link to={`/product/${product.id}`}>
                    <div className="img-zoom relative h-52">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <button
                        onClick={(e) => { e.preventDefault(); addToWishlist(product); }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-caramel hover:text-white transition-all"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      {product.quantity < 10 && (
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-red-500/90 text-white text-xs font-medium">
                          Only {product.quantity} left
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <span className={`text-xs font-medium uppercase tracking-wide ${darkMode ? 'text-caramel/80' : 'text-caramel'}`}>{product.category}</span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className={`font-serif text-lg font-semibold mt-1 mb-1 hover:text-caramel transition-colors ${darkMode ? 'text-cream' : 'text-espresso'}`}>{product.name}</h3>
                    </Link>
                    <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-caramel font-bold text-lg">${product.price.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-caramel text-white text-sm font-medium hover:bg-warm-brown transition-all shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
