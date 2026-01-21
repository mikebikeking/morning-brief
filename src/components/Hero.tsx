import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function Hero() {
  const [email, setEmail] = useState('');
  const phoneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ['start end', 'end start']
  });
  const phoneScroll = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };
  return (
    <section className="relative bg-cream pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col">
      {/* Ticker Tape */}
      <div className="absolute top-24 left-0 w-full bg-midnight text-white py-2 overflow-hidden z-20 transform -rotate-1 origin-left scale-105 border-y border-white/10">
        <div className="ticker-wrap">
          <div className="ticker font-mono text-xs tracking-widest uppercase">
            <span className="mx-8">
              Currently Trending: AI Regulation • Tech IPOs • Climate Tech •
              Crypto Markets • Remote Work • Creator Economy •
            </span>
            <span className="mx-8">
              Currently Trending: AI Regulation • Tech IPOs • Climate Tech •
              Crypto Markets • Remote Work • Creator Economy •
            </span>
            <span className="mx-8">
              Currently Trending: AI Regulation • Tech IPOs • Climate Tech •
              Crypto Markets • Remote Work • Creator Economy •
            </span>
            <span className="mx-8">
              Currently Trending: AI Regulation • Tech IPOs • Climate Tech •
              Crypto Markets • Remote Work • Creator Economy •
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="lg:col-span-7 text-left relative z-20">

            <h1 className="font-playfair font-black text-7xl md:text-8xl lg:text-9xl text-midnight leading-[0.85] mb-8 tracking-tighter">
              Start your <br />
              day informed <br />
              <span className="relative inline-block mt-4">
                <span className="font-caveat font-normal text-6xl md:text-7xl text-orange-red transform -rotate-6 inline-block">
                  in 5 minutes
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-orange-red opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">

                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none" />

                </svg>
              </span>
            </h1>

            <div className="relative inline-block group mb-12">
              <p className="text-xl md:text-2xl text-midnight/70 max-w-xl font-light leading-relaxed font-serif italic">
                Join thousands of founders, investors, and operators who get the
                top tech stories delivered every morning.
                <span className="not-italic font-bold text-midnight ml-2 border-b-2 border-orange-red/30 cursor-pointer hover:bg-orange-red/10 transition-colors px-1">
                  Free forever.
                </span>
              </p>

              {/* Hover Pop-up */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 10
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                className="absolute -top-12 right-0 bg-orange-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-1">

                <Sparkles className="w-3 h-3" />
                $0.00
              </motion.div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mb-10">

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-white border border-midnight/10 text-midnight placeholder-midnight/40 focus:outline-none focus:border-midnight focus:ring-1 focus:ring-midnight transition-all font-medium text-lg rounded-lg shadow-sm" />

              <motion.button
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.95
                }}
                type="submit"
                className="px-8 py-4 bg-transparent text-midnight font-bold text-lg border-2 border-midnight hover:bg-midnight hover:text-white transition-all flex items-center justify-center gap-2 rounded-lg relative overflow-hidden group">

                <span className="relative z-10 flex items-center gap-2">
                  Subscribe <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Content - Peek-a-boo Phone */}
          <div
            className="lg:col-span-5 relative h-[800px] hidden lg:block"
            ref={phoneRef}>

            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0, 1], [50, -50])
              }}
              className="absolute top-0 right-0 w-[380px] h-[750px] bg-midnight rounded-[3rem] p-3 shadow-2xl transform rotate-3 border-4 border-midnight">

              {/* Phone Frame */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-midnight rounded-b-2xl z-20"></div>

                {/* Scrollable Content */}
                <motion.div
                  style={{
                    y: phoneScroll
                  }}
                  className="w-full bg-cream min-h-[150%]">

                  {/* Newsletter Header */}
                  <div className="pt-16 pb-8 px-6 border-b border-midnight/5 text-center">
                    <div className="font-playfair font-bold text-2xl text-midnight">
                      The Morning Brief
                    </div>
                    <div className="text-xs font-mono text-midnight/50 mt-2">
                      WEDNESDAY, JANUARY 21
                    </div>
                  </div>

                  {/* Newsletter Body */}
                  <div className="p-6 space-y-8">
                    <div>
                      <div className="text-xs font-bold text-orange-red uppercase tracking-widest mb-2">
                        Top Story
                      </div>
                      <h3 className="font-playfair font-bold text-2xl text-midnight mb-3 leading-tight">
                        AI Regulation Heats Up in EU Parliament
                      </h3>
                      <p className="text-midnight/70 text-sm leading-relaxed font-serif">
                        New legislation proposed today could fundamentally
                        change how generative AI models are deployed across the
                        continent...
                      </p>
                    </div>

                    <div className="h-px w-full bg-midnight/10"></div>

                    <div>
                      <div className="text-xs font-bold text-ultraviolet uppercase tracking-widest mb-2">
                        Market Watch
                      </div>
                      <h3 className="font-playfair font-bold text-xl text-midnight mb-3">
                        Tech IPOs Return?
                      </h3>
                      <p className="text-midnight/70 text-sm leading-relaxed font-serif">
                        After a quiet 18 months, three major tech unicorns have
                        filed confidential S-1s this week alone...
                      </p>
                    </div>

                    <div className="p-4 bg-midnight/5 rounded-lg border border-midnight/5">
                      <div className="font-mono text-xs text-midnight/60 mb-2">
                        DATA POINT
                      </div>
                      <div className="text-3xl font-bold text-midnight font-playfair">
                        42%
                      </div>
                      <div className="text-xs text-midnight/60 mt-1">
                        Increase in remote work adoption
                      </div>
                    </div>

                    <div>
                      <h3 className="font-playfair font-bold text-xl text-midnight mb-3">
                        The Crypto Bounce
                      </h3>
                      <p className="text-midnight/70 text-sm leading-relaxed font-serif">
                        Bitcoin touches new highs as institutional adoption
                        accelerates globally...
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}