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
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const rut = document.getElementById('rut').value.trim();
            const message = document.getElementById('message').value.trim();

            const errorSpans = document.querySelectorAll('.error-msg');
            errorSpans.forEach(span => span.style.display = 'none');
            document.getElementById('form-success').style.display = 'none';

            let hasErrors = false;

            // Name Validation
            if (name.length < 3) {
                const nameErr = document.getElementById('name-error');
                nameErr.textContent = 'El nombre es muy corto.';
                nameErr.style.display = 'block';
                hasErrors = true;
            }

            // Email Regex Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                const emailErr = document.getElementById('email-error');
                emailErr.textContent = 'Por favor, ingresa un correo electrónico corporativo válido.';
                emailErr.style.display = 'block';
                hasErrors = true;
            }

            // Phone Regex Validation (Chilean format +56 9 XXXX XXXX or similar)
            const phoneCleaned = phone.replace(/\s/g, ''); 
            if (phoneCleaned.length < 8) {
                const phoneErr = document.getElementById('phone-error');
                phoneErr.textContent = 'Ingresa un número de teléfono válido (ej: +56 9 1234 5678).';
                phoneErr.style.display = 'block';
                hasErrors = true;
            }

            if (hasErrors) return;

            // Visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const submitBtnText = document.getElementById('btn-text');
            const originalText = submitBtnText.textContent;
            
            submitBtnText.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Real API Call (FormSubmit.co via AJAX)
            fetch('https://formsubmit.co/ajax/contacto@diffsii.com', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nombre: name,
                    correo: email,
                    telefono: phone,
                    rut: rut,
                    mensaje: message,
                    _subject: "Nuevo Lead: " + name
                })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('form-success').style.display = 'block';
                submitBtnText.textContent = '¡Enviado!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtnText.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    document.getElementById('form-success').style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                console.error('Error enviando formulario:', error);
                const msgErr = document.getElementById('message-error');
                msgErr.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta escribiendo a contacto@diffsii.com directamente.';
                msgErr.style.display = 'block';
                
                submitBtnText.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            });
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
