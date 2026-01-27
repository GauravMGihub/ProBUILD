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

import React from 'react';
import { Target, Lightbulb, Users, Linkedin, Twitter, Mail, Quote } from 'lucide-react';

// --- DUMMY TEAM DATA ---
const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Instructor",
    bio: "Ex-Tesla Design Engineer. Founded ProBUILD to fix the skills gap he saw in fresh graduates.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Williams",
    role: "Head of Automation",
    bio: "10+ years in Industrial IoT. passionate about teaching Python for manufacturing contexts.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "David Chen",
    role: "Curriculum Director",
    bio: "PhD in Mechanical Engineering. Ensures our syllabus matches the latest industry standards.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16 bg-white min-h-screen">
      
      {/* =========================================
          PART 1: THE PHILOSOPHY (MISSION)
      ========================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            About <span className="text-blue-600">ProBUILD</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to reconstruct engineering education. We don't just teach software; 
            we build engineers who are ready for day one.
          </p>
        </div>

        {/* The "Why" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {/* Card 1 */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Gap</h3>
            <p className="text-slate-600 leading-relaxed">
              Universities teach theory. Industries demand application. There is a massive void in between where 
              students know the formulas but not the tools. We exist to fill that void.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Method</h3>
            <p className="text-slate-600 leading-relaxed">
              Project-Based Learning (PBL). No exams, no grades. Just real-world problem statements, 
              industry-standard software, and a GitHub portfolio that proves your skills.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Outcome</h3>
            <p className="text-slate-600 leading-relaxed">
              We produce "Digital Engineers." Professionals who understand not just the mechanical design, 
              but the data, automation, and simulation logic that powers modern factories.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================
          PART 2: MENTORSHIP & TEAM
      ========================================= */}
      <section className="bg-slate-900 py-24 text-white rounded-t-[3rem] relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* MENTORSHIP PHILOSOPHY */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-300 text-sm font-bold uppercase tracking-widest mb-8">
              Mentorship First
            </div>
            
            <Quote className="w-12 h-12 text-slate-600 mx-auto mb-6 opacity-50" />
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              "Information is free. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Guidance is priceless.</span>"
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              At ProBUILD, we believe that you cannot become an expert by watching videos alone. 
              You need feedback. Our mentorship model ensures that every line of code you write 
              and every CAD model you sketch is reviewed by someone who has done it for a living.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full relative z-10 border-4 border-slate-800"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-wide mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Socials */}
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={18} /></a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;