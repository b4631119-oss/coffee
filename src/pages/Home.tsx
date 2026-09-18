import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight, Star, Clock, MapPin, Heart, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../utils/currency';
import { t, getProductName, getProductDescription, getCategoryName, getRoastLevelName } from '../utils/translations';

export default function Home() {
  const { products, addToCart, addToWishlist, darkMode, language } = useApp();
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
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-4">{t(language, 'homeWelcome')}</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-cream leading-tight mb-6">
              {t(language, 'homeHeroTitle1')} <span className="text-caramel italic">{t(language, 'homeHeroTitle2')}</span> {t(language, 'homeHeroTitle3')}
            </h1>
            <p className="text-cream/80 text-lg lg:text-xl mb-8 leading-relaxed">
              {t(language, 'homeHeroDesc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
                {t(language, 'homeOrderNow')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/reservation" className="btn-outline inline-flex items-center gap-2 border-cream/40 text-cream hover:bg-cream hover:text-espresso">
                {t(language, 'homeReserveTable')}
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
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>{t(language, 'homeFreshRoasted')}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-caramel" />
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>{t(language, 'homeLocallySourced')}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-caramel" />
              <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>{t(language, 'homeAwardWinning')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-bg' : 'bg-cream'} coffee-pattern`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">{t(language, 'homeFeaturedSubtitle')}</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-espresso dark:text-cream">{t(language, 'homeFeaturedTitle')}</h2>
            <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
              {t(language, 'homeFeaturedDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredDrinks.map((product, index) => (
              <div key={product.id} className={`card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="img-zoom relative h-56">
                  <img src={product.image} alt={getProductName(product.id, language, product.name)} className="w-full h-full object-cover" />
                  <button
                    onClick={() => addToWishlist(product)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-caramel hover:text-white transition-all"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  {product.roastLevel && (
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-espresso/80 text-cream text-xs font-medium">
                      {getRoastLevelName(product.roastLevel || '', language)}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className={`font-serif text-lg font-semibold mb-1 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{getProductName(product.id, language, product.name)}</h3>
                  <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>{getProductDescription(product.id, language, product.description)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-caramel font-bold text-lg">{formatPrice(product.price)}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-caramel/10 text-caramel text-sm font-medium hover:bg-caramel hover:text-white transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> {t(language, 'homeAdd')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu" className="btn-outline inline-flex items-center gap-2">
              {t(language, 'homeViewFullMenu')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-card' : 'bg-beige'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">{t(language, 'homeBestSellersSubtitle')}</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-espresso dark:text-cream">{t(language, 'homeBestSellersTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <Link to={`/product/${product.id}`} key={product.id} className={`card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-surface' : 'bg-white'} shadow-md`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="img-zoom h-48">
                  <img src={product.image} alt={getProductName(product.id, language, product.name)} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-caramel text-caramel" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>{product.rating}</span>
                    <span className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>({product.reviews})</span>
                  </div>
                  <h3 className={`font-serif font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{getProductName(product.id, language, product.name)}</h3>
                  <p className="text-caramel font-bold mt-1">{formatPrice(product.price)}</p>
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
                <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>{t(language, 'homeYearsPassion')}</p>
              </div>
            </div>
            <div>
              <p className="text-caramel font-medium text-sm uppercase tracking-wider mb-2">{t(language, 'homeOurStorySubtitle')}</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-espresso dark:text-cream mb-6">
                {t(language, 'homeOurStoryTitle')}
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                {t(language, 'homeOurStoryDesc1')}
              </p>
              <p className={`leading-relaxed mb-8 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
                {t(language, 'homeOurStoryDesc2')}
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                {t(language, 'homeLearnMore')} <ArrowRight className="w-4 h-4" />
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
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-4">{t(language, 'homeNewsletterTitle')}</h2>
          <p className="text-cream/70 mb-8 text-lg">
            {t(language, 'homeNewsletterDesc')}
          </p>
          {subscribed ? (
            <div className="bg-forest/20 border border-forest-light/30 rounded-2xl p-6">
              <p className="text-cream text-lg font-medium">{t(language, 'homeSubscribedMsg')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(language, 'homeNewsletterPlaceholder')}
                required
                className="flex-1 px-5 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-caramel"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t(language, 'homeSubscribe')}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
