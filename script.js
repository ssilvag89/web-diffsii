/* 
  DiffSii Premium UI/UX Interactions 
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            } else {
                // Optional: remove if you want them to hide again
                // el.classList.remove('active');
            }
        });
    };

    // Run once on load
    revealOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 3. Navbar background change on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '15px 5%';
            nav.style.borderBottomColor = 'rgba(99, 102, 241, 0.4)';
        } else {
            nav.style.padding = '20px 5%';
            nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
        }
    });

    // 4. Contact Form Validation and Submission
    // Lint IDs: 04048788-2cba-4a6e-9dc4-b05a6a322669, 0b71adb9-a1db-40ae-8bcc-4beb311fbf48, 693b17a2-cf65-43df-b61c-a243c7057a00
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Email Regex Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico corporativo válido.');
                return;
            }

            // Phone Regex Validation (Chilean format +56 9 XXXX XXXX or similar)
            const phoneCleaned = phone.replace(/\s/g, ''); 
            if (phoneCleaned.length < 9) {
                alert('Por favor, ingresa un número de teléfono válido (ej: +56 9 1234 5678).');
                return;
            }

            // Visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate API call
            setTimeout(() => {
                alert(`¡Gracias ${name}! Hemos recibido tu consulta exitosamente.`);
                submitBtn.textContent = '¡Enviado!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 3000);
            }, 1000);
        });
    }

    // 5. Card Hover Micro-animations (handled via CSS mainly, but adding GSAP style feel)
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Can add JS-driven effects here if needed
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
