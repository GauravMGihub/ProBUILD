// import React from 'react';
// import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';

// // Sample data - you can change these names and links later
// const portfolioData = [
//   {
//     student: "Alex M.",
//     role: "Mechanical Design Intern",
//     project: "Gearbox Stress Analysis",
//     description: "A complete repository containing the FreeCAD files, Python automation scripts, and FEA simulation results.",
//     link: "https://github.com/gkrishnaks/stressanalysis"
//   },
//   {
//     student: "Sarah K.",
//     role: "Digital Twin Analyst",
//     project: "IoT Assembly Line",
//     description: "Source code for the digital twin dashboard, including the MQTT broker setup and real-time visualization components.",
//     link: "https://github.com/topics/industrial-iot"
//   },
//   {
//     student: "Rahul P.",
//     role: "Automation Engineer",
//     project: "Parametric Drone Frame",
//     description: "Python macros for generating variable-size drone frames automatically based on payload weight inputs.",
//     link: "https://github.com/vsergeev/3d-parametric-whoop"
//   }
// ];

// const StudentPortfolios: React.FC = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Student Portfolios
//           </h2>
//           <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
//             Our students don't just learn—they build. Explore the actual code and designs on GitHub.
//           </p>
//         </div>

//         {/* 3-Column Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
//           {portfolioData.map((item, index) => (
//             /* THE BLUE CARD TEMPLATE */
//             <div
//               key={index}
//               className="relative bg-blue-600 rounded-3xl p-8 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl group"
//             >
              
//               {/* Background Watermark (The large faint cat) */}
//               <Github className="absolute -bottom-6 -right-6 w-48 h-48 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col h-full">
                
//                 {/* Icon Box */}
//                 <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
//                   <FolderGit2 className="w-7 h-7 text-white" />
//                 </div>

//                 {/* Text Content */}
//                 <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
//                   {item.project}
//                 </h3>
//                 <div className="text-blue-100 font-medium mb-4 text-sm uppercase tracking-wide">
//                   by {item.student}
//                 </div>
                
//                 <p className="text-blue-50 leading-relaxed mb-8">
//                   {item.description}
//                 </p>

//                 {/* Button at bottom */}
//                 <div className="mt-auto">
//                   <a
//                     href={item.link}
//                     className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors w-full group-hover:shadow-lg"
//                   >
//                     View Repository
//                     <Github className="w-5 h-5 ml-2" />
//                   </a>
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

import React from 'react';
import { Github, FolderGit2 } from 'lucide-react';

// Added 'image' to the data
const portfolioData = [
  {
    student: "Alex M.",
    role: "Mechanical Design Intern",
    project: "Gearbox Stress Analysis",
    description: "A complete repository containing the FreeCAD files, Python automation scripts, and FEA simulation results.",
    link: "https://github.com/gkrishnaks/stressanalysis",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    student: "Sarah K.",
    role: "Digital Twin Analyst",
    project: "IoT Assembly Line",
    description: "Source code for the digital twin dashboard, including the MQTT broker setup and real-time visualization components.",
    link: "https://github.com/topics/industrial-iot",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    student: "Rahul P.",
    role: "Automation Engineer",
    project: "Parametric Drone Frame",
    description: "Python macros for generating variable-size drone frames automatically based on payload weight inputs.",
    link: "https://github.com/vsergeev/3d-parametric-whoop",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  }
];

const StudentPortfolios: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Student Portfolios
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Our students don't just learn—they build. Explore the actual code and designs on GitHub.
          </p>
        </div>

        {/* Grid Container - Added 'mt-8' to give space for the floating heads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          
          {portfolioData.map((item, index) => (
            /* 1. OUTER WRAPPER (Relative, No overflow hidden) */
            <div key={index} className="relative group">
              
              {/* --- 2. THE FLOATING IMAGE (Top Left) --- */}
              {/* -top-10 pulls it up, left-8 pushes it in from the left */}
              <div className="absolute -top-10 left-8 z-20">
                <div className="w-20 h-20 rounded-full border-4 border-slate-50 shadow-lg overflow-hidden bg-white transition-transform duration-500 group-hover:scale-125">
                  <img 
                    src={item.image} 
                    alt={item.student} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              {/* --- 3. THE BLUE CARD (Inner, Overflow Hidden) --- */}
              <div className="bg-blue-600 rounded-3xl p-8 pt-12 h-full relative overflow-hidden shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                
                {/* Background Watermark */}
                <Github className="absolute -bottom-6 -right-6 w-48 h-48 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Small icon moved to right since face is on left */}
                  <div className="flex justify-end mb-2">
                    <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FolderGit2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                    {item.project}
                  </h3>
                  
                  <div className="text-blue-200 font-medium mb-4 text-sm uppercase tracking-wide">
                    by {item.student}
                  </div>
                  
                  <p className="text-blue-50 leading-relaxed mb-8 text-sm">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <a 
                      href={item.link} 
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors w-full shadow-md group-hover:shadow-lg"
                    >
                      View Repository
                      <Github className="w-5 h-5 ml-2" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StudentPortfolios;