import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
const users = [
{
  name: 'Sarah K.',
  role: 'CMO @ TechFlow',
  img: 'https://i.pravatar.cc/150?img=1'
},
{
  name: 'James T.',
  role: 'Founder @ Base',
  img: 'https://i.pravatar.cc/150?img=3'
},
{
  name: 'Emily R.',
  role: 'VC @ Sequoia',
  img: 'https://i.pravatar.cc/150?img=5'
},
{
  name: 'Michael C.',
  role: 'Dev @ Vercel',
  img: 'https://i.pravatar.cc/150?img=8'
},
{
  name: 'Jessica L.',
  role: 'Product @ Linear',
  img: 'https://i.pravatar.cc/150?img=9'
}];

export function SocialProof() {
  return (
    <section className="py-24 bg-cream border-t border-midnight/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-xl">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-midnight mb-6">
              Join the <span className="italic text-orange-red">smartest</span>{' '}
              room in tech.
            </h2>
            <p className="text-lg text-midnight/60 font-serif">
              Our readers run the world's most innovative companies. You'll be
              in good company.
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-4">
              {users.map((user, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  zIndex: 10
                }}
                className="relative group cursor-pointer">

                  <div className="w-16 h-16 rounded-full border-4 border-cream overflow-hidden shadow-lg relative z-0">
                    <img
                    src={user.img}
                    alt={user.name}
                    className="w-full h-full object-cover" />

                  </div>

                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 z-10">
                    <CheckCircle2 className="w-5 h-5 text-ultraviolet fill-white" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-midnight text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {user.name} • {user.role}
                  </div>
                </motion.div>
              )}

              <div className="w-16 h-16 rounded-full border-4 border-cream bg-midnight text-white flex items-center justify-center font-bold text-sm shadow-lg relative z-0">
                +12k
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}