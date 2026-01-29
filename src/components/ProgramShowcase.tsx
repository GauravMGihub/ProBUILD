// import React from 'react';
// import { Check, Download, ArrowRight } from 'lucide-react';

// const ProgramShowcase: React.FC = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-12">
//           {/* Main Heading */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Our Programs
//           </h2>
//           <p className="mt-4 text-lg text-slate-500">Choose the path that fits your career goals.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//           {/* === CARD 1: FOUNDATION NANO DEGREE === */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
//             {/* Image */}
//             <div className="relative h-64 bg-slate-200">
//               <img 
//                 src="/probuild/images/image1.jpg" 
//                 alt="Foundation Course" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
//                 Admissions Open
//               </div>
//             </div>

//             <div className="p-8 flex flex-col flex-grow">
//               <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
//                 Featured Program
//               </div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-4">
//                 FreeCAD <span className="text-yellow-500">Foundation</span> <span className="text-blue-600">Nano Degree</span>
//               </h3>
//               <p className="text-slate-500 mb-6 leading-relaxed">
//                 Master open-source parametric modeling. This course creates the bedrock for Diploma Level I. Built for students who want to move beyond theory.
//               </p>

//               {/* === THIS IS THE NEW SPLIT SECTION === */}
//               {/* We create a grid to put Duration on Left, Prerequisites on Right */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
//                 {/* LEFT SIDE: The Original Checklist */}
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-slate-700 font-medium">
//                     <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     8 Weeks Duration
//                   </li>
//                   <li className="flex items-center text-slate-700 font-medium">
//                      <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     Live Weekend Classes
//                   </li>
//                   <li className="flex items-center text-slate-700 font-medium">
//                      <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     Github Portfolio
//                   </li>
//                 </ul>

//                 {/* RIGHT SIDE: The New Prerequisites List */}
//                 <div>
//                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
//                    <ul className="space-y-3">
//                       <li className="flex items-start text-slate-600 text-sm">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                         No prerequisites required
//                       </li>
//                       <li className="flex items-start text-slate-600 text-sm">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                         Open to all backgrounds
//                       </li>
//                    </ul>
//                 </div>

//               </div>
//               {/* =================================== */}

//               {/* Buttons */}
//               <div className="mt-auto grid grid-cols-2 gap-4">
//               <a 
//               href="probuild/brochures/Foundations.pdf" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Brochure
//             </a>
//                 <a 
//     href="https://forms.gle/Hua2suU1dw2Xfj6d9"  // <--- PASTE YOUR GOOGLE FORM LINK HERE
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
//   >
//     Enroll Now
//     <ArrowRight className="w-4 h-4 ml-2" />
//   </a>
//               </div>
//             </div>
//           </div>

//           {/* === CARD 2: INTERMEDIATE NANO DEGREE === */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
//             {/* Image */}
//             <div className="relative h-64 bg-slate-200">
//               <img 
//                 src="/probuild/images/image2.jpg" 
//                 alt="Intermediate Course" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
//                 Admissions Open
//               </div>
//             </div>

//             <div className="p-8 flex flex-col flex-grow">
//               <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
//                 Advanced Program
//               </div>
//               <h3 className="text-3xl font-bold text-slate-900 mb-4">
//                 FreeCAD <span className="text-orange-500">Intermediate</span> <span className="text-blue-600">Nano Degree</span>
//               </h3>
//               <p className="text-slate-500 mb-6 leading-relaxed">
//                 Take your skills to the professional level. Focus on complex assembly simulations, FEA analysis, and Python scripting for automation.
//               </p>

//               {/* === THIS IS THE NEW SPLIT SECTION === */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
//                 {/* LEFT SIDE */}
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-slate-700 font-medium">
//                     <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     12 Weeks Duration
//                   </li>
//                   <li className="flex items-center text-slate-700 font-medium">
//                      <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     Advanced FEA
//                   </li>
//                   <li className="flex items-center text-slate-700 font-medium">
//                      <div className="bg-green-100 rounded-full p-1 mr-3">
//                       <Check className="w-3 h-3 text-green-600" />
//                     </div>
//                     Python Macros
//                   </li>
//                 </ul>

//                 {/* RIGHT SIDE: Prerequisites */}
//                 <div>
//                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
//                    <ul className="space-y-3">
//                       <li className="flex items-start text-slate-600 text-sm">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                         Foundation Degree
//                       </li>
//                       <li className="flex items-start text-slate-600 text-sm">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
//                         Basic Physics/Math
//                       </li>
//                    </ul>
//                 </div>

//               </div>
//               {/* =================================== */}

//               {/* Buttons */}
//               <div className="mt-auto grid grid-cols-2 gap-4">
//                 <a 
//               href="probuild/brochures/Foundations.pdf" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Brochure
//             </a>
//                    <a 
//     href="https://forms.gle/3VP7YvHvKBQMAjrE7"  // <--- PASTE YOUR GOOGLE FORM LINK HERE
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
//   >
//     Enroll Now
//     <ArrowRight className="w-4 h-4 ml-2" />
//   </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramShowcase;


import React from 'react';
import { Check, Download, ArrowRight } from 'lucide-react';

const ProgramShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-slate-500">Choose the path that fits your career goals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* === CARD 1: FOUNDATION NANO DEGREE === */}
          <div className="bg-brand-cream rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image */}
            <div className="relative h-64 bg-slate-200">
              <img 
                src="/probuild/images/image1.jpg" 
                alt="Foundation Course" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Open
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Featured Program
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FreeCAD <span className="text-yellow-500">Foundation</span> <span className="text-blue-600">Nano Degree</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Master open-source parametric modeling. This course creates the bedrock for Diploma Level I. Built for students who want to move beyond theory.
              </p>

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 font-medium">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    8 Weeks Duration
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Live Weekend Classes
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Github Portfolio
                  </li>
                </ul>

                <div>
                   <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
                   <ul className="space-y-3">
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        No prerequisites required
                      </li>
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Open to all backgrounds
                      </li>
                   </ul>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <a 
                  href="/probuild/brochures/Foundations.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </a>
                <a 
                  href="https://forms.gle/Hua2suU1dw2Xfj6d9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* === CARD 2: INTERMEDIATE NANO DEGREE === */}
          <div className="bg-brand-cream rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image */}
            <div className="relative h-64 bg-slate-200">
              <img 
                src="/probuild/images/image2.jpg" 
                alt="Intermediate Course" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Open
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Advanced Program
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FreeCAD <span className="text-orange-500">Intermediate</span> <span className="text-blue-600">Nano Degree</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Take your skills to the professional level. Focus on complex assembly simulations, FEA analysis, and Python scripting for automation.
              </p>

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 font-medium">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    12 Weeks Duration
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Advanced FEA
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Python Macros
                  </li>
                </ul>

                <div>
                   <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
                   <ul className="space-y-3">
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Foundation Degree
                      </li>
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Basic Physics/Math
                      </li>
                   </ul>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <a 
                  href="/probuild/brochures/Foundations.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </a>
                <a 
                  href="https://forms.gle/3VP7YvHvKBQMAjrE7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* === CARD 3: GMESH (NEW) === */}
          <div className="bg-brand-cream rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image */}
            <div className="relative h-64 bg-slate-200">
              <img 
                src="/probuild/images/image3.jpg" 
                alt="Gmesh Course" 
                className="w-full h-full object-cover"
              />
              {/* Badge: ADMISSIONS CLOSED (Red) */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Closed
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Specialized Module
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Gmesh <span className="text-purple-600">Meshing</span> <span className="text-blue-600">Expert</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Deep dive into high-quality mesh generation for CFD and FEA. Learn parametric scripting for automated mesh workflows.
              </p>

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 font-medium">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    6 Weeks Duration
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Advanced Algorithms
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Scripting API
                  </li>
                </ul>

                <div>
                   <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
                   <ul className="space-y-3">
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Intermediate Degree
                      </li>
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Basic Python
                      </li>
                   </ul>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-400 font-semibold rounded-lg cursor-not-allowed"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </a>
                <button 
                  disabled
                  className="flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* === CARD 4: ELMER (NEW) === */}
          <div className="bg-brand-cream rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image */}
            <div className="relative h-64 bg-slate-200">
              <img 
                src="/probuild/images/image4.jpg" 
                alt="Elmer Course" 
                className="w-full h-full object-cover"
              />
              {/* Badge: ADMISSIONS CLOSED (Red) */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Closed
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Simulation Expert
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Elmer <span className="text-teal-500">Multiphysics</span> <span className="text-blue-600">Solver</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Master open-source multiphysics simulation. Solve complex fluid-structure interactions and electromagnetic problems.
              </p>

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-700 font-medium">
                    <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    10 Weeks Duration
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    Multiphysics
                  </li>
                  <li className="flex items-center text-slate-700 font-medium">
                     <div className="bg-green-100 rounded-full p-1 mr-3">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    HPC Ready
                  </li>
                </ul>

                <div>
                   <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Prerequisites</h4>
                   <ul className="space-y-3">
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Intermediate Degree
                      </li>
                      <li className="flex items-start text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Linear Algebra
                      </li>
                   </ul>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-400 font-semibold rounded-lg cursor-not-allowed"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </a>
                <button 
                  disabled
                  className="flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramShowcase;