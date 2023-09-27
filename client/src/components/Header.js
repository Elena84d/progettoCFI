import React from 'react';
function Header(){
  return (
      <div> 
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
    <nav id="navbar" className="navbar nav-menu">
      
      <ul>
        <li><a href="/#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="/#mipresento" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Mi presento</span></a></li>
        <li><a href="/#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="/#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Servizi</span></a></li>
        <li><a href="/#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contatti</span></a></li>
       <li><a href="/blog" className="nav-link scrollto"><i className="bi bi-journal"></i> <span>Blog</span></a></li>
       <li><a href="prenota-call.html" className="nav-link scrollto"><i className="bi bi-calendar-event"></i> <span>Appuntamenti</span></a></li>
      </ul>
    </nav>
    </header>
    </div>
  );
}

export default Header;