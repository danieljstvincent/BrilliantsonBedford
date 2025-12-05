import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import HowWeWork from './pages/HowWeWork';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}