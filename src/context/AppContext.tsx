import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: 'Hot Drink' | 'Cold Drink' | 'Food' | 'Beans' | 'Merchandise';
  description: string;
  roastLevel?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

interface AppContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: Product[];
  darkMode: boolean;
  searchQuery: string;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  toggleDarkMode: () => void;
  setSearchQuery: (query: string) => void;
  loadSampleProducts: () => void;
  cartTotal: number;
  cartCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const sampleProducts: Product[] = [
  { id: '1', name: 'Classic Espresso', price: 3.50, quantity: 100, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop', category: 'Hot Drink', description: 'A bold, rich shot of pure coffee perfection. Our signature espresso blend delivers intense flavor with a velvety crema.', roastLevel: 'Dark', rating: 4.8, reviews: 124 },
  { id: '2', name: 'Caramel Latte', price: 5.25, quantity: 80, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop', category: 'Hot Drink', description: 'Silky steamed milk meets our espresso, finished with a drizzle of house-made caramel. Pure comfort in a cup.', roastLevel: 'Medium', rating: 4.9, reviews: 203 },
  { id: '3', name: 'Cappuccino', price: 4.75, quantity: 90, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop', category: 'Hot Drink', description: 'The perfect balance of espresso, steamed milk, and thick foam. Topped with a dusting of cocoa.', roastLevel: 'Medium', rating: 4.7, reviews: 156 },
  { id: '4', name: 'Iced Vanilla Coffee', price: 5.50, quantity: 70, image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop', category: 'Cold Drink', description: 'Smooth cold brew infused with Madagascar vanilla bean, served over ice. Refreshingly bold.', roastLevel: 'Medium', rating: 4.6, reviews: 89 },
  { id: '5', name: 'Matcha Latte', price: 5.75, quantity: 60, image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop', category: 'Hot Drink', description: 'Premium ceremonial-grade matcha whisked with creamy oat milk. Earthy, smooth, and energizing.', rating: 4.5, reviews: 67 },
  { id: '6', name: 'Cold Brew', price: 4.50, quantity: 85, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop', category: 'Cold Drink', description: 'Steeped for 20 hours for an ultra-smooth, naturally sweet coffee experience. No bitterness, just pure refreshment.', roastLevel: 'Medium-Dark', rating: 4.8, reviews: 178 },
  { id: '7', name: 'Butter Croissant', price: 3.25, quantity: 50, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop', category: 'Food', description: 'Flaky, golden, and buttery. Baked fresh every morning using French techniques and premium European butter.', rating: 4.9, reviews: 234 },
  { id: '8', name: 'Avocado Toast', price: 8.50, quantity: 40, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop', category: 'Food', description: 'Sourdough bread topped with smashed avocado, cherry tomatoes, microgreens, and a sprinkle of everything seasoning.', rating: 4.7, reviews: 98 },
  { id: '9', name: 'Colombian Whole Beans', price: 16.99, quantity: 120, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop', category: 'Beans', description: 'Single-origin Colombian beans with notes of chocolate, caramel, and citrus. Medium roast for a balanced cup.', roastLevel: 'Medium', rating: 4.9, reviews: 312 },
  { id: '10', name: 'Ethiopian Yirgacheffe', price: 19.99, quantity: 80, image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop', category: 'Beans', description: 'Bright and fruity with floral notes of jasmine and bergamot. Light roast to preserve the delicate flavor profile.', roastLevel: 'Light', rating: 4.8, reviews: 187 },
  { id: '11', name: 'Ceramic Mug - Earth Tone', price: 18.00, quantity: 35, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop', category: 'Merchandise', description: 'Handcrafted ceramic mug in warm earth tones. Holds 12oz. Dishwasher and microwave safe.', rating: 4.6, reviews: 45 },
  { id: '12', name: 'Blueberry Muffin', price: 3.75, quantity: 45, image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop', category: 'Food', description: 'Bursting with fresh blueberries and topped with a crunchy streusel. A classic bakery favorite.', rating: 4.7, reviews: 156 },
  { id: '13', name: 'Ham & Cheese Sandwich', price: 9.50, quantity: 30, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop', category: 'Food', description: 'Slow-roasted ham, aged gruyère, arugula, and honey mustard on artisan ciabatta. Served warm.', rating: 4.5, reviews: 78 },
  { id: '14', name: 'Dark Roast Blend', price: 14.99, quantity: 100, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop', category: 'Beans', description: 'Our signature dark roast blend. Bold, smoky, and full-bodied with hints of dark chocolate and toasted nuts.', roastLevel: 'Dark', rating: 4.7, reviews: 245 },
  { id: '15', name: 'Insulated Tumbler', price: 28.00, quantity: 25, image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=400&fit=crop', category: 'Merchandise', description: 'Double-wall vacuum insulated tumbler. Keeps drinks hot for 6 hours or cold for 12 hours. 16oz capacity.', rating: 4.8, reviews: 89 },
  { id: '16', name: 'Chai Tea Latte', price: 5.00, quantity: 75, image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=400&h=400&fit=crop', category: 'Hot Drink', description: 'Aromatic blend of black tea, cinnamon, cardamom, and ginger with steamed milk. Warm and spiced.', rating: 4.6, reviews: 134 },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('brewHaven_products');
    return saved ? JSON.parse(saved) : sampleProducts;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('brewHaven_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('brewHaven_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('brewHaven_darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('brewHaven_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('brewHaven_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('brewHaven_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('brewHaven_darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addProduct = (product: Product) => setProducts(prev => [...prev, product]);
  const updateProduct = (product: Product) => setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  const deleteProduct = (id: string) => setProducts(prev => prev.filter(p => p.id !== id));

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item);
      }
      return [...prev, { ...product, cartQuantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));
  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) { removeFromCart(id); return; }
    setCart(prev => prev.map(item => item.id === id ? { ...item, cartQuantity: quantity } : item));
  };
  const clearCart = () => setCart([]);

  const addToWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };
  const removeFromWishlist = (id: string) => setWishlist(prev => prev.filter(p => p.id !== id));

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const loadSampleProducts = () => setProducts(sampleProducts);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.cartQuantity, 0);

  return (
    <AppContext.Provider value={{
      products, cart, wishlist, darkMode, searchQuery,
      addProduct, updateProduct, deleteProduct,
      addToCart, removeFromCart, updateCartQuantity, clearCart,
      addToWishlist, removeFromWishlist,
      toggleDarkMode, setSearchQuery, loadSampleProducts,
      cartTotal, cartCount
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
