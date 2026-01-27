import React from 'react';
import Hero from './Hero';
import LifeAtProBuild from './LifeAtProBuild';
import Philosophy from './Philosophy';
import Roadmap from './Roadmap';
import SuccessStories from './SuccessStories';
import Mentors from './Mentors';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LifeAtProBuild />
      <Philosophy />
      <Roadmap />
      <SuccessStories />
      <Mentors />
    </>
  );
};

export default Home;

