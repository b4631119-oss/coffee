import React, { useState } from 'react';
import { useApp, Product } from '../context/AppContext';
import { Lock, Plus, Edit, Trash2, Search, Filter, Package, DollarSign, TrendingUp, Users, Save, X, Database } from 'lucide-react';

export default function Admin() {
  const { products, addProduct, updateProduct, deleteProduct, loadSampleProducts, darkMode } = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '', price: '', quantity: '', image: '', category: 'Hot Drink' as Product['category'], description: '', roastLevel: ''
  });

  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Hint: admin123');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', price: '', quantity: '', image: '', category: 'Hot Drink', description: '', roastLevel: '' });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleSave = () => {
    if (!formData.name || !formData.price || !formData.quantity) {
      alert('Please fill in all required fields');
      return;
    }

    const product: Product = {
      id: editingProduct ? editingProduct.id : Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity),
      image: formData.image || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      category: formData.category,
      description: formData.description,
      roastLevel: formData.roastLevel || undefined,
      rating: editingProduct?.rating || 4.5,
      reviews: editingProduct?.reviews || 0,
    };

    if (editingProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      quantity: product.quantity.toString(),
      image: product.image,
      category: product.category,
      description: product.description,
      roastLevel: product.roastLevel || '',
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
  const lowStock = products.filter(p => p.quantity < 20).length;

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-cream'} px-4`}>
        <div className={`w-full max-w-sm p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-xl text-center`}>
          <div className="w-16 h-16 rounded-full bg-espresso/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-espresso dark:text-cream" />
          </div>
          <h1 className={`font-serif text-2xl font-bold mb-2 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Admin Panel</h1>
          <p className={`text-sm mb-6 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Enter password to access management tools</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-lg border text-center ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
            />
            <button type="submit" className="btn-primary w-full">Access Panel</button>
          </form>
          <p className={`text-xs mt-4 ${darkMode ? 'text-cream/40' : 'text-espresso/40'}`}>Demo password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className={`font-serif text-3xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>Admin Dashboard</h1>
            <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Manage your products, inventory, and store settings</p>
          </div>
          <div className="flex gap-2">
            <button onClick={loadSampleProducts} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-forest text-white text-sm font-medium hover:bg-forest-light transition-colors">
              <Database className="w-4 h-4" /> Load Sample Products
            </button>
            <button onClick={() => { setShowForm(true); resetForm(); }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-caramel text-white text-sm font-medium hover:bg-warm-brown transition-colors">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-5 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-caramel/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-caramel" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{products.length}</p>
                <p className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Total Products</p>
              </div>
            </div>
          </div>
          <div className={`p-5 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-forest-light" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>${totalValue.toFixed(0)}</p>
                <p className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Inventory Value</p>
              </div>
            </div>
          </div>
          <div className={`p-5 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{totalItems}</p>
                <p className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Total Stock</p>
              </div>
            </div>
          </div>
          <div className={`p-5 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{lowStock}</p>
                <p className={`text-xs ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Low Stock Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-6 p-4 rounded-xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm`}>
          <div className="relative flex-1">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-cream/40' : 'text-espresso/40'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className={`w-4 h-4 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`} />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className={`px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}
            >
              <option value="All">All Categories</option>
              <option value="Hot Drink">Hot Drinks</option>
              <option value="Cold Drink">Cold Drinks</option>
              <option value="Food">Food</option>
              <option value="Beans">Beans</option>
              <option value="Merchandise">Merchandise</option>
            </select>
          </div>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className={`w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 lg:p-8 ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-2xl`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`font-serif text-xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button onClick={resetForm} className={`p-2 rounded-full hover:bg-red-100 ${darkMode ? 'text-cream/60 hover:bg-red-900/30' : 'text-espresso/60'}`}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Product Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="e.g., Classic Espresso" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Price ($) *</label>
                    <input type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="4.50" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Quantity *</label>
                    <input type="number" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="100" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Category *</label>
                    <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value as Product['category']})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                      <option value="Hot Drink">Hot Drink</option>
                      <option value="Cold Drink">Cold Drink</option>
                      <option value="Food">Food</option>
                      <option value="Beans">Beans</option>
                      <option value="Merchandise">Merchandise</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Roast Level</label>
                    <select value={formData.roastLevel} onChange={(e) => setFormData({...formData, roastLevel: e.target.value})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                      <option value="">N/A</option>
                      <option value="Light">Light</option>
                      <option value="Medium">Medium</option>
                      <option value="Medium-Dark">Medium-Dark</option>
                      <option value="Dark">Dark</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Image URL</label>
                  <input type="url" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="https://..." />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Description</label>
                  <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} className={`w-full px-4 py-2.5 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel resize-none`} placeholder="Describe the product..." />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={handleSave} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" /> {editingProduct ? 'Update Product' : 'Save Product'}
                </button>
                <button onClick={resetForm} className={`px-6 py-2.5 rounded-full border ${darkMode ? 'border-dark-surface text-cream/70 hover:bg-dark-surface' : 'border-beige text-espresso/70 hover:bg-beige'} transition-colors`}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className={`rounded-xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow`}>
              <div className="h-36 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className={`font-serif font-semibold text-sm ${darkMode ? 'text-cream' : 'text-espresso'}`}>{product.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${darkMode ? 'bg-dark-surface text-cream/60' : 'bg-beige text-espresso/60'}`}>{product.category}</span>
                </div>
                <p className={`text-xs mb-2 line-clamp-2 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-caramel font-bold">${product.price.toFixed(2)}</span>
                    <span className={`text-xs ml-2 ${product.quantity < 20 ? 'text-red-500' : darkMode ? 'text-cream/40' : 'text-espresso/40'}`}>
                      Qty: {product.quantity}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => handleEdit(product)} className="p-1.5 rounded-lg hover:bg-caramel/10 text-caramel transition-colors">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="p-1.5 rounded-lg hover:bg-red-100 text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className={`w-12 h-12 mx-auto mb-4 ${darkMode ? 'text-cream/20' : 'text-espresso/20'}`} />
            <p className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>No products found. Try adjusting your search or add new products.</p>
          </div>
        )}
      </div>
    </div>
  );
}
