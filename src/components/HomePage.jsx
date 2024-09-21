import React from 'react';
import BackgroundSlider from './backgroundslider/BackgroundSlider';
import MainContent from './maincontent/MainContent';
import SignUp from './login/SignUp';
import HowItWorks from './howitworks/HowItWorks';
import Testimonials from './testimonal/Testimonials';

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