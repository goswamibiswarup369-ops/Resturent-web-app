// Hamburger menu (enhanced for keyboard)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => { if (e.key === 'Enter') toggleMenu(); });
function toggleMenu() { navLinks.classList.toggle('active'); }

// Form validation with live feedback
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', validateForm);
    // Real-time validation
    ['name', 'email', 'message'].forEach(id => {
        document.getElementById(id).addEventListener('blur', validateField);
    });
}
function validateField(e) {
    const field = e.target;
    field.setCustomValidity('');
    if (!field.value.trim()) field.setCustomValidity('This field is required.');
    else if (field.id === 'email' && !field.value.includes('@')) field.setCustomValidity('Valid email required.');
    field.reportValidity();
}
function validateForm(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        alert('Thank you! We\'ll respond soon. (Demo)');
        form.reset();
    }
}

// Smooth scroll & close mobile menu
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Dropdown open/close on mobile
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdown && dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', (e) => {
        // Only use click toggle under 769px
        if (window.innerWidth <= 768) {
            e.preventDefault(); // stop immediate navigation to services.html
            dropdownContent.style.display =
                dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
}
