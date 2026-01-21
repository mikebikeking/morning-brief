import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
interface HeaderProps {
  onOpenSubscribe?: () => void;
}
export function Header({ onOpenSubscribe }: HeaderProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm transition-all duration-300">
      <div className="border-b border-midnight/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-6 relative">
            {/* Mobile Menu / Left Elements */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 text-sm font-mono text-midnight/60">
              <span>EST. 2023</span>
              <span className="w-1 h-1 bg-midnight/30 rounded-full"></span>
              <span>DAILY EDITION</span>
            </div>

            {/* Centered Brand */}
            <Link to="/" className="group text-center">
              <h1 className="font-playfair font-normal text-3xl md:text-5xl text-midnight tracking-tight group-hover:text-ultraviolet transition-colors duration-300">
                The Morning Brief
              </h1>
            </Link>

            {/* Right CTA */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                onClick={onOpenSubscribe}
                className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-midnight border border-midnight bg-transparent hover:bg-midnight hover:text-white transition-all duration-300 rounded-full">

                Subscribe
              </motion.button>

              {/* Mobile Icon */}
              <button
                onClick={onOpenSubscribe}
                className="md:hidden p-2 text-midnight">

                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-red origin-left"
        style={{
          scaleX
        }} />

    </header>);

}