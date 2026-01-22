// import React from 'react';
// import { Github, ArrowRight } from 'lucide-react'; // Import Github icon

// const StudentWork: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Student Work
//           </h2>
//           <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
//             Check out the incredible projects built by our cohort members during the program. You
//             can find the complete code repositories on GitHub which are attached below!
//           </p>
//         </div>

//         {/* --- PROJECT 1: Video Left, Text Right --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
//           {/* Video Side */}
//           <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-900 group">
//             <video
//               className="w-full h-full object-cover"
//               controls
//               muted
//               loop
//               src="/probuild/videos/project1.mp4"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Text Side */}
//           <div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//               Autonomous Gearbox Simulation
//             </h3>
//             <p className="text-slate-500 text-lg leading-relaxed mb-6">
//               This student utilized FreeCAD to design a fully functional gearbox simulation.
//               By integrating Python scripts, they automated the stress testing scenarios.
//             </p>
//             <ul className="space-y-2 mb-6">
//               <li className="flex items-center text-slate-700 font-medium">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                 Built with FreeCAD & Python
//               </li>
//               <li className="flex items-center text-slate-700 font-medium">
//                 <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
//                 Completed in 4 Weeks
//               </li>
//             </ul>

//             {/* --- NEW GITHUB BUTTON --- */}
//             <a
//               href="https://github.com/your-repo-link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg group"
//             >
//               <Github className="w-5 h-5 mr-2.5" /> {/* The Cat Icon */}
//               View Source Code
//               <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
//             </a>

//           </div>
//         </div>

//         {/* --- DIVIDER LINE --- */}
//         <div className="w-full h-px bg-slate-200 my-16"></div>

//         {/* --- PROJECT 2: Text Left, Video Right --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Text Side */}
//           <div className="order-2 lg:order-1">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">
//               Digital Twin for Assembly Line
//             </h3>
//             <p className="text-slate-500 text-lg leading-relaxed mb-6">
//               A comprehensive digital twin project that mimics a real-world assembly line.
//               The project demonstrates real-time data synchronization.
//             </p>
//              <ul className="space-y-2 mb-6">
//               <li className="flex items-center text-slate-700 font-medium">
//                 <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
//                 IoT Integration
//               </li>
//               <li className="flex items-center text-slate-700 font-medium">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                 Real-time Data Visualization
//               </li>
//             </ul>

//             {/* --- NEW GITHUB BUTTON --- */}
//             <a
//               href="https://github.com/QuirkyCort/gears/tree/master/samples"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg group"
//             >
//               <Github className="w-5 h-5 mr-2.5" />
//               View Source Code
//               <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
//             </a>

//           </div>

//           {/* Video Side */}
//           <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-900 group">
//              <video
//               className="w-full h-full object-cover"
//               controls
//               muted
//               loop
//               src="/probuild/videos/project2.mp4"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default StudentWork;

import React, { useState, Suspense } from 'react';
import { Github, ArrowRight, Play, Box } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

// --- HELPER: 3D MODEL COMPONENT ---
// (Replace the shapes below with <useGLTF url="..." /> when you have real files)
const PlaceholderModel = ({ type }: { type: string }) => {
  return (
    <mesh>
      {type === 'gearbox' ? (
        <torusKnotGeometry args={[1, 0.35, 128, 32]} /> // Looks like a complex part
      ) : (
        <boxGeometry args={[1.5, 1.5, 1.5]} /> // Looks like a factory unit
      )}
      <meshStandardMaterial color="#94a3b8" roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

// --- NEW COMPONENT: THE MEDIA SWITCHER CARD ---
const ProjectMediaCard = ({ videoSrc, modelType }: { videoSrc: string, modelType: string }) => {
  const [activeTab, setActiveTab] = useState<'video' | '3d'>('video');

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-slate-900 group">
      
      {/* 1. THE TOGGLE SWITCH (Floating at top) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/80 backdrop-blur-md p-1 rounded-full border border-slate-700 flex shadow-lg">
        <button
          onClick={() => setActiveTab('video')}
          className={`flex items-center px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
            activeTab === 'video' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-slate-400 hover:text-white'
          }`}
        >
          <Play className="w-3 h-3 mr-2" />
          Video
        </button>
        <button
          onClick={() => setActiveTab('3d')}
          className={`flex items-center px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
            activeTab === '3d' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-slate-400 hover:text-white'
          }`}
        >
          <Box className="w-3 h-3 mr-2" />
          3D View
        </button>
      </div>

      {/* 2. THE CONTENT */}
      {activeTab === 'video' ? (
        // VIDEO MODE
        <video 
          className="w-full h-full object-cover"
          controls 
          muted 
          loop
          src={videoSrc} 
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        // 3D MODE
        <div className="w-full h-full cursor-move bg-slate-800">
           <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.5}>
                <PlaceholderModel type={modelType} />
              </Stage>
              <OrbitControls autoRotate autoRotateSpeed={4} />
            </Suspense>
          </Canvas>
          {/* Hint Overlay */}
          <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold pointer-events-none select-none">
            Drag to Rotate
          </div>
        </div>
      )}
    </div>
  );
};

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
            Experience the projects firsthand. Watch the simulation videos or interact with the 3D CAD models directly in your browser.
          </p>
        </div>

        {/* --- PROJECT 1 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* MEDIA CARD (Left) */}
          <ProjectMediaCard 
            videoSrc="/probuild/videos/project1.mp4" 
            modelType="gearbox" 
          />

          {/* TEXT (Right) */}
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

            <a 
              href="https://github.com/QuirkyCort/gears/tree/master/samples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Github className="w-5 h-5 mr-2.5" />
              View Source Code
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <div className="w-full h-px bg-slate-200 my-16"></div>

        {/* --- PROJECT 2 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT (Left) */}
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

            <a 
              href="https://github.com/QuirkyCort/gears/tree/master/samples" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Github className="w-5 h-5 mr-2.5" />
              View Source Code
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {/* MEDIA CARD (Right) */}
          <div className="order-1 lg:order-2">
            <ProjectMediaCard 
              videoSrc="/probuild/videos/project2.mp4" 
              modelType="factory" 
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentWork;