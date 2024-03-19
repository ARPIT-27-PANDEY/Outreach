// You can add JavaScript for form validation here if needed
// For example, to prevent form submission if phone number is invalid
const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  const phoneInput = document.getElementById('phone');
  const phoneValue = phoneInput.value;
  if (phoneValue.length !== 10) {
    event.preventDefault(); // Prevent form submission
    alert('Please enter a valid 10-digit phone number.');
  }
});
