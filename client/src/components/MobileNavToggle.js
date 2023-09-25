import React from 'react';

function MobileNavToggle() {
  const handleToggleClick = () => {
    // Toggle the mobile navigation and button styles here
    const body = document.querySelector('body');
    body.classList.toggle('mobile-nav-active');

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  };

  return (
    <i className="bi bi-list mobile-nav-toggle d-lg-none" onClick={handleToggleClick}></i>
  );
}

export default MobileNavToggle;