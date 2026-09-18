import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Award, Coffee, Users, MapPin } from 'lucide-react';

export default function About() {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=800&fit=crop" alt="Coffee roasting process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-cream mb-6">Our Story</h1>
          <p className="text-cream/80 text-lg lg:text-xl leading-relaxed">
            Born from a passion for exceptional coffee and a desire to create a space where community thrives, Coffeetoria has been serving happiness one cup at a time since 2018.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-espresso dark:text-cream mb-6">From Bean to Cup, With Love</h2>
              <div className={`space-y-4 text-lg leading-relaxed ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
                <p>
                  It all started with a simple dream: to create a place where the aroma of freshly roasted coffee fills the air, where conversations flow as freely as the espresso, and where every visitor feels like family.
                </p>
                <p>
                  Our founders, Sarah and Marcus, traveled to coffee-growing regions across Colombia, Ethiopia, and Guatemala. They returned with not just beans, but relationships — with farmers who share their commitment to sustainable, ethical practices.
                </p>
                <p>
                  Today, we roast in-house daily, ensuring every cup meets our exacting standards. From the first crack to the final pour, we obsess over every detail because we believe you deserve nothing less than extraordinary.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop" alt="Coffee beans being sorted" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-card' : 'bg-beige'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-espresso dark:text-cream">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Passion', desc: 'Every cup is crafted with genuine love for the art of coffee making.' },
              { icon: Leaf, title: 'Sustainability', desc: 'Ethically sourced beans, eco-friendly packaging, and zero-waste goals.' },
              { icon: Award, title: 'Quality', desc: 'From farm to cup, we never compromise on the quality of our ingredients.' },
              { icon: Users, title: 'Community', desc: 'We are more than a coffee shop — we are a gathering place for all.' },
            ].map((value, i) => (
              <div key={i} className={`p-6 rounded-2xl text-center ${darkMode ? 'bg-dark-surface' : 'bg-white'} shadow-sm card-hover`}>
                <div className="w-14 h-14 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-caramel" />
                </div>
                <h3 className={`font-serif text-xl font-semibold mb-2 ${darkMode ? 'text-cream' : 'text-espresso'}`}>{value.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`py-16 lg:py-24 ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-espresso dark:text-cream">Meet the Team</h2>
            <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-cream/60' : 'text-espresso/60'}`}>The passionate people behind every perfect cup</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Co-Founder & Head Roaster', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
              { name: 'Marcus Rivera', role: 'Co-Founder & Operations', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
              { name: 'Emily Park', role: 'Head Barista', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
            ].map((member, i) => (
              <div key={i} className={`text-center card-hover rounded-2xl overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-md`}>
                <div className="img-zoom h-64">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className={`font-serif text-xl font-semibold ${darkMode ? 'text-cream' : 'text-espresso'}`}>{member.name}</h3>
                  <p className="text-caramel text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=1920&h=400&fit=crop" alt="Coffee shop atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-espresso/85"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-4">Come Visit Us</h2>
          <p className="text-cream/70 text-lg mb-8">We'd love to welcome you to our cozy corner of the world.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
            <Link to="/contact" className="btn-outline border-cream/40 text-cream hover:bg-cream hover:text-espresso">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
