import React, { useState, Suspense, useEffect } from 'react';
import { Github, ArrowRight, ChevronLeft, ChevronRight, Box } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

// --- DATA: ALL PROJECTS IN ONE ARRAY ---
const projects = [
  {
    id: 1,
    title: "Autonomous Gearbox Simulation",
    course: "Foundation", 
    video: "/probuild/videos/Differential_Gear_box.mp4",
    model: "/probuild/models/DG_Assembly_Rehan-Assembly.gltf", // Ensure .glb
    // description: "This student utilized FreeCAD to design a fully functional gearbox simulation. By integrating Python scripts, they automated the stress testing scenarios.",
    // tech: ["Built with FreeCAD & Python", "Completed in 4 Weeks"],
    repo: "https://github.com/QuirkyCort/gears"
  },
  {
    id: 2,
    title: "Elbow Pipe",
    course: "Foundation", 
    video: "/probuild/videos/Elbow_pipe.mp4",
    model: "/probuild/models/elbow_pipe_template-Body.gltf",
    // description: "A comprehensive digital twin project that mimics a real-world assembly line. The project demonstrates real-time data synchronization.",
    // tech: ["IoT Integration", "Real-time Data Visualization"],
    repo: "https://github.com/QuirkyCort/gears"
  },
  {
    id: 3,
    title: "Piston",
    course: "Foundation", 
    video: "/probuild/videos/Piston.mp4",
    model: "/probuild/models/DG_RearCover_Rehan-Body.gltf",
    // description: "A parametric drone frame design that automatically adjusts dimensions based on payload weight inputs.",
    // tech: ["IoT Integration", "Real-time Data Visualization"],
    repo: "https://github.com/QuirkyCort/gears"
  }
];

// --- HELPER: 3D MODEL COMPONENT ---
const RealModel = ({ filePath }: { filePath: string }) => {
  const { scene } = useGLTF(filePath);
  // Auto-metallic effect
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.metalness = 0.9;
        child.material.roughness = 0.4;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return <primitive object={scene} scale={0.01} />;
};

// --- HELPER: MINI 3D VIEWER ---
// Keeps the container generic so it fills whatever parent div it is placed in
const Mini3DViewer = ({ modelPath }: { modelPath: string }) => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 relative shadow-inner group cursor-grab active:cursor-grabbing">
      <div className="absolute top-3 left-3 z-10 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center pointer-events-none">
        <Box className="w-3 h-3 mr-1" /> 3D PREVIEW
      </div>
      
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="warehouse" intensity={0.7} adjustCamera>
            <RealModel filePath={modelPath} />
          </Stage>
          {/* Zoom is enabled as requested */}
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-3 right-3 text-[10px] text-slate-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Scroll to Zoom • Drag to Rotate
      </div>
    </div>
  );
};

const StudentWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation Logic
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  // Helper for Badge Color
  const getBadgeColor = (course: string) => {
    if (course === 'Foundation') return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-orange-100 text-orange-700 border-orange-200';
    
  };

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Student Work
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Experience the projects firsthand. Browse through our student gallery below.
          </p>
        </div>

        {/* === CAROUSEL CONTAINER === */}
        <div className="relative bg-brand-cream rounded-[2.5rem] border border-slate-200 p-6 md:p-10 shadow-2xl">
          
          {/* NAVIGATION ARROWS */}
          <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-brand-cream text-slate-900 rounded-full shadow-lg hover:bg-slate-100 hover:scale-110 transition-all border border-slate-200 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-brand-cream text-slate-900 rounded-full shadow-lg hover:bg-slate-100 hover:scale-110 transition-all border border-slate-200 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 1. TOP HEADER (Title + Badge) */}
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              {currentProject.title}
            </h3>
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide border ${getBadgeColor(currentProject.course)}`}>
              {currentProject.course} Level
            </span>
          </div>

          {/* 2. MEDIA ROW (Split 50/50: Video Left, 3D Right) */}
          {/* h-[400px] ensures they are exactly the same height and symmetrical */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[400px] mb-10">
            
            {/* Left: Video */}
            <div className="relative w-full h-[300px] lg:h-full bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <video 
                key={currentProject.video}
                className="w-full h-full object-cover"
                controls 
                muted 
                src={currentProject.video} 
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right: 3D Model */}
            <div className="w-full h-[300px] lg:h-full">
               <Mini3DViewer key={currentProject.model} modelPath={currentProject.model} />
            </div>

          </div>

          {/* 3. BOTTOM ROW (Project Details) */}
          {/* Added border-t to separate it cleanly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            
            {/* Description (Takes up 2/3 space) */}
            {/* <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-slate-900 mb-3">About the Project</h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                {currentProject.description}
              </p>
            </div> */}

            {/* Tech & Button (Takes up 1/3 space) */}
            <div className="md:col-span-3 flex flex-col justify-center items-center">
              <div>
                {/* <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Highlights</h4> */}
                {/* <ul className="space-y-3 mb-6">
                  {currentProject.tech.map((point, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 font-medium">
                      <span className={`w-2 h-2 rounded-full mr-3 ${idx === 0 ? 'bg-blue-600' : 'bg-red-500'}`}></span>
                      {point}
                    </li>
                  ))}
                </ul> */}
              </div>

              <a 
                href={currentProject.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300 shadow-md group"
              >
                <Github className="w-5 h-5 mr-2.5" />
                View Source Code
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>

          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button onClick={prevProject} className="p-3 bg-white border border-slate-200 rounded-full shadow-sm"><ChevronLeft /></button>
            <button onClick={nextProject} className="p-3 bg-white border border-slate-200 rounded-full shadow-sm"><ChevronRight /></button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-slate-900' : 'bg-slate-300'}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentWork;