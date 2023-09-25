import React from "react";

function Footer(){
    return(
<footer id="footer">
    <div class="container">
      <h3>Elena Durante</h3>
      <p id="motto">“L'unico modo per iniziare a fare qualcosa è smettere di parlare e iniziare a fare.” - Walt Disney -</p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="page"> Privacy |<a href="http://localhost:3000/login.html"> Login</a></div>
      <div class="copyright">
        &copy; Copyright <strong><span>2023</span></strong>. Tutti i diritti riservati
      </div>
      <div class="credits">
        
        
        Designato da <a href="#">Elena Durante</a>
      </div>
    </div>
  </footer>
   
    );
}
export default Footer;