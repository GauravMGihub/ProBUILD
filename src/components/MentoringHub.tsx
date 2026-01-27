// import React from 'react';
// import { Calendar, FileText, MessageCircle } from 'lucide-react';

// const MentoringHub: React.FC = () => {
//   return (
//     <section id="mentoring" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
//             <MessageCircle className="w-8 h-8 text-brand-yellow" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Not sure where to start? Let's Talk.</h2>
//           <p className="text-xl text-slate-300">
//             Choosing a career path in digital engineering can be confusing. We offer free guidance sessions to help you decide if ProBUILD is right for you.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {/* Option A */}
//             <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer">
//                 <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/40 group-hover:scale-110 transition-transform">
//                     <Calendar className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">Book a 1:1 Session</h3>
//                 <p className="text-slate-400 mb-6">15-minute Zoom call with a lead mentor. Discuss your current skills and career goals.</p>
//                 <span className="inline-block text-brand-yellow font-bold border-b border-brand-yellow pb-1 group-hover:border-b-2">Schedule Free Call &rarr;</span>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MentoringHub; 

import React from 'react';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const MentoringHub: React.FC = () => {
  return (
    // Background matches the dark theme
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700 shadow-xl shadow-blue-900/20">
            <MessageCircle className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Not sure where to start? Let's Talk.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choosing a career path in digital engineering can be confusing. We offer free guidance 
            sessions to help you decide if ProBUILD is right for you.
          </p>
        </div>

        {/* --- CHANGED: REMOVED GRID, CENTERED SINGLE CARD --- */}
        <div className="max-w-3xl mx-auto">
          
          {/* THE SINGLE EXTENDED CARD */}
          <div className="group bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 text-center">
            
            {/* Icon */}
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-3xl font-bold text-white mb-4">
              Book a 1:1 Session
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
              15-minute Zoom call with a lead mentor. Discuss your current skills, 
              career goals, and get a personalized roadmap.
            </p>

            {/* Button */}
            <a 
              href="#" 
              className="inline-flex items-center text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors border-b-2 border-transparent hover:border-yellow-300 pb-1"
            >
              Schedule Free Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentoringHub;