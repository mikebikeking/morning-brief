import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SubscribeModal } from './SubscribeModal';
import { motion } from 'framer-motion';
interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}
export function PageLayout({ children, title }: PageLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream font-sans text-midnight selection:bg-orange-red selection:text-white flex flex-col paper-grain">
      <Header onOpenSubscribe={() => setIsModalOpen(true)} />

      <main className="flex-grow pt-32 pb-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {title &&
          <h1 className="text-5xl md:text-6xl font-playfair font-black text-midnight mb-12 tracking-tight text-center">
              {title}
            </h1>
          }
          {children}
        </motion.div>
      </main>

      <Footer />
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />

    </div>);

}