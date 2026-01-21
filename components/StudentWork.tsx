import React from 'react';
import { Play } from 'lucide-react'; // Assuming you have lucide-react installed based on Footer.tsx

const StudentWork: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Student Work
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Check out the incredible projects built by our cohort members during the program.
          </p>
        </div>

        {/* --- PROJECT 1: Video Left, Text Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Side (Left) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-100 group">
            {/* Placeholder for Video - Replace the iframe src below with your actual video link */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" 
              title="Project Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Side (Right) */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Autonomous Gearbox Simulation
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              This student utilized FreeCAD to design a fully functional gearbox simulation. 
              By integrating Python scripts, they automated the stress testing scenarios, 
              reducing the calculation time by 40% compared to manual methods.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Built with FreeCAD & Python
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>
                Completed in 4 Weeks
              </li>
            </ul>
          </div>
        </div>

        {/* --- DIVIDER LINE (As per sketch) --- */}
        <div className="w-full h-px bg-slate-200 my-16"></div>

        {/* --- PROJECT 2: Text Left, Video Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side (Left on Desktop, 2nd on Mobile) */}
          {/* We use 'order-2 lg:order-1' to make sure text is on left on desktop, but below video on mobile */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Digital Twin for Assembly Line
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              A comprehensive digital twin project that mimics a real-world assembly line. 
              The project demonstrates real-time data synchronization and predictive maintenance 
              alerts using industry-standard protocols.
            </p>
             <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></span>
                IoT Integration
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Real-time Data Visualization
              </li>
            </ul>
          </div>

          {/* Video Side (Right on Desktop, 1st on Mobile) */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-100">
             <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" 
              title="Project Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentWork;