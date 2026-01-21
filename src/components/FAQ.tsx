import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const faqs = [
{
  question: 'Is it really free?',
  answer:
  'Yes, completely free. We are supported by premium sponsorships from relevant tech brands.'
},
{
  question: 'How do I unsubscribe?',
  answer: 'One-click unsubscribe link in every email. No questions asked.'
},
{
  question: 'Who writes this?',
  answer:
  'Our editorial team consists of veteran tech journalists and industry analysts.'
}];

export function FAQ() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-black text-4xl md:text-5xl text-midnight mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <AccordionItem key={index} faq={faq} index={index} />
          )}
        </div>
      </div>
    </section>);

}
function AccordionItem({ faq, index }: {faq: any;index: number;}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.1
      }}
      className="border-b border-midnight/10">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group">

        <span className="font-playfair font-bold text-xl text-midnight group-hover:text-orange-red transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-midnight/40 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-orange-red' : ''}`} />

      </button>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          className="overflow-hidden">

            <p className="pb-6 text-midnight/60 font-serif text-lg leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}