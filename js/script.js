// Toggle Navbar Menu
document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Top Button
let scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    let json = JSON.stringify(object);
    
    fetch('http://localhost:3000/contact', {  // Replace with your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

// ParticlesJS Initialization
if (window.particlesJS) {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js loaded');
    });
}

// // Tilt.js Initialization
// document.querySelectorAll('.tilt').forEach(el => {
//     VanillaTilt.init(el, {
//         max: 25,
//         speed: 400,
//         glare: true,
//         'max-glare': 0.5
//     });
// });


document.addEventListener('DOMContentLoaded', (event) => {
    const tiltElements = document.querySelectorAll('.tilt');
    VanillaTilt.init(tiltElements, {
        max: 25,
        speed: 400
    });

    // Optional: Log the initialization
    console.log('VanillaTilt initialized for elements:', tiltElements);
});