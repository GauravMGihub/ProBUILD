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
    case 'blue': return { bg: 'bg-brand-azure', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', shadow: 'shadow-blue-500/30' };
    case 'yellow': return { bg: 'bg-brand-yellow', light: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', shadow: 'shadow-yellow-500/30' };
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

      {/* 3. CONTENT CARD
      <div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`relative ${colors.light} rounded-2xl p-6 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
          
          {/* Decorative Blob */}
          {/* <div className={`absolute top-0 right-0 w-24 h-24 bg-white/40 ${colors.light} rounded-bl-[80px] rounded-tr-2xl -z-0 opacity-50`}></div>

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
      </div> */} 

      {/* 3. CONTENT CARD */}
<div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
  {/* Added ${colors.light} for the background color */}
  <div className={`relative rounded-2xl p-6 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 group ${colors.light}`}>
    
    
    <div className={`absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-bl-[80px] rounded-tr-2xl -z-0`}></div>

    <div className="relative z-10">
      {/* PHASE TAG */}
      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-3 ${colors.light} ${colors.text} bg-white/60`}>
        {phase.phase}
      </span>
      
      {/* TITLE: Inter 33px Semibold */}
      <h4 className="text-[33px] font-semibold text-slate-900 mb-4 leading-tight font-sans">
        {phase.title}
      </h4>
      
      {/* STEPS: Inter Semibold */}
      <ul className="space-y-3">
        {phase.steps.map((step: any, idx: number) => (
          <li key={idx} className="flex items-center">
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 ${colors.bg}`}>
              {step.num}
            </span>
            {/* Steps text set to Semibold */}
            <span className="text-slate-700 text-[15px] font-semibold font-sans">
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
          <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
            Your Journey
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