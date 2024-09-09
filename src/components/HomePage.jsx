import React from 'react';
import BackgroundSlider from './BackgroundSlider';
import MainContent from './MainContent';
import SignUp from './SignUp';

const HomePage = () => {
  return (
    <div>
      <BackgroundSlider />
      <MainContent />
      <HowItWorks />
      <Testimonials />
      <SignUp />
    </div>
  );
};

export default HomePage;