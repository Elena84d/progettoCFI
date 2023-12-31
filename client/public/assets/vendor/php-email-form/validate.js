// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach(function (e) {
//     e.addEventListener('submit', function (event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

//       if (!action) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData(thisForm);

//       if (recaptcha) {
//         if (typeof grecaptcha !== "undefined") {
//           grecaptcha.ready(function () {
//             try {
//               grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
//                 .then(token => {
//                   formData.set('recaptcha-response', token);
//                   php_email_form_submit(thisForm, action, formData);
//                 })
//             } catch (error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

// function php_email_form_submit(thisForm, action) {
//   let formData = new FormData(thisForm);

//   fetch(action, {
//     method: 'POST',
//     body: formData,
//     headers: { 'X-Requested-With': 'XMLHttpRequest' }
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`);
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.message === 'Mail Inviata') {
//         displayConfirmationMessage(thisForm);
//         thisForm.reset();
//       } else {
//         throw new Error(data.message ? data.message : 'Form submission failed.');
//       }
//     })
//     .catch(error => {
//       displayError(thisForm, error);
//     });
// }

// function displayConfirmationMessage(thisForm) {
//   let sentMessage = thisForm.querySelector('.sent-message');
//   sentMessage.style.display = 'block';
// }

// })();

// function php_email_form_submit(thisForm, action) {
//   let formData = new FormData(thisForm);

//   fetch(action, {
//     method: 'POST',
//     body: formData,
//     headers: { 'X-Requested-With': 'XMLHttpRequest' }
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`);
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.message === 'Mail Inviata') {
//         displayConfirmationMessage(thisForm);
//         thisForm.reset();
//       } else {
//         throw new Error(data.message ? data.message : 'Form submission failed.');
//       }
//     })
//     .catch(error => {
//       displayError(thisForm, error);
//     });
// }

// function displayConfirmationMessage(thisForm) {
//   let alert = thisForm.querySelector('.alert');
//   let okButton = thisForm.querySelector('#ok-button');
//   alert.style.display = 'block';

//   okButton.addEventListener('click', function () {
//     alert.style.display = 'none';
//   });
// }
