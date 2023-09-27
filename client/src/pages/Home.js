import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';  
import MainIndex from '../components/MainIndex';
import Footer from '../components/Footer';
import Freccia from '../components/Freccia';
import Script from '../components/Script';
 

// import PortfolioSection from '../PortfolioSection';
// import ServicesSection from '../ServicesSection';

function Home() {
  return (
    <div>
    <Head /> {/* Includi il tuo Head qui */}
    <Header/>
    <Hero/>
    <MainIndex/>
    <Footer/>
    <Freccia/>
    <Script/>
    </div>
  );
}

export default Home;
