import React from 'react';
import Hero from './Hero';
import LifeAtProBuild from './LifeAtProBuild';
import StatsBar from './StatsBar';
import Philosophy from './Philosophy';
import Roadmap from './Roadmap';
import SuccessStories from './SuccessStories';
import Mentors from './Mentors';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LifeAtProBuild />
      <StatsBar />
      <Philosophy />
      <Roadmap />
      <SuccessStories />
      <Mentors />
    </>
  );
};

export default Home;

