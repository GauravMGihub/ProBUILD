// import React from 'react';

// const AboutUs: React.FC = () => {
//   return (
//     <div className="pt-24 pb-20 bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-5xl font-extrabold text-slate-900 mb-6">About ProBUILD</h1>
//         <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
//           We are dedicated to bridging the gap between academic theory and industrial application.
//           Our mission is to empower the next generation of engineers with real-world skills.
//         </p>
//         {/* Add more content here later */}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from 'react';
// import { Target, Lightbulb, Users, Linkedin, Twitter, Mail, Quote } from 'lucide-react';

// import Mentors from './Mentors';
// // --- DUMMY TEAM DATA ---
// const team = [
//   {
//     name: "Alex Johnson",
//     role: "Founder & Lead Instructor",
//     bio: "Ex-Tesla Design Engineer. Founded ProBUILD to fix the skills gap he saw in fresh graduates.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//   },
//   {
//     name: "Sarah Williams",
//     role: "Head of Automation",
//     bio: "10+ years in Industrial IoT. passionate about teaching Python for manufacturing contexts.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//   },
//   {
//     name: "David Chen",
//     role: "Curriculum Director",
//     bio: "PhD in Mechanical Engineering. Ensures our syllabus matches the latest industry standards.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//   }
// ];

// const AboutUs: React.FC = () => {
//   return (
//     <div className="pt-16 bg-white min-h-screen">
      
//       {/* =========================================
//           PART 1: THE PHILOSOPHY (MISSION)
//       ========================================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
//             About <span className="text-blue-600">ProBUILD</span>
//           </h1>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             We are on a mission to reconstruct engineering education. We don't just teach software;
//             we build engineers who are ready for day one.
//           </p>
//         </div>

//         {/* The "Why" Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
//           {/* Card 1 */}
//           <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
//             <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
//               <Target className="w-7 h-7 text-blue-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">The Gap</h3>
//             <p className="text-slate-600 leading-relaxed">
//               Universities teach theory. Industries demand application. There is a massive void in between where
//               students know the formulas but not the tools. We exist to fill that void.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
//             <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
//               <Lightbulb className="w-7 h-7 text-yellow-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">The Method</h3>
//             <p className="text-slate-600 leading-relaxed">
//               Project-Based Learning (PBL). No exams, no grades. Just real-world problem statements,
//               industry-standard software, and a GitHub portfolio that proves your skills.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
//             <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
//               <Users className="w-7 h-7 text-red-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">The Outcome</h3>
//             <p className="text-slate-600 leading-relaxed">
//               We produce "Digital Engineers." Professionals who understand not just the mechanical design,
//               but the data, automation, and simulation logic that powers modern factories.
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* =========================================
//           PART 2: MENTORSHIP & TEAM
//       ========================================= */}
//       <section className="bg-slate-900 py-24 text-white rounded-t-[3rem] relative overflow-hidden">
        
//         {/* Decorative Background */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
//           {/* MENTORSHIP PHILOSOPHY */}
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-300 text-sm font-bold uppercase tracking-widest mb-8">
//               Mentorship First
//             </div>
            
//             <Quote className="w-12 h-12 text-slate-600 mx-auto mb-6 opacity-50" />
            
//             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
//               "Information is free. <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Guidance is priceless.</span>"
//             </h2>
            
//             <p className="text-lg text-slate-400 leading-relaxed">
//               At ProBUILD, we believe that you cannot become an expert by watching videos alone.
//               You need feedback. Our mentorship model ensures that every line of code you write
//               and every CAD model you sketch is reviewed by someone who has done it for a living.
//             </p>
//           </div>

//           {/* TEAM GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                
//                 {/* Image */}
//                 <div className="relative w-32 h-32 mx-auto mb-6">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover rounded-full relative z-10 border-4 border-slate-800"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="text-center">
//                   <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
//                   <p className="text-blue-400 text-sm font-bold uppercase tracking-wide mb-4">{member.role}</p>
//                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
//                     {member.bio}
//                   </p>
                  
//                   {/* Socials */}
//                   <div className="flex justify-center space-x-4">
//                     <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
//                     <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></a>
//                     <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={18} /></a>
//                   </div>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Target, Lightbulb, Users, Quote, Globe, Trophy, UserCheck } from 'lucide-react';
import Mentors from './Mentors'; // Import your existing Mentors component

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-cream min-h-screen">
      
      {/* =========================================
          1. HERO HEADER
      ========================================= */}
      <div className="text-center px-4 max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Building the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Engineers of Tomorrow.
          </span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          We exist to bridge the massive gap between academic theory and industrial reality. 
          We don't just teach software; we forge careers.
        </p>
      </div>

      {/* =========================================
          2. IMPACT STATS (Fills empty space)
      ========================================= */}
      <div className="bg-slate-900 py-12 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="p-4 border-r border-slate-700 last:border-0">
              <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Years Active</div>
            </div>
            <div className="p-4 border-r border-slate-700 last:border-0">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Students Trained</div>
            </div>
            <div className="p-4 border-r border-slate-700 last:border-0">
              <div className="text-4xl font-bold text-green-400 mb-2">12+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Hiring Partners</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Job Assistance</div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          3. OUR MISSION (The Grid)
      ========================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why We Started</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-brand-cream p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-azure" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Gap</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Universities teach theory. Industries demand application. Students were graduating knowing formulas but struggling to design a simple gear. We exist to fix that.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-cream p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Method</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Project-Based Learning (PBL). No exams, no grades. Just real-world problem statements, industry-standard software, and a GitHub portfolio.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-cream p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Outcome</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We produce "Digital Engineers." Professionals who understand not just mechanical design, but the data, automation, and logic that powers modern factories.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          4. THE ORIGIN STORY (New Section)
      ========================================= */}
      <section className="mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-brand-azure rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* Background Decoration */}
          <Globe className="absolute -bottom-20 -right-20 w-96 h-96 text-brand-azure opacity-20 rotate-12" />

          {/* Text */}
          <div className="flex-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">More than just an EdTech.</h2>
            <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
              <p>
                ProBUILD started in a small workshop with just 5 students and a single goal: 
                to see if we could teach complex CAD automation in under 8 weeks.
              </p>
              <p>
                Today, our alumni are working at companies like Tesla, Tata Motors, and Siemens. 
                We are a community of builders, thinkers, and makers who believe that 
                engineering is a craft, not just a subject.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative z-10 w-full">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
              className="rounded-3xl shadow-2xl border-4 border-blue-400/30 w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* =========================================
          5. MENTORSHIP QUOTE TRANSITION
      ========================================= */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-10">
        <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
          "Information is free. <br />
          <span className="text-brand-azure">Guidance is priceless.</span>"
        </h2>
        <p className="text-lg text-slate-500">
          You cannot become an expert by watching videos alone. You need feedback.
          Meet the industry veterans who will review your code.
        </p>
      </div>

      {/* =========================================
          6. THE REAL MENTORS COMPONENT
      ========================================= */}
      <Mentors />

    </div>
  );
};

export default AboutUs;