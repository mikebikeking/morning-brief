import React from 'react';
import { PageLayout } from '../components/PageLayout';
export function TermsOfService() {
  return (
    <PageLayout title="Terms of Service">
      <div className="prose prose-lg prose-slate max-w-none font-serif text-midnight/80">
        <p className="text-sm font-mono text-midnight/50 mb-8 uppercase tracking-widest">
          Last updated: January 21, 2026
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using The Morning Brief website and newsletter, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            2. Use of Service
          </h2>
          <p className="mb-4">
            The Morning Brief provides a daily newsletter service. You agree to
            use the service only for lawful purposes and in accordance with
            these Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair text-midnight mb-4">
            3. Intellectual Property
          </h2>
          <p>
            The content, features, and functionality of The Morning Brief are
            the exclusive property of The Morning Brief and are protected by
            copyright, trademark, and other intellectual property laws.
          </p>
        </section>
      </div>
    </PageLayout>);

}