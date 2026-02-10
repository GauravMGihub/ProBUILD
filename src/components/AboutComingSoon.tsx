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
          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Work in Progress</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
          Under Construction <br />
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          The <strong>About Us</strong> page is currently under construction. We are building a space to share our mission, our values, and the team behind the scenes.
        </p>
      </div>
    </section>
  );
};

export default AboutComingSoon;