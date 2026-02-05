import React, { useState } from 'react';
import { Check, Download, ArrowRight, ChevronDown, ChevronUp, Lock } from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
interface Program {
  id: number;
  category: string;
  title: string;
  highlight: string;
  highlightColor: string;
  suffix: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  duration: string;
  live: string;
  portfolio: string;
  prereq1: string;
  prereq2: string;
  brochureLink: string;
  enrollLink: string;
  isOpen: boolean;
}

// --- 2. DATA ARRAY ---
const programs: Program[] = [
  {
    id: 1,
    category: "FEATURED PROGRAM",
    title: "FreeCAD",
    highlight: "Foundation",
    highlightColor: "text-yellow-500",
    suffix: "Nano Degree",
    image: "/images/Foundation.png",
    badge: "Admissions Open",
    badgeColor: "bg-green-500",
    description: "Master open-source parametric modeling. This course creates the bedrock for Diploma Level I. Built for students who want to move beyond theory.",
    duration: "8 Weeks Duration",
    live: "Live Weekend Classes",
    portfolio: "Github Portfolio",
    prereq1: "No prerequisites required",
    prereq2: "Open to all backgrounds",
    brochureLink: "/brochures/Foundations.pdf",
    enrollLink: "https://forms.gle/2c8qh9YyD3mA9L228",
    isOpen: true
  },
  {
    id: 2,
    category: "ADVANCED PROGRAM",
    title: "FreeCAD",
    highlight: "Intermediate",
    highlightColor: "text-brand-red",
    suffix: "Nano Degree",
    image: "/images/Intermediate.png",
    badge: "Admissions Open",
    badgeColor: "bg-green-500",
    description: "Take your skills to the professional level. Focus on complex assembly simulations, FEA analysis, and Python scripting for automation.",
    duration: "12 Weeks Duration",
    live: "Advanced FEA",
    portfolio: "Python Macros",
    prereq1: "Foundation Degree",
    prereq2: "Basic Physics/Math",
    brochureLink: "/brochures/Intermediate.pdf",
    enrollLink: "https://forms.gle/5VVKpNXb8tMDFP9d6",
    isOpen: true
  },
  {
    id: 3,
    category: "SPECIALIZED MODULE",
    title: "Gmsh",
    highlight: "Meshing",
    highlightColor: "text-brand-azure",
    suffix: "Expert",
    image: "/images/Gmsh.png",
    badge: "Admissions Closed",
    badgeColor: "bg-red-500",
    description: "Deep dive into high-quality mesh generation for CFD and FEA. Learn parametric scripting for automated mesh workflows.",
    duration: "6 Weeks Duration",
    live: "Advanced Algorithms",
    portfolio: "Scripting API",
    prereq1: "Intermediate Degree",
    prereq2: "Basic Python",
    brochureLink: "#",
    enrollLink: "#",
    isOpen: false
  },
  {
    id: 4,
    category: "SIMULATION EXPERT",
    title: "Elmer",
    highlight: "Multiphysics",
    highlightColor: "text-green-600",
    suffix: "Solver",
    image: "/images/Elmer.png",
    badge: "Admissions Closed",
    badgeColor: "bg-red-500",
    description: "Master open-source multiphysics simulation. Solve complex fluid-structure interactions and electromagnetic problems.",
    duration: "10 Weeks Duration",
    live: "Multiphysics",
    portfolio: "HPC Ready",
    prereq1: "Intermediate Degree",
    prereq2: "Linear Algebra",
    brochureLink: "#",
    enrollLink: "#",
    isOpen: false
  }
];

// --- 3. PROGRAM CARD COMPONENT ---
const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // 'h-fit' ensures the card only takes up the space it needs
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col hover:shadow-2xl transition-all duration-300 h-fit">
      
      {/* --- ALWAYS VISIBLE PART (Click to Toggle) --- */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="cursor-pointer group"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute top-4 left-4 ${program.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md`}>
            {program.badge}
          </div>
          
          {/* Overlay to hint it's clickable */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>

        {/* Title Section */}
        <div className="p-8 pb-4">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
            {program.category}
          </div>
          <h3 className="text-3xl font-bold text-slate-900">
            {program.title} <span className={program.highlightColor}>{program.highlight}</span> <span className="text-black">{program.suffix}</span>
          </h3>
        </div>
      </div>

      {/* --- EXPANDABLE SECTION --- */}
      {isExpanded ? (
        <div className="px-8 pb-8 pt-0 animate-fade-in">
          
          <p className="text-slate-600 mb-8 leading-relaxed border-t border-slate-100 pt-4">
            {program.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-3">
              <li className="flex items-center text-slate-700 font-medium">
                <div className="bg-green-100 rounded-full p-1 mr-3"><Check className="w-3 h-3 text-green-600" /></div>
                {program.duration}
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                 <div className="bg-green-100 rounded-full p-1 mr-3"><Check className="w-3 h-3 text-green-600" /></div>
                {program.live}
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                 <div className="bg-green-100 rounded-full p-1 mr-3"><Check className="w-3 h-3 text-green-600" /></div>
                {program.portfolio}
              </li>
            </ul>

            <div>
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-azure rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {program.prereq1}
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-azure rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {program.prereq2}
                  </li>
                </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto grid grid-cols-2 gap-4 mb-6">
            {program.isOpen ? (
              <>
                <a 
                  href={program.brochureLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-brand-cream transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </a>
                <a 
                  href={program.enrollLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-brand-azure text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-400/30 cursor-pointer"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </>
            ) : (
              <>
                  <button disabled className="flex items-center justify-center px-4 py-3 border border-slate-100 text-slate-300 font-semibold rounded-lg cursor-not-allowed">
                  <Lock className="w-4 h-4 mr-2" />
                  Brochure
                </button>
                <button disabled className="flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed">
                  Closed
                </button>
              </>
            )}
          </div>

          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            className="w-full flex items-center justify-center text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-slate-600 transition-colors py-2"
          >
            Close Details <ChevronUp className="w-4 h-4 ml-1" />
          </button>

        </div>
      ) : (
        // Collapsed State: "View Details" hint
        <div className="px-8 pb-6 text-center">
           <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
            className="flex items-center mx-auto text-xs text-black font-semibold uppercase tracking-widest hover:underline"
           >
             View Details <ChevronDown className="w-4 h-4 ml-1" />
           </button>
        </div>
      )}
    </div>
  );
};

// --- 4. MAIN SHOWCASE COMPONENT ---
const ProgramShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-slate-500">Choose the path that fits your career goals.</p>
        </div>

        {/* FIX APPLIED HERE: 'items-start' 
          This prevents the cards from stretching to match the height of the row.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramShowcase;