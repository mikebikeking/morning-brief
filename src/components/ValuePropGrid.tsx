import React from 'react';
import { Clock, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
const features = [
{
  icon: Zap,
  title: 'Curated Daily',
  description:
  'We sift through the noise. Only the most impactful stories make the cut.',
  color: 'text-orange-red'
},
{
  icon: Clock,
  title: '6am Delivery',
  description: 'Perfectly timed for your morning commute or coffee routine.',
  color: 'text-midnight'
},
{
  icon: Shield,
  title: 'Zero Fluff',
  description:
  'Just facts and analysis. We respect your time and intelligence.',
  color: 'text-ultraviolet'
}];

export function ValuePropGrid() {
  return (
    <section className="py-24 bg-white border-y border-midnight/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-midnight/10">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.2
            }}
            className={`px-8 ${index === 0 ? 'pt-0 md:pl-0' : 'pt-12 md:pt-0'}`}>

              <feature.icon className={`w-8 h-8 ${feature.color} mb-6`} />
              <h3 className="font-playfair font-bold text-2xl text-midnight mb-4">
                {feature.title}
              </h3>
              <p className="text-midnight/60 font-serif text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}