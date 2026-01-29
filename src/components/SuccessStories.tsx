import React from 'react';
import { Building2, Quote } from 'lucide-react'; // Changed Briefcase to Quote

const students = [
  {
    name: "Rehan Nadaf",
    image: "/probuild/images/students/Rehan_Nadaf.png",
    // companyName: "Tesla",
    // companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    role: "CAD Design Intern",
    description: "Designed parametric battery casing components using CATIA. Reduced tolerance errors by 15%."
  },
  {
    name: "Anish Patil",
    image: "/probuild/images/students/Anish_Patil.png",
    // companyName: "Siemens",
    // companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
    role: "Digital Twin Analyst",
    description: "Built a functional digital twin of the assembly line to predict maintenance cycles using Python."
  },
  {
    name: "Pranoti Kulkarni",
    image: "/probuild/images/mentors/Pranoti_Kulkarni.png",
    // companyName: "Tata Motors",
    // companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    role: "Automation Engineer",
    description: "Automated the chassis stress-testing workflow, cutting simulation time from 2 days to 4 hours."
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Success of Cohort 2025
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            From our bootcamp directly to the industry's top engineering firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          
          {students.map((student, index) => (
            <div 
              key={index} 
              className="relative bg-brand-cream rounded-2xl shadow-xl border border-slate-100 p-8 pt-24 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 group"
            >
              
              {/* --- FLOATING PROFILE IMAGE --- */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full p-1.5 bg-brand-cream shadow-lg transition-transform duration-500 ease-out group-hover:scale-110">
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {student.name}
              </h3>
              
              {/* Company Logo Box
              <div className="my-5 bg-slate-50 border border-slate-200 px-6 py-3 rounded-lg flex items-center justify-center min-w-[140px]">
                {student.companyLogo ? (
                   <img src={student.companyLogo} alt={student.companyName} className="h-6 object-contain opacity-80" />
                ) : (
                   <div className="flex items-center text-slate-400 font-bold">
                      <Building2 className="w-4 h-4 mr-2" />
                      {student.companyName}
                   </div>
                )}
              </div> */}

              {/* Position */}
              <div className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-6">
                {student.role}
              </div>

              {/* --- NEW QUOTE SECTION --- */}
              <div className="relative w-full">
                {/* 1. The Visual Icon */}
                
                
                {/* 2. The Text in Quotes & Italics */}
                {/* 'italic' makes it slanted, 'text-slate-600' darkens it slightly for readability */}
                <p className="text-slate-600 italic leading-relaxed text-sm font-medium">
                  "{student.description}"
                </p>
              </div>

              <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;