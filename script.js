// Toggle icon for the navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll to sections on clicking navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Activate corresponding navbar links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add("active");

            // Apply animation to the active section
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});
