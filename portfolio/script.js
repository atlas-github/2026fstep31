// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle contact form submission without a backend
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill out all fields before sending.';
      return;
    }

    formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
    contactForm.reset();
  });
}
