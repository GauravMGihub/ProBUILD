import React from 'react';
import { ArrowRight } from 'lucide-react';

// Cohort data for the two ongoing programs
const cohorts = [
  {
    id: 1,
    title: "FreeCAD Foundation",
    subtitle: "Nano Degree",
    image: "/images/Foundation.png",
    duration: "8 Weeks",
    status: "Ongoing",
    formLink: "https://forms.gle/2c8qh9YyD3mA9L228"
  },
  {
    id: 2,
    title: "FreeCAD Intermediate",
    subtitle: "Nano Degree",
    image: "/images/Intermediate.png",
    duration: "12 Weeks",
    status: "Ongoing",
    formLink: "https://forms.gle/5VVKpNXb8tMDFP9d6"
  }
];

const CohortPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-brand-cream py-4 md:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
            Now Accepting Applications
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Ongoing Cohorts
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Quick registration for our current programs. Choose your pathway and start your journey today.
          </p>
        </div>

        {/* Cohort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cohorts.map((cohort) => (
            <div 
              key={cohort.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cohort.image} 
                  alt={cohort.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  {cohort.status}
                </div>
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                  {cohort.duration}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {cohort.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  {cohort.subtitle}
                </p>

                {/* Apply Button - Red Color */}
                <a
                  href={cohort.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); window.open(cohort.formLink, '_blank'); }}
                  className="w-full flex items-center justify-center px-6 py-3.5 bg-brand-red text-white font-bold rounded-xl hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-400/30 group-hover:shadow-xl group-hover:shadow-red-400/40"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-4">
            Want to explore all our programs in detail?
          </p>
          <a 
            href="/cad-pathway"
            className="inline-flex items-center text-brand-azure font-semibold hover:underline"
          >
            View All Pathways
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CohortPage;
