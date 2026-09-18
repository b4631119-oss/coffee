import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Heart, LogIn, UserPlus, Package, Settings } from 'lucide-react';

export default function Account() {
  const { darkMode, wishlist, removeFromWishlist, addToCart, cart } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-cream'} px-4`}>
        <div className={`w-full max-w-md p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-xl`}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-caramel" />
            </div>
            <h1 className={`font-serif text-2xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className={`text-sm mt-2 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
              {isLogin ? 'Sign in to your Coffeetoria account' : 'Join our coffee-loving community'}
            </p>
          </div>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Email</label>
                <input type="email" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="you@email.com" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Password</label>
                <input type="password" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="••••••••" />
              </div>
              <button type="submit" className="btn-primary w-full">Sign In</button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Full Name</label>
                <input type="text" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="John Doe" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Email</label>
                <input type="email" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="you@email.com" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Password</label>
                <input type="password" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="••••••••" />
              </div>
              <button type="submit" className="btn-primary w-full">Create Account</button>
            </form>
          )}

          <p className={`text-center text-sm mt-6 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setIsLogin(!isLogin)} className="text-caramel font-medium hover:underline">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`p-6 rounded-2xl h-fit ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-caramel/20 flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-caramel" />
              </div>
              <h3 className={`font-serif font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>Coffee Lover</h3>
              <p className={`text-sm ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Member since 2024</p>
            </div>
            <nav className="space-y-1">
              {[
                { id: 'profile', icon: User, label: 'Profile' },
                { id: 'orders', icon: Package, label: 'Order History' },
                { id: 'wishlist', icon: Heart, label: `Wishlist (${wishlist.length})` },
                { id: 'settings', icon: Settings, label: 'Settings' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-caramel/10 text-caramel'
                      : darkMode ? 'text-cream/60 hover:bg-dark-surface' : 'text-espresso/60 hover:bg-beige'
                  }`}
                >
                  <item.icon className="w-4 h-4" /> {item.label}
                </button>
              ))}
              <button onClick={() => setIsLoggedIn(false)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'text-red-400 hover:bg-dark-surface' : 'text-red-500 hover:bg-red-50'}`}>
                <LogIn className="w-4 h-4" /> Sign Out
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>My Profile</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Full Name</label>
                    <input type="text" defaultValue="Coffee Lover" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Email</label>
                    <input type="email" defaultValue="coffee@brewhaven.com" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Phone</label>
                    <input type="tel" defaultValue="(503) 555-1234" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Favorite Drink</label>
                    <input type="text" defaultValue="Caramel Latte" className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`} />
                  </div>
                </div>
                <button className="btn-primary mt-6">Save Changes</button>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Order History</h2>
                <div className="space-y-4">
                  {[
                    { id: '#BH-1024', date: 'Dec 15, 2024', items: 'Colombian Beans, Ceramic Mug', total: '$34.99', status: 'Delivered' },
                    { id: '#BH-1018', date: 'Dec 8, 2024', items: 'Ethiopian Yirgacheffe', total: '$19.99', status: 'Delivered' },
                    { id: '#BH-1005', date: 'Nov 28, 2024', items: 'Insulated Tumbler, Dark Roast', total: '$42.99', status: 'Delivered' },
                  ].map(order => (
                    <div key={order.id} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${darkMode ? 'border-dark-surface bg-dark-surface/50' : 'border-beige bg-cream/50'}`}>
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>{order.id}</p>
                        <p className={`text-sm ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>{order.date} • {order.items}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <span className="text-caramel font-bold">{order.total}</span>
                        <span className="px-3 py-1 rounded-full bg-forest/10 text-forest-light text-xs font-medium">{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>My Wishlist</h2>
                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-cream/20' : 'text-espresso/20'}`} />
                    <p className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>Your wishlist is empty.</p>
                    <Link to="/shop" className="btn-primary inline-block mt-4">Browse Shop</Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wishlist.map(item => (
                      <div key={item.id} className={`flex gap-4 p-4 rounded-xl border ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h4 className={`font-medium text-sm ${darkMode ? 'text-cream' : 'text-espresso'}`}>{item.name}</h4>
                          <p className="text-caramel font-bold text-sm">${item.price.toFixed(2)}</p>
                          <div className="flex gap-2 mt-2">
                            <button onClick={() => addToCart(item)} className="text-xs px-3 py-1 rounded-full bg-caramel text-white">Add to Cart</button>
                            <button onClick={() => removeFromWishlist(item.id)} className="text-xs px-3 py-1 rounded-full border border-red-300 text-red-400 hover:bg-red-50">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-cream/80' : 'text-espresso/80'}>Email Notifications</span>
                    <div className="w-12 h-6 rounded-full bg-caramel relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-cream/80' : 'text-espresso/80'}>SMS Notifications</span>
                    <div className={`w-12 h-6 rounded-full ${darkMode ? 'bg-dark-surface' : 'bg-beige-dark'} relative cursor-pointer`}>
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-cream/80' : 'text-espresso/80'}>Newsletter</span>
                    <div className="w-12 h-6 rounded-full bg-caramel relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
