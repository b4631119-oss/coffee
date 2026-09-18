import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { t } from '../utils/translations';
import { Menu, X, ShoppingBag, Heart, Moon, Sun, Search, Coffee } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, language, setLanguage, toggleDarkMode, cartCount, wishlist } = useApp();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t(language, 'navHome') },
    { path: '/menu', label: t(language, 'navMenu') },
    { path: '/shop', label: t(language, 'navShop') },
    { path: '/reservation', label: t(language, 'navReserve') },
    { path: '/about', label: t(language, 'navAbout') },
    { path: '/contact', label: t(language, 'navContact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${darkMode ? 'bg-dark-bg/90 border-dark-surface' : 'bg-cream/90 border-beige'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Coffee className="w-8 h-8 text-caramel group-hover:rotate-12 transition-transform" />
              <span className="font-serif text-xl lg:text-2xl font-bold text-espresso dark:text-cream">Coffeetoria</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-caramel ${
                    isActive(link.path) ? 'text-caramel border-b-2 border-caramel pb-1' : darkMode ? 'text-cream/80' : 'text-espresso/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link to="/shop" className="relative p-2 rounded-full hover:bg-caramel/10 transition-colors">
                <Search className={`w-5 h-5 ${darkMode ? 'text-cream' : 'text-espresso'}`} />
              </Link>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-caramel/10 transition-colors">
                {darkMode ? <Sun className="w-5 h-5 text-caramel" /> : <Moon className="w-5 h-5 text-espresso" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                className={`px-2.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${darkMode ? 'border-dark-surface text-cream hover:border-caramel' : 'border-beige text-espresso hover:border-caramel'}`}
                aria-label={language === 'en' ? 'Переключить на русский' : 'Switch to English'}
              >
                {language === 'en' ? 'RU' : 'EN'}
              </button>
              <Link to="/account" className="relative p-2 rounded-full hover:bg-caramel/10 transition-colors">
                <Heart className={`w-5 h-5 ${darkMode ? 'text-cream' : 'text-espresso'}`} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-caramel text-white text-xs rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </Link>
              <Link to="/cart" className="relative p-2 rounded-full hover:bg-caramel/10 transition-colors">
                <ShoppingBag className={`w-5 h-5 ${darkMode ? 'text-cream' : 'text-espresso'}`} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-espresso text-cream text-xs rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-full hover:bg-caramel/10 transition-colors">
                {mobileMenuOpen ? <X className={`w-5 h-5 ${darkMode ? 'text-cream' : 'text-espresso'}`} /> : <Menu className={`w-5 h-5 ${darkMode ? 'text-cream' : 'text-espresso'}`} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t ${darkMode ? 'bg-dark-bg border-dark-surface' : 'bg-cream border-beige'}`}>
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'bg-caramel/10 text-caramel' : darkMode ? 'text-cream/80 hover:bg-dark-surface' : 'text-espresso/80 hover:bg-beige'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-cream/60 hover:bg-dark-surface' : 'text-espresso/60 hover:bg-beige'}`}
              >
                {t(language, 'adminPanel')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-dark-card border-dark-surface' : 'bg-espresso'} text-cream/80`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Coffee className="w-7 h-7 text-caramel" />
                <span className="font-serif text-xl font-bold text-cream">Coffeetoria</span>
              </div>
              <p className="text-sm leading-relaxed text-cream/60">
                {t(language, 'footerDesc')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel transition-colors">
                  <span className="text-xs">IG</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel transition-colors">
                  <span className="text-xs">FB</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel transition-colors">
                  <span className="text-xs">TW</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">{t(language, 'footerQuickLinks')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/menu" className="hover:text-caramel transition-colors">{t(language, 'navMenu')}</Link></li>
                <li><Link to="/shop" className="hover:text-caramel transition-colors">{t(language, 'navShop')}</Link></li>
                <li><Link to="/reservation" className="hover:text-caramel transition-colors">{t(language, 'navReserve')}</Link></li>
                <li><Link to="/about" className="hover:text-caramel transition-colors">{t(language, 'navAbout')}</Link></li>
                <li><Link to="/contact" className="hover:text-caramel transition-colors">{t(language, 'navContact')}</Link></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">{t(language, 'footerHours')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>{t(language, 'footerMonFri')}</span><span>6:30 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>{t(language, 'footerSaturday')}</span><span>7:00 AM - 10:00 PM</span></li>
                <li className="flex justify-between"><span>{t(language, 'footerSunday')}</span><span>8:00 AM - 8:00 PM</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">{t(language, 'footerVisitUs')}</h4>
              <ul className="space-y-2 text-sm">
                <li>osh </li>
                <li> Osh, Kyrgyzstan 723500</li>
                <li className="pt-2">hello@coffetoria.com</li>
                <li>(0555) 99-99-99</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
            <p>{t(language, 'footerRights')}</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-caramel transition-colors">{t(language, 'footerPrivacy')}</Link>
              <Link to="/returns" className="hover:text-caramel transition-colors">{t(language, 'footerReturns')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
