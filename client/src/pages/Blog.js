import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Freccia from '../components/Freccia';
import Script from '../components/Script';


// import PortfolioSection from './PortfolioSection';
// import ServicesSection from './ServicesSection';

function Blog() {
  return (
    <div>
      <Head/>
      <Header/>
      <main id='main'>
      <Services/>
      </main>
      <Footer/>
      <Freccia/>
      <Script/>
      
      
      {/* <PortfolioSection />
      <ServicesSection /> */}
      {/* Other section components */}
    </div>
  );
}

export default Blog;
