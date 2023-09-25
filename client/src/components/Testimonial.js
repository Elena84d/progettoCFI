import React from "react";

function Testimonial(){

return(
<section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Testimonianze</h2>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="300">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Elena è la personificazione del multitasking! Dalla grafica al marketing alla programmazione. Gli chiedi qualcosa, lei trova sempre il modo per farla e la fa fatta bene.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  E' stato bello lavorare con Elena. Io avevo un po' di ansia per il progetto, ma lei con le sue idee, l'esperienza e l'entusiasmo è riuscita a farmi vivere il progetto con un energia positiva e i risultati sono stati ottimi.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Elena la vedi piccola e gentile ma conoscendola meglio l'ho cominciata ad associare a Super Vicky. Quella bimba robot che ti stupiva con la sua forza. Ed Elena è caparbia, in ogni progetto che abbiamo seguito insieme lei ha sempre trovato il modo di raggiungere gli obiettivi prefissati.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

      

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
);

}
export default Testimonial;