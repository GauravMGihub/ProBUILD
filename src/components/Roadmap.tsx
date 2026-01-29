// import React from 'react';
// import { BookOpen, Wrench, Rocket, Briefcase, ArrowRight } from 'lucide-react';

// const Roadmap: React.FC = () => {
//   const phases = [
//     {
//       id: 'I',
//       title: 'Learn',
//       icon: BookOpen,
//       colorClass: 'bg-blue-50 border-blue-100 text-brand-blue',
//       badgeClass: 'bg-brand-blue text-white',
//       lineClass: 'bg-brand-blue',
//       steps: [
//         { num: 1, text: 'Discovery & Application' },
//         { num: 2, text: 'Free Demo Session' },
//         { num: 3, text: 'Nano Degree Kick-off' },
//       ]
//     },
//     {
//       id: 'II',
//       title: 'Build',
//       icon: Wrench,
//       colorClass: 'bg-yellow-50 border-yellow-100 text-yellow-700',
//       badgeClass: 'bg-brand-yellow text-white',
//       lineClass: 'bg-brand-yellow',
//       steps: [
//         { num: 4, text: 'Profile Development Workshops' },
//         { num: 5, text: 'Hands-On Mini Projects' },
//       ]
//     },
//     {
//       id: 'III',
//       title: 'Create',
//       icon: Rocket,
//       colorClass: 'bg-red-50 border-red-100 text-brand-red',
//       badgeClass: 'bg-brand-red text-white',
//       lineClass: 'bg-brand-red',
//       steps: [
//         { num: 6, text: 'Capstone Project Execution' },
//         { num: 7, text: 'Performance Eval & Certification' },
//       ]
//     },
//     {
//       id: 'IV',
//       title: 'Gain',
//       icon: Briefcase,
//       colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-700',
//       badgeClass: 'bg-emerald-600 text-white',
//       lineClass: 'bg-emerald-600',
//       steps: [
//         { num: 8, text: 'Internship Placement (Fall \'26)' },
//         { num: 9, text: 'Ongoing Alumni Mentorship' },
//       ]
//     }
//   ];

//   return (
//     <section id="roadmap" className="py-24 bg-white relative overflow-hidden">
//        {/* Header */}
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
//         <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Service Roadmap</h2>
//         <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Your Journey to Industry.</h3>
//         <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//             From curiosity to career in four distinct phases.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {phases.map((phase, index) => (
//                 <div key={phase.id} className="relative group">
//                     {/* Desktop Connector Arrow */}
//                     {index < phases.length - 1 && (
//                         <div className="hidden lg:block absolute top-12 -right-6 z-10 text-slate-300">
//                              <ArrowRight size={24} />
//                         </div>
//                     )}

//                     {/* Phase Card */}
//                     <div className={`h-full rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${phase.colorClass}`}>
//                         {/* Header */}
//                         <div className="flex items-center gap-4 mb-6">
//                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${phase.badgeClass}`}>
//                                 <phase.icon size={24} />
//                             </div>
//                             <div>
//                                 <span className="text-xs font-bold uppercase opacity-80 tracking-wider">Phase {phase.id}</span>
//                                 <h4 className="text-2xl font-bold">{phase.title}</h4>
//                             </div>
//                         </div>

//                         {/* Steps Timeline */}
//                         <div className="space-y-6 relative pl-2">
//                              {/* Vertical Line */}
//                             <div className={`absolute left-[15px] top-2 bottom-2 w-0.5 rounded-full opacity-30 ${phase.lineClass}`}></div>

//                             {phase.steps.map((step) => (
//                                 <div key={step.num} className="relative flex gap-4 items-start">
//                                     <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm flex-shrink-0 border-2 border-white ${phase.badgeClass}`}>
//                                         {step.num}
//                                     </div>
//                                     <div className="pt-1">
//                                         <p className="font-semibold text-slate-800 leading-tight text-sm md:text-base">{step.text}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;


import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Wrench, Rocket, Briefcase } from 'lucide-react';

// --- DATA ---
const phases = [
  {
    id: 1,
    phase: "PHASE I",
    title: "Learn",
    color: "blue",
    icon: <BookOpen className="w-5 h-5 text-white" />, // Reduced icon size slightly
    steps: [
      { num: "1", text: "Discovery & Application" },
      { num: "2", text: "Free Demo Session" },
      { num: "3", text: "Nano Degree Kick-off" }
    ]
  },
  {
    id: 2,
    phase: "PHASE II",
    title: "Build",
    color: "yellow",
    icon: <Wrench className="w-5 h-5 text-white" />,
    steps: [
      { num: "4", text: "Profile Development Workshops" },
      { num: "5", text: "Hands-On Mini Projects" }
    ]
  },
  {
    id: 3,
    phase: "PHASE III",
    title: "Create",
    color: "red",
    icon: <Rocket className="w-5 h-5 text-white" />,
    steps: [
      { num: "6", text: "Capstone Project Execution" },
      { num: "7", text: "Performance Eval & Certification" }
    ]
  },
  {
    id: 4,
    phase: "PHASE IV",
    title: "Gain",
    color: "green",
    icon: <Briefcase className="w-5 h-5 text-white" />,
    steps: [
      { num: "8", text: "Internship Placement" },
      { num: "9", text: "Alumni Mentorship" }
    ]
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue': return { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', shadow: 'shadow-blue-500/30' };
    case 'yellow': return { bg: 'bg-yellow-500', light: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', shadow: 'shadow-yellow-500/30' };
    case 'red': return { bg: 'bg-brand-red', light: 'bg-red-50', text: 'text-brand-red', border: 'border-red-200', shadow: 'shadow-red-500/30' };
    case 'green': return { bg: 'bg-green-600', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', shadow: 'shadow-green-500/30' };
    default: return { bg: 'bg-slate-600', light: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', shadow: 'shadow-slate-500/30' };
  }
};

// --- SUB-COMPONENT: HANDLES ANIMATION FOR EACH ITEM ---
const RoadmapItem = ({ phase, index }: { phase: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const colors = getColorClasses(phase.color);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Trigger animation when 20% of the item is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible so it doesn't flicker when scrolling up/down
        observer.unobserve(domRef.current!);
      }
    }, { threshold: 0.2 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef}
      // ANIMATION LOGIC:
      // opacity-0 translate-y-20 -> Invisible and pushed down
      // opacity-100 translate-y-0 -> Visible and in place
      className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${isEven ? 'md:flex-row-reverse' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      
      {/* 1. EMPTY SPACE */}
      <div className="flex-1 w-full md:w-1/2"></div>

      {/* 2. CENTER MARKER */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center">
        <div className={`w-12 h-12 rounded-full border-4 border-white ${colors.bg} shadow-lg ${colors.shadow} flex items-center justify-center relative transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          {phase.icon}
        </div>
      </div>

      {/* 3. CONTENT CARD */}
      <div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`relative bg-brand-cream rounded-2xl p-6 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
          
          {/* Decorative Blob */}
          <div className={`absolute top-0 right-0 w-24 h-24 ${colors.light} rounded-bl-[80px] rounded-tr-2xl -z-0 opacity-50`}></div>

          <div className="relative z-10">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${colors.light} ${colors.text}`}>
              {phase.phase}
            </span>
            
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h4>
            
            <ul className="space-y-3">
              {phase.steps.map((step: any, idx: number) => (
                <li key={idx} className="flex items-center">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 ${colors.bg}`}>
                    {step.num}
                  </span>
                  <span className="text-slate-600 text-sm font-medium">
                    {step.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

// --- MAIN COMPONENT ---
const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Service Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Your Journey to Industry.
          </h3>
          <p className="text-lg text-slate-500">From curiosity to career in four distinct phases.</p>
        </div>

        <div className="relative">
          
          {/* CENTRAL LINE */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 rounded-full"></div>
          {/* Colored gradient that fills up (optional, kept simple for now) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-yellow-500 to-green-500 opacity-20"></div>
          
          <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-slate-100 rounded-full"></div>

          {/* REDUCED SPACING HERE: space-y-8 (Mobile) / space-y-12 (Desktop) */}
          <div className="space-y-8 md:space-y-12 pb-12">
            {phases.map((phase, index) => (
              <RoadmapItem key={phase.id} phase={phase} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Roadmap;