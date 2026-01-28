import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const QuickMentoring: React.FC = () => {
  const [name, setName] = useState('');
  const [pathway, setPathway] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect logic: You can replace this URL with your Google Form or Calendly link
    // We encode the user inputs so they can be passed to the next page if needed
    console.log(`Booking for: ${name}, Interest: ${pathway}`);
    window.open('https://calendly.com/', '_blank'); 
  };

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header Icon */}
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Not sure where to start?
        </h2>
        <p className="text-lg text-slate-500 mb-10">
          Tell us what you are interested in, and we'll help you chart your career path.
        </p>

        {/* --- THE FORM --- */}
        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl max-w-lg mx-auto">
          
          <div className="space-y-6 text-left">
            
            {/* Input 1: Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Name</label>
              <input 
                type="text" 
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white font-medium"
              />
            </div>

            {/* Input 2: Pathway Selector */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Pathway</label>
              <select 
                required
                value={pathway}
                onChange={(e) => setPathway(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white font-medium text-slate-600"
              >
                <option value="" disabled>Select a pathway...</option>
                <option value="engineering">Engineering (CAD/CAE)</option>
                <option value="design">Design (UI/UX/Product)</option>
                <option value="business">Business (Sales/Mgmt)</option>
                <option value="unsure">I'm not sure yet</option>
              </select>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-4 bg-brand-red text-white font-bold text-lg rounded-xl shadow-lg shadow-brand-red/30 hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
            >
              Book a 1:1 Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </form>

      </div>
    </section>
  );
};

export default QuickMentoring;