document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Provide instant feedback to the user
    document.querySelector('button[type="submit"]').disabled = true;
    document.querySelector('button[type="submit"]').innerText = 'Sending...';

    // Send the email using EmailJS
    emailjs.send("service_0ie0u4g", "template_mc9hxka", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        // Immediate feedback to the user
        alert('Message sent successfully!');
        console.log('SUCCESS!', response.status, response.text);

        // Reset form fields
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Message failed to send. Please try again later.');
        console.log('FAILED...', error);
    }).finally(function() {
        // Reset button state regardless of the outcome
        document.querySelector('button[type="submit"]').disabled = false;
        document.querySelector('button[type="submit"]').innerText = 'Send Message';
    });
});


