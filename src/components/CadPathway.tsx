// import React from 'react';

// import ProgramShowcase from './ProgramShowcase';
// import StudentWork from './StudentWork';
// import StudentPortfolios from './StudentPortfolios';
// import MentoringHub from './MentoringHub';


// const CadPathway: React.FC = () => {
//   return (
//     // Added 'bg-white' to ensure consistent background
//     <div className="pt-24 bg-white min-h-screen">
      
//       {/* --- PAGE HEADER --- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
//           The CAD Pathway
//         </h1>
//         <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//           From Sketch to Simulation. Our CAD pathway covers everything from basic drafting
//           to complex FEA analysis using industry-standard tools.
//         </p>
//       </div>

//       {/* --- MOVED SECTIONS --- */}
      
//       {/* 1. The Courses */}
//       <ProgramShowcase />

//       {/* 2. What they build (Video/3D) */}
//       <StudentWork />

//       {/* 3. Their Github/LinkedIn */}
//       <StudentPortfolios />

//       {/* 4. Call to Action (Mentoring) */}
//       <MentoringHub />

//     </div>
//   );
// };

// export default CadPathway;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrench, PenTool, TrendingUp, Lock } from 'lucide-react';

// Import existing components
import ProgramShowcase from './ProgramShowcase';
import StudentWork from './StudentWork';
import StudentPortfolios from './StudentPortfolios';
import MentoringHub from './MentoringHub';

const CadPathway: React.FC = () => {
  // State to track the active tab. Default is 'engineering'.
  const [activePathway, setActivePathway] = useState<'engineering' | 'design' | 'business'>('engineering');

  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');

    if (tab === 'design') {
      setActivePathway('design');
    } else if (tab === 'business') {
      setActivePathway('business');
    } else {
      // Default to engineering if no tab specified or if tab=engineering
      setActivePathway('engineering');
    }
  }, [location]); // Re-run whenever the URL changes

  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Choose Your Pathway
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          ProBUILD offers specialized tracks to help you master the skills demanded by top industries.
          Select a pathway below to view the curriculum.
        </p>
      </div>

      {/* --- TAB NAVIGATION --- */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-slate-100 p-2 rounded-2xl flex flex-col md:flex-row gap-2">
          
          {/* 1. ENGINEERING TAB */}
          <button
            onClick={() => setActivePathway('engineering')}
            className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              activePathway === 'engineering'
                ? 'bg-white text-blue-600 shadow-lg scale-100'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wrench className="w-5 h-5 mr-2" />
            Engineering Pathway
          </button>

          {/* 2. DESIGN TAB */}
          <button
            onClick={() => setActivePathway('design')}
            className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              activePathway === 'design'
                ? 'bg-white text-purple-600 shadow-lg scale-100'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
            }`}
          >
            <PenTool className="w-5 h-5 mr-2" />
            Design Pathway
          </button>

          {/* 3. BUSINESS TAB */}
          <button
            onClick={() => setActivePathway('business')}
            className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              activePathway === 'business'
                ? 'bg-white text-green-600 shadow-lg scale-100'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
            }`}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Business Pathway
          </button>

        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      
      {/* CONTENT 1: ENGINEERING PATHWAY (Your Existing Content) */}
      {activePathway === 'engineering' && (
        <div className="animate-fade-in-up">
          {/* Sub-header for context */}
          <div className="text-center mb-10">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase">
              Currently Viewing: Engineering
            </span>
          </div>

          <ProgramShowcase />
          <StudentWork />
          <StudentPortfolios />
          <MentoringHub />
        </div>
      )}

      {/* CONTENT 2: DESIGN PATHWAY (Placeholder) */}
      {activePathway === 'design' && (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center animate-fade-in-up">
          <div className="bg-slate-50 rounded-3xl p-16 border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Design Pathway Coming Soon</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              We are currently building the curriculum for UI/UX, Industrial Design, and Product Rendering. 
              Join the waitlist to be notified when this track opens.
            </p>
          </div>
        </div>
      )}

      {/* CONTENT 3: BUSINESS PATHWAY (Placeholder) */}
      {activePathway === 'business' && (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center animate-fade-in-up">
          <div className="bg-slate-50 rounded-3xl p-16 border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Pathway Coming Soon</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Learn Product Management, Tech Sales, and Engineering Leadership. 
              This module is currently under development by our industry partners.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default CadPathway;