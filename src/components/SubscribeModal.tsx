import React, { useEffect, useState } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Modal Subscribed:', email);
    setEmail('');
    onClose();
    alert('Thanks for subscribing!');
  };
  if (!isOpen && !isVisible) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cream/90 backdrop-blur-md"
        onClick={onClose} />


      {/* Modal Card */}
      <div
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-12 transform transition-all duration-300 border border-midnight/5 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-midnight/40 hover:text-midnight rounded-full transition-colors">

          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-playfair text-midnight mb-3">
            Join the Club
          </h2>
          <p className="text-midnight/60 font-serif">
            Get the top stories delivered to your inbox every morning.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-email" className="sr-only">
              Email address
            </label>
            <input
              id="modal-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-lg bg-cream border border-midnight/10 text-midnight placeholder-midnight/40 focus:outline-none focus:border-orange-red focus:ring-1 focus:ring-orange-red transition-all" />

          </div>
          <button
            type="submit"
            className="w-full px-6 py-4 rounded-lg bg-midnight text-white font-bold hover:bg-orange-red transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2">

            Subscribe Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>);

}