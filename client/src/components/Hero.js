import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Assicurati di importare Typed.js
import Head from './Head';
function Hero() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: [
        "Web designer",
        "Web developer",
        "Graphic Designer",
        "Digital marketer",
        "Social media manager"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    // Rendi necessario distruggere l'istanza di Typed quando il componente viene smontato
    return () => {
      typed.destroy();
    };
  }, []); // Assicurati di passare un array vuoto come secondo argomento per evitare effetti collaterali

  return (
      <section id="hero" className="d-flex flex-column justify-content-center">
        <Head/>
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Elena Durante</h1>
        <p id='typed'>
          Sono una <span className="typed"></span>
        </p>
        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
