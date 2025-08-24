AOS.init();

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            // Change hamburger icon to close icon (X) and back
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // --- Theme Toggle Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
    
    // --- Back to Top Button Functionality ---
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }

    // --- Navbar Hide/Show on Scroll ---
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                // User is scrolling down and past the header
                navbar.classList.add('navbar-hidden');
            } else {
                // User is scrolling up or is near the top of the page
                navbar.classList.remove('navbar-hidden');
            }
            lastScrollY = window.scrollY;
        });
    }

    // --- Chatbot Initialization ---
    try {
        if (typeof JagratChatbot !== 'undefined') {
            const chatbot = new JagratChatbot();
            if (typeof chatbot.initEventListeners === 'function') {
                chatbot.initEventListeners();
            }
        } else {
            console.error("JagratChatbot class not found.");
        }
    } catch (e) {
        console.error("Could not initialize chatbot:", e);
    }
});