// import React from 'react';
// import { Github, FolderGit2, Linkedin } from 'lucide-react'; // Added Linkedin Import

// // 1. ADDED LINKEDIN LINKS TO DATA
// const portfolioData = [
//   {
//     // student: "Rehan Nadaf",
//     role: "CAD Design Intern",
//     //project: "Gearbox Stress Analysis",
//     project: "Rehan Nadaf",
//     description: "A complete repository containing the FreeCAD files, Python automation scripts, and FEA simulation results.",
//     link: "#",
//     linkedin: "https://www.linkedin.com/in/rehan-nadaf?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Add real link here
//     image: "/probuild/images/students/Rehan_Nadaf.png"
//   },
//   {
//     // student: "Anish Patil",
//     role: "CAD Design Intern",
//     // project: "IoT Assembly Line",
//     project: "Anish Patil",
//     description: "Source code for the digital twin dashboard, including the MQTT broker setup and real-time visualization components.",
//     link: "#",
//     linkedin: "https://www.linkedin.com/in/anish-patil-kodarkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     image: "/probuild/images/students/Anish_Patil.png"
//   },
//   {
//     // student: "Krishna Manvatkar",
//     role: "CAD Design Intern",
//     // project: "Parametric Drone Frame",
//     project: "Krushna Manwatkar",
//     description: "Python macros for generating variable-size drone frames automatically based on payload weight inputs.",
//     link: "#",
//     linkedin: "https://www.linkedin.com/in/krushna-manwatkar-598aa5337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     image: "/probuild/images/students/Krushna_Manwatkar.png"
//   }
// ];

// const StudentPortfolios: React.FC = () => {
//   return (
//     <section className="py-24 bg-brand-cream">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Student Portfolios
//           </h2>
//           <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
//             Our students don't just learn—they build. Explore the actual code and designs on GitHub.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          
//           {portfolioData.map((item, index) => (
//             <div key={index} className="relative group">
              
//               {/* --- FLOATING IMAGE --- */}
//               <div className="absolute -top-16 left-8 z-20">
//                 <div className="w-28 h-28 rounded-full border-4 border-slate-50 shadow-lg overflow-hidden bg-white transition-transform duration-500 ease-out group-hover:scale-125">
//                   <img
//                     src={item.image}
//                     // alt={item.student}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* --- BLUE CARD --- */}
//               <div className="bg-brand-azure rounded-3xl p-8 pt-12 h-full relative overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
//                 <Github className="absolute -bottom-6 -right-6 w-48 h-48 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

//                 <div className="relative z-10 flex flex-col h-full">
                  
//                   {/* Icon Top Right */}
//                   <div className="flex justify-end mb-2">
//                     <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
//                       <FolderGit2 className="w-5 h-5 text-white" />
//                     </div>
//                   </div>

//                   {/* Text Content */}
//                   <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
//                     {item.project}
//                   </h3>
//                   {/* <div className="text-blue-200 font-medium mb-4 text-sm uppercase tracking-wide">
//                     by {item.student}
//                   </div> */}
//                   <p className="text-blue-50 leading-relaxed mb-8 text-sm">
//                     {item.description}
//                   </p>

//                   {/* --- 2. NEW BUTTON GRID (Side by Side) --- */}
//                   <div className="mt-auto grid grid-cols-5 gap-3">
                    
//                     {/* Repository Button (Takes up 3/5 width) */}
//                     <a
//                       href={item.link}
//                       className="col-span-3 inline-flex items-center justify-center px-4 py-3 bg-white text-brand-azure font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md group-hover:shadow-lg text-sm"
//                     >
//                       <Github className="w-4 h-4 mr-2" />
//                       Repository
//                     </a>

//                     {/* LinkedIn Button (Takes up 2/5 width) */}
//                     <a
//                       href={item.linkedin}
//                       className="col-span-2 inline-flex items-center justify-center px-4 py-3 bg-brand-azure/50 border border-blue-400/30 text-white font-bold rounded-xl hover:bg-blue-500 hover:border-white/50 transition-colors shadow-md text-sm backdrop-blur-sm"
//                     >
//                       <Linkedin className="w-4 h-4 mr-2" />
//                       Connect
//                     </a>

//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentPortfolios;


import React, { useRef } from 'react';
import { Github, FolderGit2, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA ---
const portfolioData = [
  {
    role: "CAD Design Intern",
    project: "Rehan Nadaf",
    // description: "A complete repository containing the FreeCAD files, Python automation scripts, and FEA simulation results.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/rehan-nadaf?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Rehan_Nadaf.png"
  },
  {
    role: "CAD Design Intern",
    project: "Anish Patil",
    // description: "Source code for the digital twin dashboard, including the MQTT broker setup and real-time visualization components.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/anish-patil-kodarkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Anish_Patil.png"
  },
  {
    role: "CAD Design Intern",
    project: "Krushna Manwatkar",
    // description: "Python macros for generating variable-size drone frames automatically based on payload weight inputs.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/krushna-manwatkar-598aa5337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Krushna_Manwatkar.png"
  },
  // --- DUPLICATES FOR SCROLL DEMO ---
  {
    role: "Mesh Design Intern",
    project: "Aryan Dixit",
    // description: "A complete repository containing the FreeCAD files, Python automation scripts, and FEA simulation results.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/aryan-dixit-vd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Aryan_Dixit.png"
  },
  {
    role: "Mesh Design Intern",
    project: "Aakash Nande",
    // description: "Source code for the digital twin dashboard, including the MQTT broker setup and real-time visualization components.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/nande-aakash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Aakash_Nande.png"
  },
  {
    role: "Frontend Developer Intern",
    project: "Gaurav Mohagaonkar",
    // description: "Python macros for generating variable-size drone frames automatically based on payload weight inputs.",
    link: "#",
    linkedin: "https://www.linkedin.com/in/gaurav-mohagaonkar-b75a75230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/probuild/images/students/Gaurav_Mohagaonkar.png"
  }
];

const StudentPortfolios: React.FC = () => {
  // 1. REF TO CONTROL SCROLLING
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. SCROLL FUNCTION
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; // Scroll by approx one card width
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Student Portfolios
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Our students don't just learn—they build. Explore the actual code and designs on GitHub.
          </p>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative group/carousel">
          
          {/* LEFT ARROW */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 md:-ml-16 z-30 p-3 bg-white text-slate-900 rounded-full shadow-xl border border-slate-100 hover:bg-slate-50 hover:scale-110 transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 md:-mr-16 z-30 p-3 bg-white text-slate-900 rounded-full shadow-xl border border-slate-100 hover:bg-slate-50 hover:scale-110 transition-all duration-300 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 
             --- SCROLL CONTAINER --- 
             - scrollbar-hide: Using CSS to hide bar
             - pb-12: Padding bottom for shadows
             - pt-12: Padding top for floating heads
          */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-12 pt-12 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar in Firefox/IE
          >
            {/* Hide scrollbar in Webkit (Chrome/Safari) */}
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                  display: none;
              }
            `}</style>

            {portfolioData.map((item, index) => (
              <div 
                key={index} 
                // FIXED WIDTHS to maintain ratio (w-[350px])
                className="relative group min-w-[320px] w-[350px] snap-center"
              >
                
                {/* FLOATING IMAGE (Positioned to not cut off) */}
                <div className="absolute -top-10 left-8 z-20">
                  <div className="w-32 h-32 rounded-full border-4 border-brand-cream shadow-lg overflow-hidden bg-white transition-transform duration-500 ease-out group-hover:scale-110">
                    <img 
                      src={item.image} 
                      alt={item.project}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* BLUE CARD */}
                {/* Adjusted padding to fix "long card" look */}
                <div className="bg-brand-azure rounded-3xl p-8 pt-16 h-full relative overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                  
                  {/* Background Watermark */}
                  <Github className="absolute -bottom-6 -right-6 w-40 h-40 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Icon Top Right */}
                    <div className="flex justify-end mb-3">
                      <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <FolderGit2 className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                      {item.project}
                    </h3>
                    <div className="text-blue-100 font-medium mb-3 text-sm uppercase tracking-wide">
                      {item.role}
                    </div>
                    {/* <p className="text-blue-50 leading-relaxed mb-6 text-sm">
                      {item.description}
                    </p> */}

                    {/* Buttons */}
                    <div className="mt-auto grid grid-cols-5 gap-3">
                      <a 
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-3 inline-flex items-center justify-center px-4 py-3 bg-white text-brand-azure font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md group-hover:shadow-lg text-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Repository
                      </a>

                      <a 
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-2 inline-flex items-center justify-center px-4 py-3 bg-brand-azure/50 border border-blue-400/30 text-white font-bold rounded-xl hover:bg-blue-500 hover:border-white/50 transition-colors shadow-md text-sm backdrop-blur-sm"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentPortfolios;