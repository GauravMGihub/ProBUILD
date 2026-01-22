// import React from 'react';
// import { Linkedin } from 'lucide-react';

// const mentors = [
//   {
//     name: "Dr. Robert Fox",
//     role: "Senior Product Design Engineer",
//     company: "Ex-Ford & Tesla",
//     bio: "15+ years of experience in automotive chassis design. Led the structural analysis team for the Model 3 battery pack.",
//     image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png",
//     linkedin: "#"
//   },
//   {
//     name: "Emily Zhang",
//     role: "Automation & Robotics Lead",
//     company: "Siemens R&D",
//     bio: "Specializes in Python-based industrial automation. Expert in creating digital twins for large-scale assembly lines.",
//     image: "https://www.pngarts.com/files/3/Business-Woman-PNG-Free-Download.png",
//     linkedin: "#"
//   }
// ];

// const Mentors: React.FC = () => {
//   return (
//     // 1. SECTION BACKGROUND: Changed from bg-white to a Dark Radial Gradient
//     <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-20">
//           {/* Changed text color to White */}
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
//             Know Your Mentors
//           </h2>
//           {/* Changed text color to Light Blue/Gray */}
//           <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
//             Learn from industry veterans who have built the systems you use every day.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
//           {mentors.map((mentor, index) => (
//             <div
//               key={index}
//               // 2. CARD STYLE: Dark background (slate-800), Dark border (slate-700)
//               className="bg-slate-800 mt-12 rounded-3xl p-8 pt-0 flex flex-col items-center text-center border border-slate-700 shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group"
//             >
              
//               {/* --- THE POP-OUT IMAGE CONTAINER --- */}
//               <div className="relative w-56 h-56 -mt-16 mb-6">
                
//                 {/* 3. GOLD RING BACKGROUND: Must match the card color (bg-slate-800) now! */}
//                 <div className="absolute bottom-0 left-0 w-full h-full rounded-full border-[6px] border-yellow-500 bg-slate-800 shadow-lg z-0"></div>
                
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[115%] z-10 flex items-end justify-center rounded-b-full overflow-hidden">
//                    <img
//                     src={mentor.image}
//                     alt={mentor.name}
//                     className="w-[90%] h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//               </div>

//               {/* DETAILS */}
//               <h3 className="text-2xl font-bold text-white mb-1">
//                 {mentor.name}
//               </h3>
              
//               {/* Made the yellow pop more on dark background (yellow-400) */}
//               <div className="text-yellow-400 font-bold uppercase tracking-wide text-sm mb-4">
//                 {mentor.company}
//               </div>

//               <div className="h-px w-16 bg-slate-600 mb-4"></div>

//               <p className="text-slate-300 leading-relaxed mb-6">
//                 {mentor.bio}
//               </p>

//               <a
//                 href={mentor.linkedin}
//                 className="inline-flex items-center text-white font-semibold hover:text-blue-400 transition-colors"
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
    // 1. SECTION BACKGROUND: Dark Radial Gradient
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Know Your Mentors
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Learn from industry veterans who have built the systems you use every day.
          </p>
        </div>

        {/* 2-COLUMN GRID (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {mentors.map((mentor, index) => (
            <div
              key={index}
              // 2. CARD STYLE: Dark background (slate-800), Dark border
              className="bg-slate-800 rounded-3xl p-8 flex flex-col items-center text-center border border-slate-700 hover:shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 group"
            >
              
              {/* --- IMAGE CONTAINER (Original Style) --- */}
              <div className="relative mb-6">
                {/*
                   border-yellow-500 -> Gold Ring
                   bg-slate-800 -> Matches the dark card background
                */}
                <div className="w-48 h-48 rounded-full border-[6px] border-yellow-500 p-1 bg-slate-800 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                {/* Small 'Expert' Badge */}
                <div className="absolute bottom-2 right-2 bg-slate-900 text-white p-2 rounded-full shadow-lg border-2 border-slate-700">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              {/* --- MENTOR DETAILS --- */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {mentor.name}
              </h3>
              
              <div className="text-yellow-400 font-bold uppercase tracking-wide text-sm mb-4">
                {mentor.company}
              </div>

              <div className="h-px w-16 bg-slate-600 mb-4"></div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {mentor.bio}
              </p>

              {/* LinkedIn Button */}
              <a
                href={mentor.linkedin}
                className="inline-flex items-center text-white font-semibold hover:text-blue-400 transition-colors"
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