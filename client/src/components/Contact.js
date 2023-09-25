import React from "react";

function Contact(){
    return(
      <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contatti</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Lavoro a:</h4>
                <p>Ferrara, Bologna, Comacchio, Ravenna e Rovigo.</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>elena@artisticamenteonline.it</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Cell:</h4>
                <p>3519368237</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="/contatti " method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="nome" class="form-control" id="nome" placeholder="Nome" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Oggetto" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="messaggio" id="messaggio" rows="5" placeholder="Messaggio" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Il tuo messaggio è stato inviato. Grazie!</div>
              </div>
              <div class="text-center"><button type="submit">Invia messaggio</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>  
    );
}
export default Contact;