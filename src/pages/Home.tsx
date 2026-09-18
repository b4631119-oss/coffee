import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight, Star, Clock, MapPin, Heart, ShoppingBag } from 'lucide-react';

export default function Home() {
  const { products, addToCart, addToWishlist, darkMode } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredDrinks = products.filter(p => p.category === 'Hot Drink').slice(0, 4);
  const bestSellers = products.filter(p => (p.rating || 0) >= 4.7).slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop"
            alt="Cozy coffee shop interior with warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-transparent"></div>
        </div>

        {/* Floating coffee beans decoration */}
        <div className="absolute top-20 right-20 animate-float opacity-20">
          <div className="w-12 h-16 bg-caramel rounded-full rotate-45"></div>
        </div>
        <div className="absolute bottom-40 right-40 animate-float opacity-15" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-12 bg-caramel rounded-full rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-4">Welcome to Brew Haven</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-cream leading-tight mb-6">
              Start Your Morning with the <span className="text-caramel italic">Perfect</span> Roast
            </h1>
            <p className="text-cream/80 text-lg lg:text-xl mb-8 leading-relaxed">
              Freshly roasted. Cozy vibes. Perfect brew. Discover your new favorite cup at our neighborhood coffee sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/reservation" className="btn-outline inline-flex items-center gap-2 border-cream/40 text-cream hover:bg-cream hover:text-espresso">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>

        {/* Steam effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream dark:from-dark-bg to-transparent"></div>
      </section>

      {/* Features Bar */}
      <section className={`${darkMode ? 'bg-dark-card' : 'bg-beige'} py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-caramel" />
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Freshly Roasted Daily</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-caramel" />
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Locally Sourced Beans</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-caramel" />
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Award-Winning Roasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-bg' : 'bg-cream'} coffee-pattern`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">Our Signature Collection</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-espresso dark:text-cream">Featured Drinks</h2>
            <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
              Each cup is crafted with care, using beans roasted to perfection in our on-site roastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredDrinks.map((product, index) => (
              <div key={product.id} className={`card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="img-zoom relative h-56">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => addToWishlist(product)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-caramel hover:text-white transition-all"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  {product.roastLevel && (
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-espresso/80 text-cream text-xs font-medium">
                      {product.roastLevel} Roast
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className={`font-serif text-lg font-semibold mb-1 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{product.name}</h3>
                  <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-caramel font-bold text-lg">${product.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-caramel/10 text-caramel text-sm font-medium hover:bg-caramel hover:text-white transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu" className="btn-outline inline-flex items-center gap-2">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-card' : 'bg-beige'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">Customer Favorites</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-espresso dark:text-cream">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <Link to={`/product/${product.id}`} key={product.id} className={`card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-surface' : 'bg-white'} shadow-md`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="img-zoom h-48">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-caramel text-caramel" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>{product.rating}</span>
                    <span className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>({product.reviews})</span>
                  </div>
                  <h3 className={`font-serif font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{product.name}</h3>
                  <p className="text-caramel font-bold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop"
                  alt="Barista crafting a latte"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
                <p className="font-serif text-3xl font-bold text-caramel">6+</p>
                <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Years of Passion</p>
              </div>
            </div>
            <div>
              <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-espresso dark:text-cream mb-6">
                Where Every Cup Tells a Story
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                Born from a love of exceptional coffee and genuine connection, Brew Haven has been the heart of our community since 2018. We source our beans from sustainable farms, roast them in-house, and serve every cup with a smile.
              </p>
              <p className={`leading-relaxed mb-8 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
                Whether you're here for a quick espresso or a long afternoon with a good book, we've created a space that feels like home. Because great coffee isn't just about the beans — it's about the moments they create.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=600&fit=crop"
            alt="Coffee beans background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/85"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-4">Stay in the Loop</h2>
          <p className="text-cream/70 mb-8 text-lg">
            Join our coffee-loving community. Get exclusive offers, new blend announcements, and brewing tips delivered to your inbox.
          </p>
          {subscribed ? (
            <div className="bg-forest/20 border border-forest-light/30 rounded-2xl p-6">
              <p className="text-cream text-lg font-medium">☕ Welcome to the family! Check your inbox for a special surprise.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-caramel"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
