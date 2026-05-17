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
            const messageElement = document.getElementById('message');
            const message = messageElement ? messageElement.value.trim() : 'Sin mensaje';

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

            // Phone Regex Validation (Solo números locales o con formato +569)
            const phoneCleaned = phone.replace(/\s|\+/g, ''); 
            if (!/^[0-9]{8,12}$/.test(phoneCleaned)) {
                const phoneErr = document.getElementById('phone-error');
                phoneErr.textContent = 'Ingresa un número de teléfono válido (ej: +56 9 1234 5678).';
                phoneErr.style.display = 'block';
                hasErrors = true;
            }

            // RUT Regex Validation (If provided)
            if (rut.length > 0) {
                let rutStr = rut.replace(/\./g, ''); 
                if (!isValidRUT(rutStr)) {
                    const rutErr = document.getElementById('rut-error');
                    rutErr.textContent = 'RUT de empresa inválido. Revísalo e intenta de nuevo.';
                    rutErr.style.display = 'block';
                    hasErrors = true;
                }
            }

            if (hasErrors) return;

            // Visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const submitBtnText = document.getElementById('btn-text');
            const originalText = submitBtnText.textContent;
            
            submitBtnText.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Envío por AJAX a Formspree (Previene la página blanca de éxito de Formspree)
            fetch(contactForm.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    rut: rut,
                    mensaje: message,
                    _subject: "Nuevo Lead de DiffSii: " + name
                })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('form-success').style.display = 'flex';
                    submitBtnText.textContent = '¡Enviado!';
                    
                    // Tracking: Lead Generado Exitoso
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'generate_lead', {
                            'form_name': 'demo_consultiva'
                        });
                    }
                    
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtnText.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                        document.getElementById('form-success').style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error("Respuesta de red no fue ok.");
                }
            })
            .catch(error => {
                console.error('Error enviando formulario:', error);
                const generalErr = document.getElementById('email-error');
                if (generalErr) {
                    generalErr.textContent = 'Hubo un problema de conexión. Intenta nuevamente o contáctanos por WhatsApp.';
                    generalErr.style.display = 'block';
                }
                
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

    // --- 6. Eventos y Tracking Avanzado de GA4 ---
    
    // A. Rastreo de visibilidad de Secciones (Scroll Depth)
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtiene el ID, o en su defecto la primera clase, para identificar la sección
                const sectionName = entry.target.id || entry.target.className.split(' ')[0] || 'seccion_generica';
                
                // Evita disparar el evento múltiples veces por sesión (hacia arriba y abajo)
                if (!entry.target.dataset.gaTracked) {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll_depth_section', {
                            'section_viewed': sectionName
                        });
                    }
                    entry.target.dataset.gaTracked = "true";
                }
            }
        });
    }, { threshold: 0.45 }); // Se activa cuando el 45% de la sección entra en pantalla
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // B. Rastreo de Clics en Botones (Interacciones)
    document.querySelectorAll('.btn-primary, .btn-nav, .btn-ghost, a').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (typeof gtag !== 'undefined') {
                const btnText = btn.textContent.trim() || 'icon';
                const destination = btn.getAttribute('href') || 'null';
                
                // Filtramos un poco para no trackear clics vacíos
                if (destination !== '#' && destination !== 'null') {
                    gtag('event', 'click_cta', {
                        'button_text': btnText.substring(0, 30),
                        'destination_url': destination
                    });
                }
            }
        });
    });
});

// --- Funciones Globales para RUT ---
window.formatRUT = function(rutInput) {
    let valor = rutInput.value.replace(/[^0-9kK]/g, "");
    if (valor.length > 1) {
        let cuerpo = valor.slice(0, -1);
        let dv = valor.slice(-1).toUpperCase();
        rutInput.value = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + dv;
    } else {
        rutInput.value = valor;
    }
};

window.isValidRUT = function(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    let tmp = rutCompleto.split('-');
    let digv = tmp[1]; 
    let rut = tmp[0];
    if (digv == 'K') digv = 'k';
    
    let M=0,S=1;
    for(;rut;rut=Math.floor(rut/10)) S=(S+rut%10*(9-M++%6))%11;
    let dvCalculado = S ? S-1 : 'k';
    return (dvCalculado == digv);
};
