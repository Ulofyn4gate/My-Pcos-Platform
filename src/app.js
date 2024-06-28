// Add JavaScript functionality if needed (e.g., form handling, animations)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted successfully!');
    });

    // Additional JavaScript functionality for community interactions
    const joinButton = document.querySelector('button');
    joinButton.addEventListener('click', function() {
        alert('Thank you for joining our community!');
    });
});
