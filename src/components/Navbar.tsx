// import React, { useState, useEffect } from 'react';
// import { Menu, X, ArrowRight } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Our Roadmap', href: '/#roadmap' }, // Scroll to Roadmap section on Home
//     { name: 'CAD Pathway', href: '/cad-pathway' }, // NEW PAGE
//     { name: 'About Us', href: '/about' },          // NEW PAGE
//     { name: 'Contact Us', href: '/#contact' },    // Scroll to Footer/Contact on Home
//   ];

//   return (
//     <nav
//       className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
//           : 'bg-transparent py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
//              <div className="flex items-end gap-1 h-8">
//                 <div className="w-2 h-3 bg-brand-yellow rounded-sm"></div>
//                 <div className="w-2 h-5 bg-brand-red rounded-sm"></div>
//                 <div className="w-2 h-8 bg-brand-blue rounded-sm"></div>
//              </div>
//              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
//               ProBUILD
//             </span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//              <button className="px-4 py-2 rounded-full border-2 border-brand-blue text-brand-blue font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300">
//               Book Mentoring
//             </button>
//             <button className="group px-5 py-2 rounded-full bg-brand-red text-white font-semibold text-sm shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               Apply Cohort '26
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-slate-600 hover:text-slate-900 focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full">
//           <div className="px-4 pt-2 pb-6 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-blue-50"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
//               <button className="w-full text-center px-4 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-bold">
//                 Book 1:1 Mentoring
//               </button>
//               <button className="w-full text-center px-4 py-3 rounded-xl bg-brand-red text-white font-bold shadow-lg shadow-brand-red/30">
//                 Apply for Cohort 2026
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar; 

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // NEW HOOKS
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- NEW: SCROLL HELPER FUNCTION ---
  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu

    if (sectionId) {
      // If we are on Home page, just scroll
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If NOT on Home page, navigate Home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // 100ms delay to let Home page load
      }
    } else {
      // Just a normal page link
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')} 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
             <div className="flex items-end gap-1 h-8">
                <div className="w-2 h-3 bg-brand-yellow rounded-sm"></div>
                <div className="w-2 h-5 bg-brand-red rounded-sm"></div>
                <div className="w-2 h-8 bg-brand-blue rounded-sm"></div>
             </div>
             <span className="font-extrabold text-2xl tracking-tight text-slate-900">ProBUILD</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <button onClick={() => handleNavigation('/')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Home
            </button>

            {/* SCROLL LINKS - pass the ID (without #) */}
            <button onClick={() => handleNavigation('/', 'roadmap')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Our Roadmap
            </button>

            <button onClick={() => handleNavigation('/cad-pathway')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              CAD Pathway
            </button>

            <button onClick={() => handleNavigation('/about')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              About Us
            </button>

            <button onClick={() => handleNavigation('/', 'contact')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Contact Us
            </button>

          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <button className="px-4 py-2 rounded-full border-2 border-brand-blue text-brand-blue font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300">
              Book Mentoring
            </button>
            <button className="group px-5 py-2 rounded-full bg-brand-red text-white font-semibold text-sm shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Apply Cohort '26
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <button onClick={() => handleNavigation('/')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Home</button>
            <button onClick={() => handleNavigation('/', 'roadmap')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Our Roadmap</button>
            <button onClick={() => handleNavigation('/cad-pathway')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">CAD Pathway</button>
            <button onClick={() => handleNavigation('/about')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">About Us</button>
            <button onClick={() => handleNavigation('/', 'contact')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Contact Us</button>
            
            <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
              <button className="w-full text-center px-4 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-bold">
                Book 1:1 Mentoring
              </button>
              <button className="w-full text-center px-4 py-3 rounded-xl bg-brand-red text-white font-bold shadow-lg shadow-brand-red/30">
                Apply for Cohort 2026
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;