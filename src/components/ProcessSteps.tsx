import React from 'react';
import { Mail, Coffee, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
const steps = [
{
  icon: Mail,
  title: 'Subscribe',
  description: 'Join with just your email.'
},
{
  icon: Coffee,
  title: 'Wake Up',
  description: 'Briefing arrives at 6am.'
},
{
  icon: Sun,
  title: 'Get Smart',
  description: 'Read in 5 minutes or less.'
}];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) =>
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
            className="flex flex-col items-center text-center group">

              <div className="w-20 h-20 rounded-full border-2 border-midnight/10 flex items-center justify-center mb-6 group-hover:border-orange-red transition-colors duration-300">
                <step.icon className="w-8 h-8 text-midnight group-hover:text-orange-red transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold font-playfair text-midnight mb-2">
                {step.title}
              </h3>
              <p className="text-midnight/60 font-serif">{step.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}