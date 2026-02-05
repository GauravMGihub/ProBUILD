import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
// Link is imported but not currently used since we deleted the internal links, 
// but keeping it here in case you add pages back later.
import { Link } from 'react-router-dom'; 

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-cream border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LAYOUT CHANGED: Used 'flex' with 'justify-between' to push items to edges */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          {/* --- LEFT SECTION: Logo & Bio --- */}
          <div className="max-w-sm">
             <div className="flex items-center gap-1 h-6 mb-4">
                <img 
                  src="/images/logos/ProBUILD2.png" 
                  alt="ProBUILD Logo" 
                  className="h-6 w-auto object-contain" 
                />
                <span className="font-semibold text-3xl tracking-tight text-slate-900 ml-1">
                  ProBUILD
                </span>
             </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of digital engineers through project-based learning and industry mentorship.
            </p>
          </div>

          {/* --- MIDDLE SECTION: Quick Links --- */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cad-pathway" className="hover:text-brand-red transition-colors">Pathways</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-azure transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* --- MIDDLE SECTION: Explore --- */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="/#philosophy" className="hover:text-brand-yellow transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="/#roadmap" className="hover:text-brand-red transition-colors">Learning Roadmap</a>
              </li>
            </ul>
          </div>

          {/* --- RIGHT SECTION: Connect --- */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/probuildglobal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-azure hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/probuild.in?igsh=YnN4cHdyODBuNzc2" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=probuild.vet@gmail.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-yellow hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION: Copyright --- */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; 2026 ProBUILD EdTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
