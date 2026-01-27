import React from 'react';
import Hero from './Hero';
import LifeAtProBuild from './LifeAtProBuild';
import Philosophy from './Philosophy';
import Roadmap from './Roadmap';
import ProgramShowcase from './ProgramShowcase';
import MentoringHub from './MentoringHub';
import SuccessStories from './SuccessStories';
import StudentWork from './StudentWork';
import StudentPortfolios from './StudentPortfolios';
import Mentors from './Mentors';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LifeAtProBuild />
      <Philosophy />
      <Roadmap />
      <ProgramShowcase />
      <MentoringHub />
      <SuccessStories />
      <StudentWork />
      <StudentPortfolios />
      <Mentors />
    </>
  );
};

export default Home;

