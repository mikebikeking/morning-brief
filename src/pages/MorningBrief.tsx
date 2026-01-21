import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ValuePropGrid } from '../components/ValuePropGrid';
import { ProcessSteps } from '../components/ProcessSteps';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { SubscribeModal } from '../components/SubscribeModal';
export function MorningBrief() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream font-sans text-midnight selection:bg-orange-red selection:text-white paper-grain">
      <Header onOpenSubscribe={() => setIsModalOpen(true)} />
      <main>
        <div id="subscribe">
          <Hero />
        </div>
        <ValuePropGrid />
        <SocialProof />
        <ProcessSteps />

        {/* Editorial Note Section */}
        <section className="py-24 bg-white border-y border-midnight/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-playfair font-bold text-3xl mb-8 text-midnight">
              Editor's Note
            </h2>
            <p className="text-xl text-midnight/70 leading-relaxed mb-10 font-serif italic">
              "We built this for ourselves. We were tired of the noise, the
              clickbait, and the anxiety-inducing news cycle. We wanted a quiet,
              intelligent corner of the internet to start our day. We hope you
              enjoy it as much as we do."
            </p>
            <div className="font-caveat text-4xl text-orange-red transform -rotate-2">
              Alex & The Team
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} />

    </div>);

}