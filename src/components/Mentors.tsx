import React from 'react';
import { Linkedin, Briefcase } from 'lucide-react';

const mentors = [
  {
    name: "Dr. Robert Fox",
    role: "Senior Product Design Engineer",
    company: "Ex-Ford & Tesla",
    bio: "15+ years of experience in automotive chassis design. Led the structural analysis team for the Model 3 battery pack.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    linkedin: "#"
  },
  {
    name: "Emily Zhang",
    role: "Automation & Robotics Lead",
    company: "Siemens R&D",
    bio: "Specializes in Python-based industrial automation. Expert in creating digital twins for large-scale assembly lines.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedin: "#"
  }
];

const Mentors: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Know Your Mentors
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Learn from industry veterans who have built the systems you use every day.
          </p>
        </div>

        {/* 2-COLUMN GRID (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center border border-slate-200 hover:shadow-2xl transition-all duration-300 group"
            >
              
              {/* --- IMAGE CONTAINER (The Gold Circle Style) --- */}
              <div className="relative mb-6">
                {/*
                   border-4 border-yellow-500 -> This creates the Gold Ring
                   p-1 bg-white -> Creates a small whitespace between photo and ring
                */}
                <div className="w-48 h-48 rounded-full border-[6px] border-yellow-500 p-1 bg-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Optional: Small 'Expert' Badge */}
                <div className="absolute bottom-2 right-2 bg-slate-900 text-white p-2 rounded-full shadow-lg border-2 border-white">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              {/* --- MENTOR DETAILS --- */}
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {mentor.name}
              </h3>
              
              <div className="text-yellow-600 font-bold uppercase tracking-wide text-sm mb-4">
                {mentor.company}
              </div>

              <div className="h-px w-16 bg-slate-300 mb-4"></div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {mentor.bio}
              </p>

              {/* LinkedIn Button */}
              <a
                href={mentor.linkedin}
                className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                View Profile
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Mentors;

// import React from 'react';
// import { Linkedin } from 'lucide-react';

// const mentors = [
//   {
//     name: "Dr. Robert Fox",
//     role: "Senior Product Design Engineer",
//     company: "Ex-Ford & Tesla",
//     bio: "15+ years of experience in automotive chassis design. Led the structural analysis team for the Model 3 battery pack.",
//     // NOTE: For the effect to work, these images ideally need transparent backgrounds.
//     // I am using a sample here, but it might look 'boxy' until you use a real transparent PNG.
//     image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png", 
//     linkedin: "#"
//   },
//   {
//     name: "Emily Zhang",
//     role: "Automation & Robotics Lead",
//     company: "Siemens R&D",
//     bio: "Specializes in Python-based industrial automation. Expert in creating digital twins for large-scale assembly lines.",
//     // Using another transparent sample
//     image: "https://www.pngarts.com/files/3/Business-Woman-PNG-Free-Download.png",
//     linkedin: "#"
//   }
// ];

// const Mentors: React.FC = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-20">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//             Know Your Mentors
//           </h2>
//           <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
//             Learn from industry veterans who have built the systems you use every day.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
//           {mentors.map((mentor, index) => (
//             <div 
//               key={index} 
//               // Added 'mt-12' to push the card down so the head has space to pop out
//               className="bg-slate-50 mt-12 rounded-3xl p-8 pt-0 flex flex-col items-center text-center border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
              
//               {/* --- THE POP-OUT IMAGE CONTAINER --- */}
//               <div className="relative w-56 h-56 -mt-16 mb-6">
                
//                 {/* 1. THE GOLD RING (Background) */}
//                 <div className="absolute bottom-0 left-0 w-full h-full rounded-full border-[6px] border-yellow-500 bg-white shadow-md z-0"></div>
                
//                 {/* 2. THE PERSON (Foreground - Transparent PNG) */}
//                 {/* 
//                    h-[115%] -> Makes the image taller than the circle so the head pops out
//                    bottom-0 -> Anchors the waist to the bottom of the circle
//                    z-10 -> Ensures the person sits ON TOP of the gold border
//                 */}
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[115%] z-10 flex items-end justify-center rounded-b-full overflow-hidden">
//                    <img 
//                     src={mentor.image} 
//                     alt={mentor.name} 
//                     className="w-[90%] h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//               </div>

//               {/* Mentor Details */}
//               <h3 className="text-2xl font-bold text-slate-900 mb-1">
//                 {mentor.name}
//               </h3>
              
//               <div className="text-yellow-600 font-bold uppercase tracking-wide text-sm mb-4">
//                 {mentor.company}
//               </div>

//               <div className="h-px w-16 bg-slate-300 mb-4"></div>

//               <p className="text-slate-600 leading-relaxed mb-6">
//                 {mentor.bio}
//               </p>

//               <a 
//                 href={mentor.linkedin}
//                 className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors"
//               >
//                 <Linkedin className="w-5 h-5 mr-2" />
//                 View Profile
//               </a>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mentors;