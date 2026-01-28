import React from 'react';
import Hero from './Hero';
import LifeAtProBuild from './LifeAtProBuild';
import StatsBar from './StatsBar';
import Philosophy from './Philosophy';
import Roadmap from './Roadmap';
import PathwaysPreview from './PathwaysPreview';
import QuickMentoring from './QuickMentoring';
import SuccessStories from './SuccessStories';



const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LifeAtProBuild />
      <StatsBar />
      <Philosophy />
      <Roadmap />
      <PathwaysPreview />
      <QuickMentoring />
      <SuccessStories />
      
      
    </>
  );
};

export default Home;

