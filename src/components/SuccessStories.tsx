// import React from 'react';
// import { Quote } from 'lucide-react';

// const SuccessStories: React.FC = () => {
//   const stories = [
//     {
//       name: "Alex M.",
//       role: "Intern at AutoTech",
//       quote: "The portfolio I built with ProBUILD was the main topic during my internship interview. They didn't care about my grades, they cared about the gearbox simulation I built.",
//       image: "https://picsum.photos/100/100?random=10"
//     },
//     {
//       name: "Sarah K.",
//       role: "Digital Twin Analyst",
//       quote: "Mentorship changed everything. I was stuck on theory, but my mentor showed me how these tools are actually used in a factory setting.",
//       image: "https://picsum.photos/100/100?random=11"
//     },
//     {
//       name: "Rahul P.",
//       role: "Mechanical Design Intern",
//       quote: "The roadmap is clear. I went from knowing nothing about FreeCAD to designing complex assemblies in 8 weeks.",
//       image: "https://picsum.photos/100/100?random=12"
//     }
//   ];

//   return (
//     <section id="stories" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Success of Cohort 2025</h2>
//           <p className="mt-4 text-lg text-slate-600">Don't just take our word for it.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stories.map((story, i) => (
//             <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative hover:-translate-y-2 transition-transform duration-300">
//               <Quote className="absolute top-8 right-8 text-gray-100 w-12 h-12" />
//               <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{story.quote}"</p>
              
//               <div className="mt-auto flex items-center">
//                 <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-blue" />
//                 <div>
//                   <h4 className="font-bold text-slate-900">{story.name}</h4>
//                   <p className="text-xs text-brand-blue font-bold uppercase tracking-wide">{story.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;

// import React from 'react';
// import { Building2, Briefcase } from 'lucide-react';

// const students = [
//   {
//     name: "Alex M.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
//     companyName: "Tesla",
//     companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
//     role: "CAD Design Intern",
//     description: "Designed parametric battery casing components using CATIA. Reduced tolerance errors by 15%."
//   },
//   {
//     name: "Sarah K.",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
//     companyName: "Siemens",
//     companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
//     role: "Digital Twin Analyst",
//     description: "Built a functional digital twin of the assembly line to predict maintenance cycles using Python."
//   },
//   {
//     name: "Rahul P.",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
//     companyName: "Tata Motors",
//     companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
//     role: "Automation Engineer",
//     description: "Automated the chassis stress-testing workflow, cutting simulation time from 2 days to 4 hours."
//   }
// ];

// const SuccessStories: React.FC = () => {
//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//             Success of Cohort 2025
//           </h2>
//           <p className="mt-4 text-lg text-slate-500">
//             From our bootcamp directly to the industry's top engineering firms.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          
//           {students.map((student, index) => (
//             <div 
//               key={index} 
//               /* CHANGE 1: Added 'group' here so the card knows when it's being hovered */
//               className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 pt-24 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 group"
//             >
              
//               {/* --- THE FLOATING PROFILE IMAGE --- */}
//               <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                
//                 {/* CHANGE 2: Added transition and scale animation here */}
//                 {/* group-hover:scale-110 makes it grow 10% (125 might be too big for this layout, but try it if you want!) */}
//                 <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-lg transition-transform duration-500 ease-out group-hover:scale-110">
//                   <img 
//                     src={student.image} 
//                     alt={student.name} 
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-1">
//                 {student.name}
//               </h3>
              
//               <div className="my-5 bg-slate-50 border border-slate-200 px-6 py-3 rounded-lg flex items-center justify-center min-w-[140px]">
//                 {student.companyLogo ? (
//                    <img src={student.companyLogo} alt={student.companyName} className="h-6 object-contain opacity-80" />
//                 ) : (
//                    <div className="flex items-center text-slate-400 font-bold">
//                       <Building2 className="w-4 h-4 mr-2" />
//                       {student.companyName}
//                    </div>
//                 )}
//               </div>

//               <div className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-4">
//                 {student.role}
//               </div>

//               <div className="relative w-full">
//                 <div className="absolute top-0 left-0 text-slate-100 -z-10">
//                    <Briefcase className="w-16 h-16 opacity-20" />
//                 </div>
                
//                 <p className="text-slate-500 leading-relaxed text-sm">
//                   {student.description}
//                 </p>
//               </div>

//               <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full"></div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;

import React from 'react';
import { Building2, Quote } from 'lucide-react'; // Changed Briefcase to Quote

const students = [
  {
    name: "Alex M.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    companyName: "Tesla",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    role: "CAD Design Intern",
    description: "Designed parametric battery casing components using CATIA. Reduced tolerance errors by 15%."
  },
  {
    name: "Sarah K.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    companyName: "Siemens",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
    role: "Digital Twin Analyst",
    description: "Built a functional digital twin of the assembly line to predict maintenance cycles using Python."
  },
  {
    name: "Rahul P.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    companyName: "Tata Motors",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    role: "Automation Engineer",
    description: "Automated the chassis stress-testing workflow, cutting simulation time from 2 days to 4 hours."
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Success of Cohort 2025
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            From our bootcamp directly to the industry's top engineering firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          
          {students.map((student, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 pt-24 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 group"
            >
              
              {/* --- FLOATING PROFILE IMAGE --- */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-lg transition-transform duration-500 ease-out group-hover:scale-110">
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {student.name}
              </h3>
              
              {/* Company Logo Box */}
              <div className="my-5 bg-slate-50 border border-slate-200 px-6 py-3 rounded-lg flex items-center justify-center min-w-[140px]">
                {student.companyLogo ? (
                   <img src={student.companyLogo} alt={student.companyName} className="h-6 object-contain opacity-80" />
                ) : (
                   <div className="flex items-center text-slate-400 font-bold">
                      <Building2 className="w-4 h-4 mr-2" />
                      {student.companyName}
                   </div>
                )}
              </div>

              {/* Position */}
              <div className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-6">
                {student.role}
              </div>

              {/* --- NEW QUOTE SECTION --- */}
              <div className="relative w-full">
                {/* 1. The Visual Icon */}
                
                
                {/* 2. The Text in Quotes & Italics */}
                {/* 'italic' makes it slanted, 'text-slate-600' darkens it slightly for readability */}
                <p className="text-slate-600 italic leading-relaxed text-sm font-medium">
                  "{student.description}"
                </p>
              </div>

              <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;