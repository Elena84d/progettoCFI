
import { useEffect } from 'react';


function Script() {
  useEffect(() => {
    // Load your scripts here
    const script1 = document.createElement('script');
    script1.src = '/assets/vendor/purecounter/purecounter_vanilla.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '/assets/vendor/aos/aos.js';
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = '/assets/vendor/glightbox/js/glightbox.min.js';
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = '/assets/vendor/isotope-layout/isotope.pkgd.min.js';
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = '/assets/vendor/swiper/swiper-bundle.min.js';
    document.body.appendChild(script6);

    const script7 = document.createElement('script');
    script7.src = '/assets/vendor/waypoints/noframework.waypoints.js';
    document.body.appendChild(script7);

    const script8 = document.createElement('script');
    script8.src = '/assets/js/main.js';
    document.body.appendChild(script8);

   const script9 = document.createElement('script');
     script9.src = 'assets/vendor/php-email-form/validate.js';
      document.body.appendChild(script9);

}, []);

return null;
}

export default Script;

// const script2 = document.createElement('script');
// script2.src = 'path-to-script2.js';
// document.body.appendChild(script2);

// Add more scripts as needed





//   <script src="assets/vendor/typed.js/typed.umd.js"></script>
//   <script src="assets/vendor/php-email-form/validate.js"></script>


//   <!-- Template Main JS File -->
//   <script src="assets/js/main.js"></script>

// return () => {
//   // Cleanup or remove scripts if necessary
//   document.body.removeChild(script1);
//   document.body.removeChild(script2);
// };