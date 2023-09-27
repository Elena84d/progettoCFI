import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const serverUrl = "http://localhost:5050"; // Imposta l'URL del server

// Utilizza l'URL completo dell'endpoint desiderato
const endpointUrl = `${serverUrl}/contatti`;

// Imposta una funzione per gestire la risposta dal server
const handleResponse = (response) => {
  
  if (response.successo) {
    // Mostra un popup di successo
    Swal.fire({
      title: 'Richiesta registrata',
      text: response.message,
      icon: 'success',
      showCloseButton: true,
    });

    // Resetta il modulo
    document.getElementById('contact-form').reset();
  } else {
    // Mostra un popup di errore
    Swal.fire({
      title: 'Errore',
      text: response.message,
      icon: 'error',
      showCloseButton: true,
    });
  }
};
const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  
  // Crea un oggetto FormData dal modulo HTML
  const formData ={
    nome: form.nome.value,
    email: form.email.value,
    subject: form.subject.value,
    messaggio: form.messaggio.value,
  };

  // Invia la richiesta al server tramite Axios
  axios
    .post(endpointUrl, formData)
    .then((response) => {
      // Gestisci la risposta dal server
      handleResponse(response.data);
    })
    .catch((error) => {
      console.error("Errore durante l'invio del modulo:", error);
      // Puoi mostrare un popup di errore qui se lo desideri
    });
};


function Contact(){
    return(
      <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contatti</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Lavoro a:</h4>
                <p>Ferrara, Bologna, Comacchio, Ravenna e Rovigo.</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>elena@artisticamenteonline.it</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Cell:</h4>
                <p>3519368237</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form id="contact-form" onSubmit={handleSubmit} method="post"  className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="nome" className="form-control" id="nome" placeholder="Nome" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Oggetto" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="messaggio" id="messaggio" rows="5" placeholder="Messaggio" required></textarea>
              </div>
              <div className="my-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div> */}
                <div id =" message"></div>
              </div>
              <div className="text-center"><button type="submit">Invia messaggio</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>  
    );
}
export default Contact;
