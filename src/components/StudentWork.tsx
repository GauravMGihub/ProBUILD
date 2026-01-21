import React from 'react';

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
          
          {/* Video Side (Left) - UPDATED FOR LOCAL VIDEO */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-900 group">
            <video 
              className="w-full h-full object-cover"
              controls 
              muted // Auto-mute, remove if you want sound immediately
              loop  // Optional: loops the video
            >
              
              <source src="/probuild/videos/project1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Side (Right) */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Autonomous Gearbox Simulation
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              This student utilized FreeCAD to design a fully functional gearbox simulation. 
              By integrating Python scripts, they automated the stress testing scenarios.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Built with FreeCAD & Python
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Completed in 4 Weeks
              </li>
            </ul>
          </div>
        </div>

        {/* --- DIVIDER LINE --- */}
        <div className="w-full h-px bg-slate-200 my-16"></div>

        {/* --- PROJECT 2: Text Left, Video Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side (Left on Desktop) */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Digital Twin for Assembly Line
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              A comprehensive digital twin project that mimics a real-world assembly line. 
              The project demonstrates real-time data synchronization.
            </p>
             <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                IoT Integration
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Real-time Data Visualization
              </li>
            </ul>
          </div>

          {/* Video Side (Right on Desktop) - UPDATED FOR LOCAL VIDEO */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-900">
             <video 
              className="w-full h-full object-cover"
              controls 
              muted 
              loop
            >
              
              <source src="/probuild/videos/project2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentWork;