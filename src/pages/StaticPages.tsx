import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, RotateCcw } from 'lucide-react';

export function Privacy() {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-caramel" />
          <h1 className={`font-serif text-3xl lg:text-4xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>Privacy Policy</h1>
        </div>
        <div className={`prose max-w-none ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
          <p className="text-sm mb-8">Last updated: December 2026</p>

          <div className="space-y-6">
            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>1. Information We Collect</h2>
              <p>We collect information you provide directly, including your name, email address, phone number, shipping address, and payment information when you place an order or create an account. We also automatically collect certain information about your device and usage of our website.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>2. How We Use Your Information</h2>
              <p>We use the information we collect to process and fulfill your orders, communicate with you about your orders and account, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>3. Information Sharing</h2>
              <p>We do not sell your personal information. We share information with trusted third parties who assist us in operating our business, such as payment processors, shipping carriers, and technology providers. These parties are bound by confidentiality agreements.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at privacy@brewhaven.com.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>6. Cookies</h2>
              <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. LocalStorage is used to save your preferences and shopping cart data.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:<br/>Email: privacy@brewhaven.com<br/>Phone: (503) 555-BREW<br/>Address: 123 Roast Avenue, Portland, OR 97201</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Returns() {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-8">
          <RotateCcw className="w-8 h-8 text-caramel" />
          <h1 className={`font-serif text-3xl lg:text-4xl font-bold ${darkMode ? 'text-cream' : 'text-espresso'}`}>Returns & Refunds</h1>
        </div>
        <div className={`prose max-w-none ${darkMode ? 'text-cream/70' : 'text-espresso/70'}`}>
          <p className="text-sm mb-8">Last updated: December 2026</p>

          <div className="space-y-6">
            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Our Satisfaction Guarantee</h2>
              <p>At Coffeetoria, we stand behind the quality of our products. If you're not completely satisfied with your purchase, we're here to help.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Return Window</h2>
              <p>You have 30 days from the date of delivery to request a return. Items must be unused, in their original packaging, and in resalable condition.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Coffee Beans & Ground Coffee</h2>
              <p>Due to the perishable nature of our coffee products, we offer a special freshness guarantee. If your coffee doesn't meet your expectations, contact us within 14 days of delivery for a replacement or refund. Opened bags are eligible under our satisfaction guarantee.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Merchandise</h2>
              <p>Mugs, tumblers, and other merchandise can be returned within 30 days in original, unused condition with all packaging intact.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>How to Initiate a Return</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Email us at returns@brewhaven.com with your order number</li>
                <li>Describe the reason for the return</li>
                <li>Our team will respond within 24 hours with return instructions</li>
                <li>Ship the item back using the provided return label</li>
                <li>Refund will be processed within 5-7 business days after we receive the item</li>
              </ol>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Refunds</h2>
              <p>Refunds are issued to the original payment method. Please allow 5-10 business days for the refund to appear on your statement. Shipping costs are non-refundable unless the return is due to our error.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Damaged or Defective Items</h2>
              <p>If you receive a damaged or defective item, please contact us immediately with photos. We'll arrange a replacement at no additional cost or provide a full refund.</p>
            </section>

            <section>
              <h2 className={`font-serif text-xl font-semibold mb-3 ${darkMode ? 'text-cream' : 'text-espresso'}`}>Contact Us</h2>
              <p>Questions about returns? Reach out to us:<br/>Email: returns@brewhaven.com<br/>Phone: (503) 555-BREW</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
