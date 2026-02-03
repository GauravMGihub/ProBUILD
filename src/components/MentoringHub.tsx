import React from 'react';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const MentoringHub: React.FC = () => {
  // REPLACE THIS WITH YOUR ACTUAL LINK
  const bookingLink = "https://calendly.com/YOUR_USERNAME/15min"; 

  return (
    <section className="py-24 bg-brand-cream from-slate-800 via-slate-900 to-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-900/20">
            <MessageCircle className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Not sure where to start? Let's Talk.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choosing a career path in digital engineering can be confusing. We offer free guidance 
            sessions to help you decide if ProBUILD is right for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* THE SINGLE CARD */}
          <div className="group bg-brand-cream rounded-[2rem] p-10 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 text-center">
            
            {/* Icon */}
            <div className="w-16 h-16 bg-brand-azure rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Book a 1:1 Session
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto">
              15-minute Zoom call with a lead mentor. Discuss your current skills, 
              career goals, and get a personalized roadmap.
            </p>

            {/* --- UPDATED BUTTON SECTION --- */}
            <a 
              href={bookingLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-yellow font-bold text-lg hover:text-yellow-300 transition-colors border-b-2 border-transparent hover:border-yellow-300 pb-1 cursor-pointer"
            >
              Schedule Free Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentoringHub;