import React from 'react';
import { PageLayout } from '../components/PageLayout';
export function CookiePolicy() {
  return (
    <PageLayout title="Cookie Policy">
      <div className="prose prose-lg prose-slate max-w-none font-serif text-midnight/80">
        <p className="text-sm font-mono text-midnight/50 mb-8 uppercase tracking-widest">
          Last updated: January 21, 2026
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            1. What Are Cookies
          </h2>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            2. How We Use Cookies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors interact with our website.
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>);

}