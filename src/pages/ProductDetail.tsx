import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Star, Heart, ShoppingBag, ArrowLeft, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import { formatPrice } from '../utils/currency';

export default function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart, addToWishlist, removeFromWishlist, wishlist, darkMode } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);
  const isInWishlist = wishlist.some(p => p.id === id);
  const relatedProducts = product ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) : [];

  if (!product) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg text-cream' : 'bg-cream text-espresso'}`}>
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      {/* Breadcrumb */}
      <div className={`border-b ${darkMode ? 'border-dark-surface' : 'border-beige'} py-3`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className={`${darkMode ? 'text-cream/60 hover:text-caramel' : 'text-espresso/60 hover:text-caramel'} transition-colors`}>Home</Link>
            <span className={darkMode ? 'text-cream/30' : 'text-espresso/30'}>/</span>
            <Link to="/shop" className={`${darkMode ? 'text-cream/60 hover:text-caramel' : 'text-espresso/60 hover:text-caramel'} transition-colors`}>Shop</Link>
            <span className={darkMode ? 'text-cream/30' : 'text-espresso/30'}>/</span>
            <span className="text-caramel">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop" className={`inline-flex items-center gap-2 mb-8 text-sm ${darkMode ? 'text-cream/60 hover:text-caramel' : 'text-espresso/60 hover:text-caramel'} transition-colors`}>
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="space-y-4">
              <div className={`img-zoom rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
                <img src={product.image} alt={product.name} className="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <span className={`text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-caramel/80' : 'text-caramel'}`}>{product.category}</span>
                <h1 className={`font-serif text-3xl lg:text-4xl font-bold mt-2 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-caramel text-caramel' : darkMode ? 'text-cream/20' : 'text-espresso/20'}`} />
                  ))}
                </div>
                <span className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-caramel">{formatPrice(product.price)}</p>

              {/* Roast Level */}
              {product.roastLevel && (
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-medium ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Roast Level:</span>
                  <div className="flex gap-1">
                    {['Light', 'Medium', 'Dark'].map((level) => (
                      <div key={level} className={`w-6 h-6 rounded-full border-2 ${
                        product.roastLevel === level ? 'border-caramel' : 'border-transparent'
                      } ${level === 'Light' ? 'bg-amber-200' : level === 'Medium' ? 'bg-amber-600' : 'bg-amber-900'}`} title={level} />
                    ))}
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>{product.roastLevel}</span>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Quantity:</span>
                <div className={`flex items-center gap-3 rounded-full border ${darkMode ? 'border-dark-surface bg-dark-card' : 'border-beige bg-white'} px-3 py-1`}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className={`p-1 rounded-full hover:bg-caramel/10 ${darkMode ? 'text-cream' : 'text-espresso'}`}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className={`w-8 text-center font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className={`p-1 rounded-full hover:bg-caramel/10 ${darkMode ? 'text-cream' : 'text-espresso'}`}>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className={`text-sm ${product.quantity < 10 ? 'text-red-500' : darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>
                  {product.quantity < 10 ? `Only ${product.quantity} left!` : 'In Stock'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); }}
                  className="btn-primary flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); window.location.href = '/cart'; }}
                  className="btn-outline flex items-center gap-2"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className={`p-3 rounded-full border transition-all ${isInWishlist ? 'bg-caramel border-caramel text-white' : darkMode ? 'border-dark-surface text-cream hover:border-caramel hover:text-caramel' : 'border-beige text-espresso hover:border-caramel hover:text-caramel'}`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Benefits */}
              <div className={`grid grid-cols-3 gap-3 pt-4 border-t ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
                <div className="text-center">
                  <Truck className="w-5 h-5 text-caramel mx-auto mb-1" />
                  <p className={`text-xs ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 text-caramel mx-auto mb-1" />
                  <p className={`text-xs ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>30-Day Returns</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-caramel mx-auto mb-1" />
                  <p className={`text-xs ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Secure Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className={`flex gap-6 border-b ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
              {['description', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab ? 'text-caramel border-b-2 border-caramel' : darkMode ? 'text-cream/50 hover:text-cream' : 'text-espresso/50 hover:text-espresso'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-8">
              {activeTab === 'description' ? (
                <div className="max-w-3xl">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{product.description}</p>
                  {product.roastLevel && (
                    <div className="mt-6">
                      <h4 className={`font-serif text-lg font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Roast Profile</h4>
                      <p className={`${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
                        This {product.roastLevel.toLowerCase()} roast brings out the best in every bean. {
                          product.roastLevel === 'Light' ? 'Bright acidity with delicate floral and fruity notes.' :
                          product.roastLevel === 'Medium' ? 'Balanced body with rich caramel sweetness and subtle complexity.' :
                          'Bold, full-bodied with smoky undertones and a velvety finish.'
                        }
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6 max-w-3xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center text-caramel font-bold text-sm">JD</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>Jane D.</span>
                        <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-caramel text-caramel" />)}</div>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Absolutely love this! The flavor is incredible and it's now my daily go-to. Will definitely order again.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center text-caramel font-bold text-sm">MR</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>Mike R.</span>
                        <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-caramel text-caramel' : darkMode ? 'text-cream/20' : 'text-espresso/20'}`} />)}</div>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Great quality and fast shipping. The aroma when you open the bag is heavenly. Highly recommend!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className={`font-serif text-2xl font-bold mb-8 ${darkMode ? 'text-cream' : 'text-espresso'}`}>You Might Also Like</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {relatedProducts.map(p => (
                  <Link to={`/product/${p.id}`} key={p.id} className={`card-hover rounded-xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                    <div className="img-zoom h-36">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <h4 className={`font-serif text-sm font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{p.name}</h4>
                      <p className="text-caramel font-bold text-sm mt-1">{formatPrice(p.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
