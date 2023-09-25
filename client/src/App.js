import React from 'react';
import Head from './components/Head'

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import MainIndex from './components/MainIndex';
import Footer from './components/Footer';
import Freccia from './components/Freccia';
import Script from './components/Script';



function App() {
  
  return (
    <Router>
      <div>
        <Head /> {/* Includi il tuo Head qui */}
        <Header/>
        <Hero/>
        <MainIndex/>
        <Footer/>
        <Freccia/>
        <Script/>

        
        {/* Altri componenti e routing delle pagine */}
      </div>
    </Router>
  );
}

export default App;
