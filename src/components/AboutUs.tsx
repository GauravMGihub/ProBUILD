import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">About ProBUILD</h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          We are dedicated to bridging the gap between academic theory and industrial application.
          Our mission is to empower the next generation of engineers with real-world skills.
        </p>
        {/* Add more content here later */}
      </div>
    </div>
  );
};

export default AboutUs;