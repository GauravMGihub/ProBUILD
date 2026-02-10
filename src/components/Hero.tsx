import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

// Local student/project images for the carousel
const heroImages = [
  
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  const handleNext = () => { nextImage(); setResetKey((k) => k + 1); };
  const handlePrev = () => { prevImage(); setResetKey((k) => k + 1); };
  const handleDot = (idx: number) => { setCurrentImageIndex(idx); setResetKey((k) => k + 1); };

  // Auto-rotate every 4 seconds — resets when user manually navigates
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage, resetKey]);

  return (
    <div className="relative overflow-hidden bg-brand-cream pt-10 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-6 text-center lg:text-left z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-azure/20 text-brand-azure text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-azure animate-pulse"></span>
              New Cohort Starting Fall 2026
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-6">
              Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Profile</span>,<br className="hidden lg:block"/>
              not just a Resume.
            </h1>
            
            <p className="mt-4 text-md md:text-2xl sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Digital Engineering & Automation Pathway. A program designed to make students 
              industry-relevant through <span className="text-slate-900 font-semibold underline decoration-brand-yellow decoration-2 underline-offset-2">real projects</span>, mentorship, and portfolio-driven growth.
            </p>
          
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/cad-pathway" className="px-8 py-4 rounded-2xl bg-brand-red text-white font-bold text-lg shadow-xl shadow-brand-red/20 hover:bg-red-600 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 inline-block">
                Start Your Journey
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-azure" />
                    <span>Verified Certs</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-azure" />
                    <span>Live Mentors</span>
                </div>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>

             {/* Carousel Container — no tilt */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                
                {/* Images */}
                {heroImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Student glimpse ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm text-slate-800 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm text-slate-800 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDot(idx)}
                      className={`rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;