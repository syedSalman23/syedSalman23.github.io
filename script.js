// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode (optional feature)
const toggleButton = document.querySelector('#dark-mode-toggle');
toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-gray-900');
});

// Contact Form Submission Handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
        // You can replace this with actual form submission logic, like sending the data to a server
        alert(`Thank you, ${name}! Your message has been sent.`);
        e.target.reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});

// Optional: Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });

    document.querySelectorAll('.fadeIn').forEach(section => {
        observer.observe(section);
    });
});

// Optional: FadeIn animation using Tailwind CSS utility classes
document.querySelectorAll('.fadeIn').forEach(section => {
    section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
});

