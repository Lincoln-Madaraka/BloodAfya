import React from 'react';
import BackgroundSlider from './BackgroundSlider';
import MainContent from './MainContent';
import SignUp from './SignUp';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

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