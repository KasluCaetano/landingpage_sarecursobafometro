import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const HomePage = () => (
  <>
    <main>
      <HeroSection />
      <HighlightsSection />
      <BenefitsSection />
      <ServicesSection />
      <FAQSection />
    </main>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;