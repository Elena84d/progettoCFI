import React from 'react';
import AboutSection from './AboutSection';
import Facts from './Facts';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';

// import PortfolioSection from './PortfolioSection';
// import ServicesSection from './ServicesSection';

function MainIndex() {
  return (
    <main id="main">
      <AboutSection />
      <Facts/>
      <Skills/>
      <Portfolio/>
      <Services/>
      <Testimonial/>
      <Contact/>
      {/* <PortfolioSection />
      <ServicesSection /> */}
      {/* Other section components */}
    </main>
  );
}

export default MainIndex;
