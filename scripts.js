document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (additional validation can be added)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Display success message (in a real scenario, you'd send this data to a server)
    document.getElementById('statusMessage').textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';

    // Clear form fields
    document.getElementById('contactForm').reset();
});
