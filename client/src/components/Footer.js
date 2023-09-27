import React from "react";

function Footer(){
    return(
<footer id="footer">
    <div className="container">
      <h3>Elena Durante</h3>
      <p id="motto">“L'unico modo per iniziare a fare qualcosa è smettere di parlare e iniziare a fare.” - Walt Disney -</p>
      <div className="social-links">
        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="page"> Privacy |<a href="http://localhost:3000/login.html"> Login</a></div>
      <div className="copyright">
        &copy; Copyright <strong><span>2023</span></strong>. Tutti i diritti riservati
      </div>
      <div className="credits">
        
        
        Designato da <a href="/">Elena Durante</a>
      </div>
    </div>
  </footer>
   
    );
}
export default Footer;