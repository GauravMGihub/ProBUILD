import React from 'react';
import { Check, Download, ArrowRight } from 'lucide-react';

const ProgramShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our Programs</h2>
          <p className="mt-4 text-lg text-slate-500">Choose the path that fits your career goals.</p>
        </div>

        {/* GRID CONTAINER: This creates the side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* CARD 1: FOUNDATION NANO DEGREE */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image Section (Top) */}
            <div className="relative h-64 bg-slate-200">
              
              <img 
                src="/probuild/images/image1.jpg" 
                alt="Foundation Course" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Open
              </div>
            </div>

            {/* Content Section (Bottom) */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Featured Program
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FreeCAD Foundation <span className="text-blue-600">Nano Degree</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Master open-source parametric modeling. This course creates the bedrock for Diploma Level I. Built for students who want to move beyond theory.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  8 Weeks Duration
                </li>
                <li className="flex items-center text-slate-700">
                   <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Live Weekend Classes
                </li>
                <li className="flex items-center text-slate-700">
                   <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Github Portfolio Building
                </li>
              </ul>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: INTERMEDIATE NANO DEGREE (New Section) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            
            {/* Image Section (Top) */}
            <div className="relative h-64 bg-slate-200">
              
              <img 
                src="/probuild/images/image2.jpg" 
                alt="Intermediate Course" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                Admissions Open
              </div>
            </div>

            {/* Content Section (Bottom) */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                Advanced Program
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                FreeCAD Intermediate <span className="text-blue-600">Nano Degree</span>
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Take your skills to the professional level. Focus on complex assembly simulations, FEA analysis, and Python scripting for automation.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  12 Weeks Duration
                </li>
                <li className="flex items-center text-slate-700">
                   <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Advanced Simulation (FEA)
                </li>
                <li className="flex items-center text-slate-700">
                   <div className="bg-green-100 rounded-full p-1 mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Python Macro Automation
                </li>
              </ul>

              {/* Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </button>
                <button className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
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