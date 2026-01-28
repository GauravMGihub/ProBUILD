// import React, { useState, useEffect } from 'react';
// import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'; 

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavigation = (path: string, sectionId?: string) => {
//     setIsMobileMenuOpen(false); 

//     if (sectionId) {
//       if (location.pathname === '/') {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       } else {
//         navigate('/');
//         setTimeout(() => {
//           const element = document.getElementById(sectionId);
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//           }
//         }, 100);
//       }
//     } else {
//       navigate(path);
//       window.scrollTo(0, 0); 
//     }
//   };

//   return (
//     <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//       isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent py-4'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div 
//             onClick={() => handleNavigation('/')} 
//             className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
//           >
//              <div className="flex items-end gap-1 h-8">
//                 <div className="w-2 h-3 bg-brand-yellow rounded-sm"></div>
//                 <div className="w-2 h-5 bg-brand-red rounded-sm"></div>
//                 <div className="w-2 h-8 bg-brand-blue rounded-sm"></div>
//              </div>
//              <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 ml-1">ProBUILD</span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-8 items-center">
            
//             <button onClick={() => handleNavigation('/')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
//               Home
//             </button>

//             {/* --- PATHWAY DROPDOWN --- */}
//             <div className="relative group h-16 flex items-center">
//                 <button 
//                   onClick={() => handleNavigation('/cad-pathway')} 
//                   className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors gap-1"
//                 >
//                   Pathway
//                   <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div className="absolute top-14 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
//                   <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                  
//                   <div className="py-2">
//                     <Link 
//                       to="/cad-pathway?tab=engineering" 
//                       className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
//                     >
//                       Engineering Pathway
//                     </Link>
//                     <Link 
//                       to="/cad-pathway?tab=design" 
//                       className="block px-4 py-3 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
//                     >
//                       Design Pathway
//                     </Link>
//                     <Link 
//                       to="/cad-pathway?tab=business" 
//                       className="block px-4 py-3 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 font-medium transition-colors"
//                     >
//                       Business Pathway
//                     </Link>
//                   </div>
//                 </div>
//             </div>

//             <button onClick={() => handleNavigation('/about')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
//               About Us
//             </button>

//             <button onClick={() => handleNavigation('/', 'contact')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
//               Contact Us
//             </button>

//           </div>

//           {/* CTA Buttons - REMOVED 'Book Mentoring' */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="group px-5 py-2 rounded-full bg-brand-red text-white font-semibold text-sm shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               Apply Cohort '26
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full">
//           <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
//             <button onClick={() => handleNavigation('/')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Home</button>
//             <button onClick={() => handleNavigation('/cad-pathway')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Pathway</button>
//             <button onClick={() => handleNavigation('/about')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">About Us</button>
//             <button onClick={() => handleNavigation('/', 'contact')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Contact Us</button>
            
//             <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
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
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false); 

    if (sectionId) {
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0); 
    }
  };

  // Reusable Logo Component to avoid code duplication
  const Logo = () => (
    <div 
      onClick={() => handleNavigation('/')} 
      className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
    >
       <div className="flex items-end gap-1 h-8">
          <div className="w-2 h-3 bg-brand-yellow rounded-sm"></div>
          <div className="w-2 h-5 bg-brand-red rounded-sm"></div>
          <div className="w-2 h-8 bg-brand-blue rounded-sm"></div>
       </div>
       <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 ml-1">ProBUILD</span>
    </div>
  );

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. MOBILE LOGO (Hidden on Desktop) */}
          <div className="md:hidden">
            <Logo />
          </div>

          {/* 2. DESKTOP NAV (Centered Layout) */}
          {/* Added 'flex-1 justify-center' to center this block in the navbar */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
            
            <button onClick={() => handleNavigation('/')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Home
            </button>

            {/* PATHWAY DROPDOWN */}
            <div className="relative group h-16 flex items-center">
                <button 
                  onClick={() => handleNavigation('/cad-pathway')} 
                  className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors gap-1"
                >
                  Pathway
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                  <div className="py-2">
                    <Link to="/cad-pathway?tab=engineering" className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors">Engineering Pathway</Link>
                    <Link to="/cad-pathway?tab=design" className="block px-4 py-3 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors">Design Pathway</Link>
                    <Link to="/cad-pathway?tab=business" className="block px-4 py-3 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 font-medium transition-colors">Business Pathway</Link>
                  </div>
                </div>
            </div>

            {/* --- 3. DESKTOP LOGO (Inserted Here) --- */}
            <div className="px-4">
               <Logo />
            </div>
            {/* ------------------------------------- */}

            <button onClick={() => handleNavigation('/about')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              About Us
            </button>

            <button onClick={() => handleNavigation('/contact')} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Contact Us
            </button>

          </div>

          {/* 4. CTA BUTTON (Right Side) */}
          <div className="hidden md:flex items-center pl-4">
            <button
              onClick={() => handleNavigation('/contact')}
              className="group px-5 py-2 rounded-full bg-brand-red text-white font-semibold text-sm shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
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
            <button onClick={() => handleNavigation('/cad-pathway')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Pathway</button>
            <button onClick={() => handleNavigation('/about')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">About Us</button>
            <button onClick={() => handleNavigation('/', 'contact')} className="text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50">Contact Us</button>
            <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
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