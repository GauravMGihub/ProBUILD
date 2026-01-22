import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Roadmap from './components/Roadmap';
import ProgramShowcase from './components/ProgramShowcase';
import MentoringHub from './components/MentoringHub';
import SuccessStories from './components/SuccessStories';
import StudentWork from './components/StudentWork';
import StudentPortfolios from './components/StudentPortfolios';
import Mentors from './components/Mentors';
import LifeAtProBuild from './components/LifeAtProBuild';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Roadmap />
        <ProgramShowcase />
        <MentoringHub />
        <SuccessStories />
        <StudentWork />
        <StudentPortfolios />
        <Mentors />
        <LifeAtProBuild />
      </main>
      <Footer />
    </div>
  );
};

export default App;