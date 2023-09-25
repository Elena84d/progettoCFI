import React from 'react';

function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>I miei numeri</h2>
          <p>Voglio raccontarti la mia passione attraverso i numeri, che parlano da soli, per darti una visione a grandi linee. Il mio impegno si vede, ma la mia storia va oltre le cifre. Quindi continua a scorrere per conoscere le skills che ho acquisito nel tempo.</p>
        </div>
        <div className="row">
          <FactItem icon="bi-emoji-smile" start={0} end={50} duration={1} text="Clienti Felici" />
          <FactItem icon="bi-journal-richtext" start={0} end={100} duration={1} text="Progetti" />
          <FactItem icon="bi-headset" start={0} end={1375} duration={1} text="Ore di formazione" />
          <FactItem icon="bi-award" start={0} end={8} duration={1} text="Qualifiche attestate" />
        </div>
      </div>
    </section>
  );
}

function FactItem({ icon, start, end, duration, text }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className={`bi ${icon}`}></i>
        <span
          data-purecounter-start={start}
          data-purecounter-end={end}
          data-purecounter-duration={duration}
          className="purecounter"
        ></span>
        <p id="counterText">{text}</p>
      </div>
    </div>
  );
}

export default Facts;
