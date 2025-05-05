console.log("Portfolio script loaded successfully!");

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

// Toggle navigation when hamburger is clicked
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    });
});