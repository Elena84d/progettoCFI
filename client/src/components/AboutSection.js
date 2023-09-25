import React from 'react';

function AboutSection() {
  return (
    <section id="mipresento" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Perché econgiunzione?</h2>
          <p style={{ textAlign: 'center' }}>
            Perché ti connetto a nuovi clienti! Sono creativa e ho sempre avuto interesse per lo sviluppo web e la grafica digitale.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/logo.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            {/* <h3>Big Data &amp; IA per la transizione digitale</h3> */}
            <p>
              Adoro comunicare! A soli 2 anni, al ristorante, andavo agli altri tavoli a "chiaccherare"! Provengo da una formazione artistico/umanistica/informatica, ho fatto diversi corsi per ottenere conoscenze e qualifiche come web developer, digital marketer e ne continuo a fare periodicamente per tenermi al passo coi tempi. Comunicazione e creatività sono doti che vanno coltivate e affiancate a tecnica e professionalità. Io ho sempre <span style={{ textDecoration: 'underline', fontWeight: 500 }}>coniugato</span> le mie "doti" con l'informatica.
            </p>
            <p className="fst-italic">
              In ogni progetto, che sia marketing o sviluppo web, parto dall'analisi dei dati e creo/utilizzo modelli di IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
