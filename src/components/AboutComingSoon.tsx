import React from 'react';
import { Rocket, Star, Sparkles, ArrowRight } from 'lucide-react';

const AboutComingSoon: React.FC = () => {
  return (
    <section className="relative py-32 bg-brand-cream overflow-hidden min-h-[60vh] flex items-center justify-center">
      
      {/* --- BACKGROUND DECORATION (The "Fancy" Part) --- */}
      {/* Blue Blob */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
      {/* Yellow Blob */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-[100px]" style={{ animationDuration: '4s' }}></div>

      {/* --- MAIN CONTENT CARD --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-100 shadow-md mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
          <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Work in Progress</span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          We're Crafting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">
            Our Story.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          The <strong>About Us</strong> page is currently under construction. We are building a space to share our mission, our values, and the team behind the scenes.
        </p>

        {/* Notify Form */}
        <div className="max-w-md mx-auto relative group">
          {/* Glow effect behind the form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative flex bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
            <input 
              type="email" 
              placeholder="Enter your email for updates..." 
              className="flex-1 px-4 py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            <button className="flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg">
              Notify Me
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-400 font-medium uppercase tracking-wide">
            No spam. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutComingSoon;