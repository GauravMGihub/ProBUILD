// import React from 'react';
// import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
// import { Link } from 'react-router-dom'; // 1. Import Link

// const Footer: React.FC = () => {
//   return (
//     // 2. Added id="contact" here so the Navbar scroll works
//     <footer id="contact" className="bg-brand-cream border-t border-gray-200 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
//           <div className="col-span-1 md:col-span-1">
//              <div className="flex items-center gap-1 h-6 mb-4">
//                 <img 
//          src="/images/logos/ProBUILD2.png" 
//          alt="ProBUILD Logo" 
//          className="h-6 w-auto object-contain" // Slightly smaller for footer
//       />
//                 <span className="font-semibold text-3xl tracking-tight text-slate-900 ml-1">
//                   ProBUILD
//                 </span>
//              </div>
//             <p className="text-slate-500 text-sm leading-relaxed">
//               Empowering the next generation of digital engineers through project-based learning and industry mentorship.
//             </p>
//           </div>

          {/* <div>
            <h4 className="font-bold text-slate-900 mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-600"> */}
              {/* 3. Updated these to use Link to your new page */}
              {/* <li><Link to="/cad-pathway" className="hover:text-brand-blue">FreeCAD Nano Degree</Link></li>
              <li><Link to="/cad-pathway" className="hover:text-brand-blue">Digital Twin Diploma</Link></li>
              <li><Link to="/cad-pathway" className="hover:text-brand-blue">Automation Basics</Link></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600"> */}
              {/* 4. Added '/' before # so these work even if you are on the About page */}
              {/* <li><a href="/#philosophy" className="hover:text-brand-blue">Philosophy</a></li>
              <li><a href="/#stories" className="hover:text-brand-blue">Success Stories</a></li>
              <li><a href="/about" className="hover:text-brand-blue">About Us</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="font-bold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/probuildglobal/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-azure hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/probuild.in?igsh=YnN4cHdyODBuNzc2" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=probuild.vet@gmail.com"
                target="_blank"
                 rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-yellow hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

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

export default Footer; */}


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

          {/* --- RIGHT SECTION: Connect --- */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Connect</h4>
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
