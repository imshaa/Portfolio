// Handle form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(form);
    const responseDiv = document.getElementById('form-response');
    
    // Simulate form submission (replace with actual AJAX call)
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // or response.json() if your server returns JSON
        } else {
            throw new Error('Network response was not ok. Status: ' + response.status);
        }
    })
    .then(data => {
        responseDiv.textContent = 'Message sent successfully!';
        responseDiv.style.color = 'green';
        form.reset(); // Reset form after successful submission
    })
    .catch(error => {
        responseDiv.textContent = 'There was a problem with your submission: ' + error.message;
        responseDiv.style.color = 'red';
    });
});