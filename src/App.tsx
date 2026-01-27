// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import LifeAtProBuild from './components/LifeAtProBuild';
// import Philosophy from './components/Philosophy';
// import Roadmap from './components/Roadmap';
// import ProgramShowcase from './components/ProgramShowcase';
// import MentoringHub from './components/MentoringHub';
// import SuccessStories from './components/SuccessStories';
// import StudentWork from './components/StudentWork';
// import StudentPortfolios from './components/StudentPortfolios';
// import Mentors from './components/Mentors';
// import Footer from './components/Footer';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
//       <Navbar />
//       <main className="flex-grow">
//         <Hero />
//         <LifeAtProBuild />
//         <Philosophy />
//         <Roadmap />
//         <ProgramShowcase />
//         <MentoringHub />
//         <SuccessStories />
//         <StudentWork />
//         <StudentPortfolios />
//         <Mentors />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import Global Components (Always visible)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Import Page Components (Swapped based on URL)
import Home from './components/Home';
import AboutUs from './components/AboutUs';       // Ensure you created this file
import CadPathway from './components/CadPathway'; // Ensure you created this file

const App: React.FC = () => {
  return (
    // The Router wraps the whole application
    <Router  basename="/probuild">
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        
        {/* Navbar stays at the top of every page */}
        <Navbar />
        
        <main className="flex-grow">
          {/* Routes decide WHICH component to show in the middle */}
          <Routes>
            {/* If URL is "/", show Home */}
            <Route path="/" element={<Home />} />
            
            {/* If URL is "/about", show AboutUs */}
            <Route path="/about" element={<AboutUs />} />
            
            {/* If URL is "/cad-pathway", show CadPathway */}
            <Route path="/cad-pathway" element={<CadPathway />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;