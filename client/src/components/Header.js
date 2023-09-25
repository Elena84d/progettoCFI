import React from 'react';
function Header(){
  return (
      <div> 
        <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="navbar nav-menu">
      
      <ul>
        <li><a href="index.html#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="index.html#mipresento" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Mi presento</span></a></li>
        <li><a href="index.html#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="index.html#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Servizi</span></a></li>
        <li><a href="index.html#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contatti</span></a></li>
       <li><a href="blog.html" class="nav-link scrollto"><i class="bi bi-journal"></i> <span>Blog</span></a></li>
       <li><a href="prenota-call.html" class="nav-link scrollto"><i class="bi bi-calendar-event"></i> <span>Appuntamenti</span></a></li>
      </ul>
    </nav>
    </header>
    </div>
  );
}

export default Header;