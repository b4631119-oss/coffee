import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { darkMode } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 Welcome to Coffeetoria. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { from: 'user', text: chatInput }]);
    setTimeout(() => {
      setChatMessages(prev => [...prev, { from: 'bot', text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to browse our menu or make a reservation!" }]);
    }, 1000);
    setChatInput('');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      {/* Header */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&h=500&fit=crop" alt="Coffee shop exterior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-cream mb-4">Get in Touch</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
                  <CheckCircle className="w-16 h-16 text-forest-light mx-auto mb-4" />
                  <h2 className={`font-serif text-2xl font-bold mb-2 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Message Sent!</h2>
                  <p className={darkMode ? 'text-cream/60' : 'text-espresso/60'}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
                  <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Send Us a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Name *</label>
                      <input type="text" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Email *</label>
                      <input type="email" required className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Subject</label>
                    <select className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Catering Request</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>Message *</label>
                    <textarea required rows={5} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel resize-none`} placeholder="Tell us what's on your mind..." />
                  </div>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h3 className={`font-serif text-lg font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>123 Roast Avenue</p>
                      <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>Portland, OR 97201</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-caramel shrink-0" />
                    <p className={darkMode ? 'text-cream' : 'text-espresso'}>(503) 555-BREW</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-caramel shrink-0" />
                    <p className={darkMode ? 'text-cream' : 'text-espresso'}>hello@brewhaven.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-caramel mt-0.5 shrink-0" />
                    <div className={`text-sm ${darkMode ? 'text-cream' : 'text-espresso'}`}>
                      <p>Mon-Fri: 6:30 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 10:00 PM</p>
                      <p>Sunday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className={`rounded-2xl overflow-hidden h-48 ${darkMode ? 'bg-dark-card' : 'bg-beige'} shadow-md flex items-center justify-center`}>
                <div className="text-center">
                  <MapPin className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-cream/30' : 'text-espresso/30'}`} />
                  <p className={`text-sm ${darkMode ? 'text-cream/40' : 'text-espresso/40'}`}>123 Roast Avenue, Portland</p>
                </div>
              </div>

              {/* FAQ */}
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-beige'} shadow-md`}>
                <h3 className={`font-serif text-lg font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Quick FAQ</h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Do you offer catering?</p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Yes! Contact us for events of 20+ guests.</p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Is there parking?</p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Free street parking available. Bike racks too!</p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-cream/80' : 'text-espresso/80'}`}>Do you have WiFi?</p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-cream/50' : 'text-espresso/50'}`}>Complimentary high-speed WiFi for all guests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {showChat && (
          <div className={`mb-4 w-80 rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-dark-card border border-dark-surface' : 'bg-white border border-beige'}`}>
            <div className="bg-caramel p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">Live Chat</span>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/80 hover:text-white">
                <span className="text-lg">×</span>
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.from === 'user' ? 'bg-caramel text-white' : darkMode ? 'bg-dark-surface text-cream/80' : 'bg-beige text-espresso'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className={`p-3 border-t ${darkMode ? 'border-dark-surface' : 'border-beige'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  placeholder="Type a message..."
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`}
                />
                <button onClick={handleSendChat} className="px-3 py-2 rounded-lg bg-caramel text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 rounded-full bg-caramel text-white shadow-lg flex items-center justify-center hover:bg-warm-brown transition-all hover:scale-110"
        >
          {showChat ? <span className="text-2xl">×</span> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
