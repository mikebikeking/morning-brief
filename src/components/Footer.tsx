import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Footer Subscribed:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };
  return (
    <footer className="bg-midnight text-cream pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="font-playfair font-bold text-3xl mb-8">
              The Morning Brief
            </div>
            <p className="text-cream/60 mb-10 max-w-md text-lg font-serif">
              Curated with precision, delivered with style. Join the daily
              ritual.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-red focus:ring-1 focus:ring-orange-red transition-all rounded-lg" />

              <button
                type="submit"
                className="px-6 py-3 bg-white text-midnight font-bold hover:bg-orange-red hover:text-white transition-all flex items-center justify-center gap-2 rounded-lg">

                Join Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-12 md:justify-items-end">
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-cream/60">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors">

                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors">

                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors">

                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
              <ul className="space-y-4 text-cream/60">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors">

                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors">

                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-cream/40 text-sm">
          <p>© 2025 The Morning Brief.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>);

}