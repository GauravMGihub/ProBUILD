import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import AboutUs from './components/AboutUs';       
import Pathway from './components/Pathway'; 
import ContactUs from './components/ContactUs';
import CohortPage from './components/CohortPage';


const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden pt-20">
    
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cad-pathway" element={<Pathway />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cohort" element={<CohortPage />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
        
      </div>
    </Router>
  );
};

export default App;