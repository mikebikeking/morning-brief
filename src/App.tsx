import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MorningBrief } from './pages/MorningBrief';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { ScrollToTop } from './components/ScrollToTop';
export function App() {
  return <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MorningBrief />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>;
}