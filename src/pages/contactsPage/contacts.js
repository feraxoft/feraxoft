import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import '../../js/toogleModal';

const SERVICE_ID = 'service_sjub4p4';
const TEMPLATE_ID = 'template_aqc7han';
const PUBLIC_KEY = 'RCbRpHCE5ZYDG6Ivp';

const contactsForm = document.querySelector('.contacts-form');

contactsForm.addEventListener('submit', sendMessage);

function sendMessage(e) {
  e.preventDefault();

  const form = e.target;

  const params = {
    userName: form.elements.name.value,
    userEmail: form.elements.email.value,
    userMessage: form.elements.message.value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      response => {
        Toastify({
          text: 'Your message has been successfully sent!',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          stopOnFocus: true,
        }).showToast();
        form.reset();
      },
      err => {
        Toastify({
          text: 'Something went wrong! Please, try again!',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          stopOnFocus: true,
        }).showToast();
      }
    );
}
