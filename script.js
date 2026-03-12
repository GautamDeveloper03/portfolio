// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightNavLinks();
    });

    // 3. Highlight Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    
    function highlightNavLinks() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    // 4. Typing Effect for Hero Section
    const typeTarget = document.querySelector('.typing-text');
    if (typeTarget) {
        const words = ['Java Developer', 'Full Stack Enthusiast', 'Problem Solver'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typeTarget.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeTarget.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = parseInt(Math.random() * 50) + 100; // random speed 100-150ms
            
            if (isDeleting) {
                typeSpeed /= 2; // delete faster
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; // pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // pause before typing next word
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Start typing effect after 1 second
        setTimeout(type, 1000);
    }

    // 5. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
                
                // Trigger progress bar animations if in skills section
                if (reveal.classList.contains('skills')) {
                    animateProgressBars();
                }
            }
        });
    }
    
    // Check elements on load and scroll
    checkReveal();
    window.addEventListener('scroll', checkReveal);

    // 6. Animate Progress Bars
    let progressAnimated = false;
    
    function animateProgressBars() {
        if (!progressAnimated) {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
            progressAnimated = true;
        }
    }

    // 7. Form Submission Handler (Prevent default reload)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.style.opacity = '0.7';
            
            // Simulate sending (you can replace this with actual EmailJS or backend integration)
            setTimeout(() => {
                btn.innerHTML = '<span>Sent Successfully!</span> <i class="fa-solid fa-check"></i>';
                btn.style.background = 'linear-gradient(135deg, #2ea043 0%, #238636 100%)';
                this.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});
