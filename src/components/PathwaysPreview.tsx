// import React from 'react';
// import { Wrench, PenTool, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const PathwaysPreview: React.FC = () => {
//   const navigate = useNavigate();

//   const pathways = [
//     {
//       id: 'engineering',
//       title: 'Engineering Pathway',
//       description: 'Master the technical core. From CAD modeling to automation scripts.',
//       icon: <Wrench className="w-full h-full text-blue-100" />,
//       color: 'bg-blue-600',
//       points: ['FreeCAD & Parametric Modeling', 'Python Automation', 'Finite Element Analysis (FEA)']
//     },
//     {
//       id: 'design',
//       title: 'Design Pathway',
//       description: 'Focus on aesthetics and user experience. Render stunning product visuals.',
//       icon: <PenTool className="w-full h-full text-purple-100" />,
//       color: 'bg-purple-600',
//       points: ['Industrial Design Principles', 'Photorealistic Rendering', 'Product Visualization']
//     },
//     {
//       id: 'business',
//       title: 'Business Pathway',
//       description: 'Learn the business of engineering. Product management and technical sales.',
//       icon: <TrendingUp className="w-full h-full text-green-100" />,
//       color: 'bg-green-600',
//       points: ['Technical Sales Strategies', 'Product Lifecycle Management', 'Engineering Leadership']
//     }
//   ];

//   const handleNavigate = (path: string) => {
//     navigate(`/cad-pathway?tab=${path}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Specialized Tracks</h2>
//           <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Our Pathways
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {pathways.map((path) => (
//             <div
//               key={path.id}
//               className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
//             >
              
//               {/* --- 1. DECORATIVE ICON (Top Right Corner) --- */}
//               {/* This matches the curved line in your sketch */}
//               <div className="absolute -top-10 -right-10 w-40 h-40 opacity-50 group-hover:scale-110 transition-transform duration-500 rotate-12">
//                 {path.icon}
//               </div>

//               {/* --- 2. TITLE & DESCRIPTION --- */}
//               <div className="relative z-10 mb-6">
//                 <div className={`w-12 h-1 bg-gradient-to-r from-transparent to-${path.color.replace('bg-', '')} mb-4`}></div>
//                 <h4 className="text-2xl font-bold text-slate-900 mb-3">{path.title}</h4>
//                 <p className="text-slate-500 leading-relaxed text-sm">
//                   {path.description}
//                 </p>
//               </div>

//               {/* --- 3. BULLET POINTS --- */}
//               <div className="relative z-10 mb-8 flex-grow">
//                 <ul className="space-y-3">
//                   {path.points.map((point, i) => (
//                     <li key={i} className="flex items-start text-sm font-medium text-slate-700">
//                       <CheckCircle2 className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${path.color.replace('bg-', 'text-')}`} />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* --- 4. BUTTON (Bottom) --- */}
//               <div className="relative z-10 mt-auto">
//                 <button
//                   onClick={() => handleNavigate(path.id)}
//                   className={`w-full py-3 rounded-xl text-white font-bold shadow-lg ${path.color} hover:opacity-90 transition-opacity flex items-center justify-center group-hover:shadow-xl`}
//                 >
//                   View Details
//                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PathwaysPreview;

import React from 'react';
import { Wrench, PenTool, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PathwaysPreview: React.FC = () => {
  const navigate = useNavigate();

  const pathways = [
    {
      id: 'engineering',
      title: 'Engineering Pathway',
      description: 'Master the technical core. From CAD modeling to automation scripts.',
      icon: <Wrench className="w-full h-full text-brand-azure/20" />, // Made icons subtler
      color: 'bg-brand-azure',
      points: ['FreeCAD & Parametric Modeling', 'Python Automation', 'Finite Element Analysis (FEA)']
    },
    {
      id: 'design',
      title: 'Design Pathway',
      description: 'Focus on aesthetics and user experience. Render stunning product visuals.',
      icon: <PenTool className="w-full h-full text-brand-red/20" />,
      color: 'bg-brand-red',
      points: ['Industrial Design Principles', 'Photorealistic Rendering', 'Product Visualization']
    },
    {
      id: 'business',
      title: 'Business Pathway',
      description: 'Learn the business of engineering. Product management and technical sales.',
      icon: <TrendingUp className="w-full h-full text-brand-yellow/20" />,
      color: 'bg-brand-yellow',
      points: ['Technical Sales Strategies', 'Product Lifecycle Management', 'Engineering Leadership']
    }
  ];

  const handleNavigate = (path: string) => {
    navigate(`/cad-pathway?tab=${path}`);
    window.scrollTo(0, 0);
  };

  return (
    // 1. DARK BACKGROUND GRADIENT
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-azure font-bold tracking-wide uppercase text-sm mb-3">Specialized Tracks</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Pathways
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path) => (
            <div 
              key={path.id} 
              // 2. DARK CARD STYLE: bg-slate-800, border-slate-700
              className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 relative overflow-hidden group hover:-translate-y-2 hover:shadow-blue-900/20 transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Decorative Icon */}
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-50 group-hover:scale-110 transition-transform duration-500 rotate-12">
                {path.icon}
              </div>

              {/* Title & Description */}
              <div className="relative z-10 mb-6">
                <div className={`w-12 h-1 bg-gradient-to-r from-transparent to-${path.color.replace('bg-', '')} mb-4`}></div>
                <h4 className="text-2xl font-bold text-white mb-3">{path.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {path.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="relative z-10 mb-8 flex-grow">
                <ul className="space-y-3">
                  {path.points.map((point, i) => (
                    // Changed text color to slate-300 for readability on dark bg
                    <li key={i} className="flex items-start text-sm font-medium text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${path.color.replace('bg-', 'text-')}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="relative z-10 mt-auto">
                <button 
                  onClick={() => handleNavigate(path.id)}
                  className={`w-full py-3 rounded-xl text-white font-bold shadow-lg ${path.color} hover:opacity-90 transition-opacity flex items-center justify-center group-hover:shadow-xl`}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PathwaysPreview;