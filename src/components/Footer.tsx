import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-cream border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LAYOUT: 5 columns - Logo, Quick Links, Explore, Contact Info, Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* --- LEFT SECTION: Logo Only --- */}
          <div className="lg:col-span-1">
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
          </div>

          {/* --- QUICK LINKS --- */}
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

          {/* --- EXPLORE --- */}
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

          {/* --- CONTACT INFO --- */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-brand-azure flex-shrink-0" />
                <a 
                  href="mailto:probuild.vet@gmail.com"
                  className="hover:text-brand-azure transition-colors"
                >
                  probuild.vet@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-brand-azure flex-shrink-0" />
                <a 
                  href="tel:+919822959007"
                  className="hover:text-brand-azure transition-colors"
                >
                  +91 9822959007
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-azure flex-shrink-0" />
                <span className="leading-tight">
                  8, Ashaniketan lane No.11,<br/>
                  Krishna Colony, Kothrud,<br/>
                  Pune - 411038, India
                </span>
              </li>
            </ul>
          </div>

          {/* --- CONNECT (Social Icons) --- */}
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
                href="mailto:probuild.vet@gmail.com"
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
