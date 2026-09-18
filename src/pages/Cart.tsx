import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Minus, Plus, Trash2, ArrowLeft, Tag, ShoppingBag, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { formatPrice } from '../utils/currency';
import { t, getProductName, getCategoryName } from '../utils/translations';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart, cartTotal, darkMode, language } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', state: '', zip: '', country: 'US'
  });

  const shipping = cartTotal >= 35 ? 0 : 5.99;
  const tax = (cartTotal - discount) * 0.08;
  const total = cartTotal - discount + shipping + tax;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'brew10') {
      setDiscount(cartTotal * 0.1);
      setCouponApplied(true);
    } else if (couponCode.toLowerCase() === 'coffee20') {
      setDiscount(cartTotal * 0.2);
      setCouponApplied(true);
    } else {
      alert(language === 'ru' ? 'Неверный код купона. Попробуйте BREW10 или COFFEE20' : 'Invalid coupon code. Try BREW10 or COFFEE20');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-20 h-20 text-forest-light mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-4 text-espresso dark:text-cream">{t(language, 'cartOrderConfirmed')}</h1>
          <p className={`mb-8 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            {t(language, 'cartOrderConfirmedDesc')}
          </p>
          <Link to="/shop" className="btn-primary">{t(language, 'cartContinueShopping')}</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className={`w-20 h-20 mx-auto mb-6 ${darkMode ? 'text-cream/20' : 'text-espresso/20'}`} />
          <h1 className="font-serif text-3xl font-bold mb-4 text-espresso dark:text-cream">{t(language, 'cartEmptyTitle')}</h1>
          <p className={`mb-8 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            {t(language, 'cartEmptyDesc')}
          </p>
          <Link to="/shop" className="btn-primary">{t(language, 'cartStartShopping')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Link to="/shop" className={`inline-flex items-center gap-2 mb-6 text-sm ${darkMode ? 'text-cream/60 hover:text-caramel' : 'text-espresso/60 hover:text-caramel'}`}>
          <ArrowLeft className="w-4 h-4" /> {t(language, 'cartContinueShopping')}
        </Link>

        <h1 className={`font-serif text-3xl lg:text-4xl font-bold mb-8 ${darkMode ? 'text-cream' : 'text-espresso'}`}>
          {showCheckout ? t(language, 'cartCheckout') : t(language, 'cartTitle')}
        </h1>

        {!showCheckout ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className={`flex gap-4 p-4 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
                  <img src={item.image} alt={getProductName(item.id, language, item.name)} className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-serif font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{getProductName(item.id, language, item.name)}</h3>
                        <p className={`text-sm ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>{getCategoryName(item.category, language)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className={`flex items-center gap-2 rounded-full border ${darkMode ? 'border-dark-surface' : 'border-beige'} px-2 py-1`}>
                        <button onClick={() => updateCartQuantity(item.id, item.cartQuantity - 1)} className="p-0.5">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className={`text-sm font-medium w-6 text-center ${darkMode ? 'text-cream' : 'text-espresso'}`}>{item.cartQuantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, item.cartQuantity + 1)} className="p-0.5">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-caramel font-bold">{formatPrice(item.price * item.cartQuantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className={`p-6 rounded-xl h-fit sticky top-24 ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
              <h3 className={`font-serif text-xl font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartOrderSummary')}</h3>
              
              {/* Coupon */}
              <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                  <Tag className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${darkMode ? 'text-cream/40' : 'text-espresso/40'}`} />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder={t(language, 'cartCoupon')}
                    className={`w-full pl-8 pr-3 py-2 rounded-lg border text-sm ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
                  />
                </div>
                <button onClick={applyCoupon} className="px-4 py-2 rounded-lg bg-caramel text-white text-sm font-medium hover:bg-warm-brown transition-colors">
                  {t(language, 'cartApply')}
                </button>
              </div>
              {couponApplied && <p className="text-forest-light text-sm mb-4">{t(language, 'cartCouponApplied')} {formatPrice(discount)}</p>}

              <div className={`space-y-3 py-4 border-t border-b ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartSubtotal')}</span>
                  <span className={darkMode ? 'text-cream' : 'text-espresso'}>{formatPrice(cartTotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-forest-light">
                    <span>{t(language, 'cartDiscount')}</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartShipping')}</span>
                  <span className={darkMode ? 'text-cream' : 'text-espresso'}>{shipping === 0 ? t(language, 'cartFree') : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartTax')}</span>
                  <span className={darkMode ? 'text-cream' : 'text-espresso'}>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className={`font-serif text-lg font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartTotal')}</span>
                <span className="text-2xl font-bold text-caramel">{formatPrice(total)}</span>
              </div>

              <button onClick={() => setShowCheckout(true)} className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4" /> {t(language, 'cartProceed')}
              </button>

              {cartTotal < 35 && (
                <p className={`text-xs text-center mt-3 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>
                  {formatPrice(35 - cartTotal)} {t(language, 'cartFreeShippingMsg')}
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form onSubmit={handleCheckout} className="lg:col-span-2 space-y-6">
              <div>
                <h3 className={`font-serif text-xl font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartContactInfo')}</h3>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={checkoutForm.email}
                  onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
                />
              </div>

              <div>
                <h3 className={`font-serif text-xl font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartShippingAddr')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="First Name" value={checkoutForm.firstName} onChange={(e) => setCheckoutForm({...checkoutForm, firstName: e.target.value})} className={`px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                  <input type="text" required placeholder="Last Name" value={checkoutForm.lastName} onChange={(e) => setCheckoutForm({...checkoutForm, lastName: e.target.value})} className={`px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                  <input type="text" required placeholder="Address" value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} className={`sm:col-span-2 px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                  <input type="text" required placeholder="City" value={checkoutForm.city} onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})} className={`px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" required placeholder="State" value={checkoutForm.state} onChange={(e) => setCheckoutForm({...checkoutForm, state: e.target.value})} className={`px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                    <input type="text" required placeholder="ZIP" value={checkoutForm.zip} onChange={(e) => setCheckoutForm({...checkoutForm, zip: e.target.value})} className={`px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-card border-dark-surface text-cream placeholder-cream/40' : 'bg-white border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`font-serif text-xl font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartPayment')}</h3>
                <div className={`p-6 rounded-xl border-2 border-dashed ${darkMode ? 'border-dark-surface' : 'border-beige'} text-center`}>
                  <CreditCard className={`w-10 h-10 mx-auto mb-3 ${darkMode ? 'text-cream/40' : 'text-espresso/40'}`} />
                  <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
                    {t(language, 'cartPaymentDemo')}
                  </p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Truck className="w-4 h-4" /> {t(language, 'cartPlaceOrder')} {formatPrice(total)}
              </button>
            </form>

            {/* Mini Summary */}
            <div className={`p-6 rounded-xl h-fit sticky top-24 ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
              <h3 className={`font-serif text-lg font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'cartYourOrder')}</h3>
              <div className="space-y-3 mb-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={getProductName(item.id, language, item.name)} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>{getProductName(item.id, language, item.name)}</p>
                      <p className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>x{item.cartQuantity}</p>
                    </div>
                    <span className={`text-sm font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>{formatPrice(item.price * item.cartQuantity)}</span>
                  </div>
                ))}
              </div>
              <div className={`border-t pt-3 space-y-2 ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartSubtotal')}</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartShipping')}</span>
                  <span>{shipping === 0 ? t(language, 'cartFree') : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>{t(language, 'cartTax')}</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className={`flex justify-between font-bold text-lg pt-2 border-t ${darkMode ? 'border-dark-surface text-cream' : 'border-beige text-espresso'}`}>
                  <span>{t(language, 'cartTotal')}</span>
                  <span className="text-caramel">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
