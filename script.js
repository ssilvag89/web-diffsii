/* 
  DiffSii Premium UI/UX Interactions 
*/

document.addEventListener('DOMContentLoaded', () => {
    // 0. UTM Tracking System (Capture and Persist)
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    let currentUTMs = JSON.parse(sessionStorage.getItem('diffsii_utms') || '{}');
    let utmsUpdated = false;
    
    utmKeys.forEach(param => {
        if (urlParams.has(param)) {
            currentUTMs[param] = urlParams.get(param);
            utmsUpdated = true;
        }
    });
    
    if (utmsUpdated) {
        sessionStorage.setItem('diffsii_utms', JSON.stringify(currentUTMs));
    }

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
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

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
                    _subject: "Nuevo Lead de DiffSii: " + name,
                    ...currentUTMs
                })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('form-success').style.display = 'flex';
                    submitBtnText.textContent = '¡Enviado!';
                    
                    // Tracking: Lead Generado Exitoso
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'generate_lead', {
                            'form_name': 'demo_consultiva',
                            ...currentUTMs
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

    // =========================================================================
    // 6. Interactive Platform Showcase Carousel
    // =========================================================================
    const carouselWrapper = document.getElementById('platform-showcase');
    if (carouselWrapper) {
        const track = document.getElementById('carousel-track');
        const slides = carouselWrapper.querySelectorAll('.carousel-slide');
        const tabs = carouselWrapper.querySelectorAll('.carousel-tab');
        const indicators = carouselWrapper.querySelectorAll('.indicator-dot');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const toggleBtn = document.getElementById('carousel-autoplay-toggle');
        const toggleIcon = document.getElementById('toggle-icon');
        const toggleText = toggleBtn ? toggleBtn.querySelector('.toggle-text') : null;
        const zoomTrigger = document.getElementById('carousel-zoom-trigger');
        const lightbox = document.getElementById('carousel-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxBackdrop = document.getElementById('lightbox-backdrop');

        let currentIndex = 0;
        const totalSlides = slides.length;
        let isAutoplayActive = true;
        let isHovered = false;
        let autoplayTimer = null;
        const slideInterval = 5500;

        function updateCarousel(newIndex) {
            currentIndex = (newIndex + totalSlides) % totalSlides;
            
            // Move track
            if (track) {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Update slide classes
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentIndex);
            });

            // Update tab buttons
            tabs.forEach((tab, idx) => {
                const isActive = idx === currentIndex;
                tab.classList.toggle('active', isActive);
                tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            // Update indicator dots
            indicators.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        }

        function nextSlide() {
            updateCarousel(currentIndex + 1);
        }

        function prevSlide() {
            updateCarousel(currentIndex - 1);
        }

        function startAutoplay() {
            stopAutoplay();
            if (isAutoplayActive && !isHovered) {
                autoplayTimer = setInterval(nextSlide, slideInterval);
            }
        }

        function stopAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }

        // Tab click events
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetSlide = parseInt(tab.getAttribute('data-slide'), 10);
                updateCarousel(targetSlide);
                startAutoplay();
            });
        });

        // Indicator dots click
        indicators.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetSlide = parseInt(dot.getAttribute('data-slide'), 10);
                updateCarousel(targetSlide);
                startAutoplay();
            });
        });

        // Nav buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
                startAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
                startAutoplay();
            });
        }

        // Pause on hover
        carouselWrapper.addEventListener('mouseenter', () => {
            isHovered = true;
            stopAutoplay();
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            isHovered = false;
            startAutoplay();
        });

        // Toggle Autoplay button
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                isAutoplayActive = !isAutoplayActive;
                if (isAutoplayActive) {
                    startAutoplay();
                    if (toggleText) toggleText.textContent = 'Autoplay activo';
                    if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'pause');
                } else {
                    stopAutoplay();
                    if (toggleText) toggleText.textContent = 'Pausado';
                    if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'play');
                }
                if (window.lucide) lucide.createIcons();
            });
        }

        // Keyboard navigation
        carouselWrapper.setAttribute('tabindex', '0');
        carouselWrapper.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoplay();
            }
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        carouselWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diffX = touchEndX - touchStartX;
            if (Math.abs(diffX) > 40) {
                if (diffX < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                startAutoplay();
            }
        }, { passive: true });

        // Lightbox Modal Handling
        function openLightbox(imgSrc, captionText) {
            if (!lightbox || !lightboxImg) return;
            stopAutoplay();
            lightboxImg.src = imgSrc;
            if (lightboxCaption) {
                lightboxCaption.textContent = captionText || 'Plataforma DiffSii - Vista Ejecutiva en Alta Resolución';
            }
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            if (window.lucide) lucide.createIcons();
        }

        function closeLightbox() {
            if (!lightbox) return;
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            startAutoplay();
        }

        if (zoomTrigger) {
            zoomTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const activeImg = slides[currentIndex].querySelector('img');
                const titleText = slides[currentIndex].querySelector('.slide-title');
                if (activeImg) {
                    openLightbox(activeImg.src, titleText ? titleText.textContent : '');
                }
            });
        }

        // Clicking slide image opens zoom
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img) {
                img.addEventListener('click', () => {
                    const titleText = slide.querySelector('.slide-title');
                    openLightbox(img.src, titleText ? titleText.textContent : '');
                });
            }
        });

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });

        // Initialize icons inside carousel
        if (window.lucide) lucide.createIcons();

        // Start autoplay on page load
        startAutoplay();
    }

    // =========================================================================
    // 7. Pricing Toggle (Mensual / Anual con 20% OFF)
    // =========================================================================
    const billingSwitchBtn = document.getElementById('billing-switch-btn');
    const labelMonthly = document.getElementById('toggle-label-monthly');
    const labelAnnual = document.getElementById('toggle-label-annual');
    const priceNumbers = document.querySelectorAll('.plan-price-num');
    const subtextBasico = document.getElementById('subtext-basico');
    const subtextStart = document.getElementById('subtext-start');
    const subtextPrime = document.getElementById('subtext-prime');
    const planCtas = document.querySelectorAll('.plan-cta');

    let isAnnualBilling = false;

    function setBillingCycle(annual) {
        isAnnualBilling = annual;
        if (billingSwitchBtn) {
            billingSwitchBtn.classList.toggle('annual', isAnnualBilling);
        }
        if (labelMonthly) labelMonthly.classList.toggle('active', !isAnnualBilling);
        if (labelAnnual) labelAnnual.classList.toggle('active', isAnnualBilling);

        priceNumbers.forEach(priceEl => {
            const monthlyVal = priceEl.getAttribute('data-monthly');
            const annualVal = priceEl.getAttribute('data-annual');
            if (annualVal) {
                priceEl.textContent = isAnnualBilling ? annualVal : monthlyVal;
            }
        });

        if (subtextBasico) {
            subtextBasico.textContent = isAnnualBilling ? "4.8 UF facturado al año (Ahorras 1.2 UF)" : "Facturación mes a mes";
        }
        if (subtextStart) {
            subtextStart.textContent = isAnnualBilling ? "9.6 UF facturado al año (Ahorras 2.4 UF)" : "Facturación mes a mes";
        }
        if (subtextPrime) {
            subtextPrime.textContent = isAnnualBilling ? "19.2 UF facturado al año (Ahorras 4.8 UF)" : "Facturación mes a mes";
        }

        // Update links with billing param
        planCtas.forEach(cta => {
            const currentHref = cta.getAttribute('href');
            if (currentHref && currentHref.includes('contratacion.html')) {
                const url = new URL(currentHref, window.location.origin);
                if (isAnnualBilling) {
                    url.searchParams.set('billing', 'annual');
                } else {
                    url.searchParams.delete('billing');
                }
                cta.setAttribute('href', url.pathname + url.search);
            }
        });
    }

    if (billingSwitchBtn) {
        billingSwitchBtn.addEventListener('click', () => {
            setBillingCycle(!isAnnualBilling);
        });
    }
    if (labelMonthly) {
        labelMonthly.addEventListener('click', () => setBillingCycle(false));
    }
    if (labelAnnual) {
        labelAnnual.addEventListener('click', () => setBillingCycle(true));
    }

    // =========================================================================
    // 8. "Diseñado a la Medida de Tu Rol" (Pestañas de Segmentación)
    // =========================================================================
    const roleTabBtns = document.querySelectorAll('.role-tab-btn');
    const rolePanels = document.querySelectorAll('.role-panel');

    roleTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetRole = btn.getAttribute('data-role');

            roleTabBtns.forEach(b => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            rolePanels.forEach(panel => {
                const isTarget = panel.id === `role-panel-${targetRole}`;
                panel.classList.toggle('active', isTarget);
            });
        });
    });

    // =========================================================================
    // 9. FAQ Accordion (Acordeón Interactivo Suave)
    // =========================================================================
    const faqCards = document.querySelectorAll('.faq-card-item');

    faqCards.forEach(card => {
        const trigger = card.querySelector('.faq-card-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isOpen = card.classList.contains('open');

                // Si se desea acordeón exclusivo (uno a la vez):
                faqCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('open');
                        const otherTrigger = otherCard.querySelector('.faq-card-trigger');
                        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    }
                });

                card.classList.toggle('open', !isOpen);
                trigger.setAttribute('aria-expanded', (!isOpen).toString());
            });
        }
    });

    // =========================================================================
    // 10. Mobile Navigation Drawer (Menú Hamburguesa)
    // =========================================================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    const mobileDrawerClose = document.getElementById('mobile-drawer-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileDrawer() {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileDrawer() {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
    if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
    });

    // Re-initialize Lucide Icons across all dynamically configured sections
    if (window.lucide) {
        lucide.createIcons();
    }
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
