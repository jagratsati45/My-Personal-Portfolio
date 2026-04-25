
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 768;
    tsParticles.load("particles-js", {
        background: {
            color: {
                value: "#1a1d26"
            }
        },
        fpsLimit: isMobile ? 30 : 60,
        interactivity: {
            events: {
                onHover: {
                    enable: !isMobile,
                    mode: "repulse"
                },
                onClick: {
                    enable: !isMobile,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },
        particles: {
            color: {
                value: "#ffffff"
            },
            links: {
                color: "#ffffff",
                distance: isMobile ? 100 : 150,
                enable: true,
                opacity: isMobile ? 0.12 : 0.2,
                width: 1
            },
            collisions: {
                enable: !isMobile
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce"
                },
                random: false,
                speed: isMobile ? 0.4 : 1,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: isMobile ? 20 : 80
            },
            opacity: {
                value: 0.2
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 1, max: isMobile ? 3 : 5 },
            }
        },
        detectRetina: true
    });
});
AOS.init({ once: true, duration: 500, easing: 'ease-out', disable: window.innerWidth < 768 });
document.addEventListener('DOMContentLoaded', () => {


    const hamburger = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            document.body.classList.toggle('menu-open'); // <-- THIS LINE IS THE KEY CHANGE


            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });


        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                document.body.classList.remove('menu-open'); // <-- ALSO CLOSE OVERLAY HERE
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }


    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // --- Throttled scroll handlers using rAF for 60fps scrolling ---
    let scrollTicking = false;
    const backToTopBtn = document.getElementById('back-to-top-btn');
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    function onScrollUpdate() {
        const currentScrollY = window.scrollY;

        // Back-to-top button visibility
        if (backToTopBtn) {
            if (currentScrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Navbar auto-hide on scroll down
        if (navbar) {
            if (lastScrollY < currentScrollY && currentScrollY > 100) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
        }

        lastScrollY = currentScrollY;
        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(onScrollUpdate);
            scrollTicking = true;
        }
    }, { passive: true });

});
