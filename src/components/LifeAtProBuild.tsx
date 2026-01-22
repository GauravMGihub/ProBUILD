import React from 'react';

// You can replace these with your local images later (e.g., "/images/culture1.jpg")
const cultureImages = [
  "/probuild/images/image3.jpg",
  "/probuild/images/image4.jpg",
  "/probuild/images/image5.jpg",
  "/probuild/images/image6.jpg",
  "/probuild/images/image7.jpg",
  "/probuild/images/image8.jpg",
];

const LifeAtProBuild: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      
      {/* CSS Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-culture {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-culture:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Life at ProBUILD
        </h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          More than just coding. Join a community of builders, thinkers, and creators.
        </p>
      </div>

      {/* Scrolling Image Strip */}
      <div className="w-full">
        <div className="animate-scroll-culture">
          {/* We map the array TWICE to create a perfect loop without gaps */}
          {[...cultureImages, ...cultureImages].map((img, index) => (
            <div 
              key={index} 
              className="w-[500px] h-[350px] mx-3 flex-shrink-0 rounded-2xl overflow-hidden relative group"
            >
              {/* Dark Overlay that disappears on hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
              
              <img 
                src={img} 
                alt="Life at ProBuild" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="w-full h-px bg-slate-200"></div>
      </div>
      
    </section>
  );
};

export default LifeAtProBuild;