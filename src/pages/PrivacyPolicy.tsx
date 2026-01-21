import React from 'react';
import { PageLayout } from '../components/PageLayout';
export function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-lg prose-slate max-w-none font-serif text-midnight/80">
        <p className="text-sm font-mono text-midnight/50 mb-8 uppercase tracking-widest">
          Last updated: January 21, 2026
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you
            subscribe to our newsletter, contact us for support, or communicate
            with us. This primarily includes your email address and name.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send you The Morning Brief newsletter and other updates.</li>
            <li>Respond to your comments and questions.</li>
            <li>Monitor and analyze trends, usage, and activities.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            3. Data Security
          </h2>
          <p>
            We take reasonable measures to help protect information about you
            from loss, theft, misuse and unauthorized access, disclosure,
            alteration and destruction.
          </p>
        </section>
      </div>
    </PageLayout>);

}