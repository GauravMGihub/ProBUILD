import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Wrench, Rocket, Briefcase } from 'lucide-react';

// --- DATA ---
const phases = [
  {
    id: 1,
    phase: "PHASE I",
    title: "Learn",
    color: "blue",
    icon: <BookOpen className="w-8 h-8 text-white" />, // Increased Icon Size
    image: "/images/sample/Learn.png", // Added Image
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
    icon: <Wrench className="w-8 h-8 text-white" />,
    image: "/images/sample/Build.png",
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
    icon: <Rocket className="w-8 h-8 text-white" />,
    image: "/images/sample/Create.png",
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
    icon: <Briefcase className="w-8 h-8 text-white" />,
    image: "/images/sample/Gain.png",
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

const RoadmapItem = ({ phase, index }: { phase: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const colors = getColorClasses(phase.color);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
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
      // CHANGED: Removed 'flex-row' logic for mobile. It is now ALWAYS 'flex-col' on mobile.
      // On desktop (md:), it switches to row/row-reverse.
      className={`relative flex flex-col md:flex-row items-center transition-all duration-1000 ease-out 
        ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
      `}
    >
      
      {/* 1. IMAGE SIDE */}
      {/* Mobile: Full Width, Bottom Margin. Desktop: 1/2 Width, Side Padding */}
      <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
         <div className="w-full h-56 md:h-64 overflow-hidden rounded-3xl shadow-lg border-4 border-white mx-auto relative z-10">
            <img 
                src={phase.image} 
                alt={phase.title} 
                className="w-full h-full object-cover" 
            />
            {/* Optional: Add the Icon Overlay on the Image for Mobile Style */}
            <div className={`absolute top-4 left-4 w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center text-white md:hidden shadow-lg`}>
               {phase.icon}
            </div>
         </div>
      </div>

      {/* 2. CENTER MARKER (Desktop Only) */}
      {/* Hidden on mobile because the line is behind the cards now */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center">
        <div className={`w-16 h-16 rounded-full border-4 border-white ${colors.bg} shadow-lg ${colors.shadow} flex items-center justify-center relative transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          {phase.icon}
        </div>
      </div>

      {/* 3. CONTENT CARD (Your styled version) */}
      {/* <div className={`flex-1 w-full md:w-1/2 pl-24  md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}> */}
        
        {/* Applied your background color logic here */}
        {/* <div className={`relative rounded-2xl p-6 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 group ${colors.light}`}>
            
            <div className={`absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-bl-[80px] rounded-tr-2xl -z-0`}></div>

            <div className="relative z-10"> */}
            {/* PHASE TAG */}
            {/* <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-3 ${colors.light} ${colors.text} bg-white/60`}>
                {phase.phase}
            </span> */}
            
            {/* TITLE */}
            {/* <h4 className="text-[33px] font-semibold text-slate-900 mb-4 leading-tight font-sans">
                {phase.title}
            </h4> */}
            
            {/* STEPS */}
            {/* <ul className="space-y-3">
                {phase.steps.map((step: any, idx: number) => (
                <li key={idx} className="flex items-center">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 ${colors.bg}`}>
                    {step.num}
                    </span>
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
}; */}
      
      {/* 3. CONTENT CARD (Text Side) */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`relative rounded-3xl p-8 border ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 group ${colors.light}`}>
            
            <div className="relative z-10">
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4 ${colors.light} ${colors.text} bg-white/60`}>
                  {phase.phase}
              </span>
              <h4 className="text-3xl  text-slate-900 mb-3 font-sans">
                  {phase.title}
              </h4>
              <ul className="space-y-4">
                  {phase.steps.map((step: any, idx: number) => (
                  <li key={idx} className="flex items-center">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 ${colors.bg}`}>
                      {step.num}
                      </span>
                      <span className="text-slate-700 text-sm font-medium">
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
          <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">
            Your Journey
          </h3>
          <p className="text-lg text-slate-500">From curiosity to career in four distinct phases.</p>
        </div>

        <div className="relative">
          
          {/* CENTRAL LINE (Desktop Only) */}
  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 rounded-full"></div>
  
  {/* MOBILE LINE (Left Side) - OPTIONAL */}
  {/* If you want a line connecting the cards on mobile, use this. 
      But for "Stacked" layout, removing the line often looks cleaner. 
      Try commenting this out if it still looks messy. 
  */}
          <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-slate-200 rounded-full -z-10"></div>
          
          <div className="space-y-16 pb-12"> {/* Increased spacing for mobile stack */}
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