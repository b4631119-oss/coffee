import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { t } from '../utils/translations';
import { Calendar, Clock, Users, CheckCircle, MapPin, Phone } from 'lucide-react';

export default function Reservation() {
  const { darkMode, language } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

  if (submitted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-20 h-20 text-forest-light mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-4 text-espresso dark:text-cream">{t(language, 'resConfirmedTitle')}</h1>
          <p className={`mb-2 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            {t(language, 'resConfirmedDesc').replace('{guests}', form.guests).replace('{guestText}', form.guests !== '1' ? t(language, 'resGuestsPlural') : t(language, 'resGuest'))}
          </p>
          <p className={`mb-2 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            📅 {form.date} at {form.time}
          </p>
          <p className={`mb-8 ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>
            {t(language, 'resConfirmedEmail').replace('{email}', form.email)}
          </p>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '' }); }} className="btn-primary">
            {t(language, 'resMakeAnother')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=500&fit=crop"
            alt="Cozy cafe interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-cream mb-4">{t(language, 'resTitle')}</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            {t(language, 'resDesc')}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className={`p-6 lg:p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg`}>
                <h2 className={`font-serif text-2xl font-bold mb-6 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'resBookTitle')}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{t(language, 'resFullName')} *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="name   " />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{t(language, 'resEmail')} *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder="you@email.com" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{t(language, 'resPhone')}</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel`} placeholder=" (555) 555-1234" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                      <Calendar className="w-4 h-4 inline mr-1" />{t(language, 'resDate')} *
                    </label>
                    <input type="date" required value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                      <Clock className="w-4 h-4 inline mr-1" />{t(language, 'resTime')} *
                    </label>
                    <select required value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                      <option value="">{t(language, 'resSelectTime')}</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                      <Users className="w-4 h-4 inline mr-1" />{t(language, 'resGuests')} *
                    </label>
                    <select required value={form.guests} onChange={(e) => setForm({...form, guests: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? t(language, 'resGuest') : t(language, 'resGuestsPlural')}</option>)}
                      <option value="9+">{t(language, 'resCallUs')}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{t(language, 'resOccasion')}</label>
                  <select value={form.occasion} onChange={(e) => setForm({...form, occasion: e.target.value})} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream' : 'bg-cream border-beige text-espresso'} focus:outline-none focus:border-caramel`}>
                    <option value="">{t(language, 'resOccasions')[0]}</option>
                    {t(language, 'resOccasions').slice(1).map((item: string, idx: number) => <option key={idx} value={item}>{item}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>{t(language, 'resSpecialReqs')}</label>
                  <textarea value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} rows={3} className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-dark-surface border-dark-surface text-cream placeholder-cream/40' : 'bg-cream border-beige text-espresso placeholder-espresso/40'} focus:outline-none focus:border-caramel resize-none`} placeholder="Window seat, high chair needed, dietary requirements..." />
                </div>

                <button type="submit" className="btn-primary w-full">{t(language, 'resConfirm')}</button>
              </form>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <h3 className={`font-serif text-lg font-semibold mb-4 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'resVisitUs')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-cream' : 'text-espresso'}`}>osh </p>
                      <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}> Osh, Kyrgyzstan 723500</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-caramel shrink-0" />
                    <p className={darkMode ? 'text-cream' : 'text-espresso'}>(0555) 99-99-99</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-caramel shrink-0" />
                    <div className={`text-sm ${darkMode ? 'text-cream' : 'text-espresso'}`}>
                      <p>Mon-Fri: 6:30 AM - 9 PM</p>
                      <p>Sat: 7 AM - 10 PM</p>
                      <p>Sun: 8 AM - 8 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-beige'} shadow-md`}>
                <h3 className={`font-serif text-lg font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{t(language, 'resGoodToKnow')}</h3>
                <ul className={`space-y-2 text-sm ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                  {t(language, 'resGoodToKnowItems').map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}