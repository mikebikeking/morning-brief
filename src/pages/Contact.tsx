import React, { useState } from 'react';
import { Mail, Twitter, Linkedin, Send } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Message sent successfully!');
  };
  return (
    <PageLayout title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <p className="text-xl text-midnight/70 mb-12 font-serif">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-cream border border-midnight/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-midnight" />
              </div>
              <div>
                <h3 className="font-bold font-playfair text-xl text-midnight mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:hello@morningbrief.com"
                  className="text-midnight/60 hover:text-orange-red transition-colors font-serif">

                  hello@morningbrief.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-cream border border-midnight/10 flex items-center justify-center flex-shrink-0">
                <Twitter className="w-5 h-5 text-midnight" />
              </div>
              <div>
                <h3 className="font-bold font-playfair text-xl text-midnight mb-1">
                  Twitter
                </h3>
                <a
                  href="#"
                  className="text-midnight/60 hover:text-orange-red transition-colors font-serif">

                  @MorningBrief
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 border border-midnight/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-midnight mb-2 uppercase tracking-wider font-mono">

                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
                }
                className="w-full px-4 py-3 bg-cream border border-midnight/10 focus:outline-none focus:border-orange-red focus:ring-1 focus:ring-orange-red transition-all rounded-lg"
                placeholder="Your name" />

            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-midnight mb-2 uppercase tracking-wider font-mono">

                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
                }
                className="w-full px-4 py-3 bg-cream border border-midnight/10 focus:outline-none focus:border-orange-red focus:ring-1 focus:ring-orange-red transition-all rounded-lg"
                placeholder="you@example.com" />

            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-midnight mb-2 uppercase tracking-wider font-mono">

                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value
                })
                }
                className="w-full px-4 py-3 bg-cream border border-midnight/10 focus:outline-none focus:border-orange-red focus:ring-1 focus:ring-orange-red transition-all resize-none rounded-lg"
                placeholder="How can we help?" />

            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-midnight text-white font-bold hover:bg-orange-red transition-all duration-200 flex items-center justify-center gap-2 rounded-lg">

              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </PageLayout>);

}