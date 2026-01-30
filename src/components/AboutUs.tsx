import React from 'react';
import { Target, Lightbulb, Users, Quote, Globe, Trophy, UserCheck } from 'lucide-react';


const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 bg-brand-cream min-h-screen">
      
      {/* =========================================
          1. HERO HEADER
      ========================================= */}
      <div className="text-center px-4 max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-8 tracking-tight">
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

    </div>
  );
};

export default AboutUs;