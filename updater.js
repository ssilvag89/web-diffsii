const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FD3H1EKJ0K"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-FD3H1EKJ0K');
    </script>
    <script src="env-config.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DiffSii - Control Tributario Autónomo entre ERP y SII</title>
    <meta name="description" content="Automatiza conciliaciones tributarias, cruza el RCV del SII y tu ERP al instante. SaaS B2B en Chile diseñado para erradicar descuadres de IVA.">
    <meta name="keywords" content="conciliación sii chile, software tributario chile, diferencias facturas sii, auditoría dte chile, cruce sii erp">
    
    <meta property="og:title" content="DiffSii - Infraestructura Tributaria">
    <meta property="og:description" content="Detecta errores tributarios antes del cierre mensual resolviendo facturas invisibles.">
    <meta property="og:image" content="logo.png">
    <meta property="og:type" content="website">

    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>

    <nav>
        <div class="logo-wrapper">
            <img src="logo.png" alt="DiffSii Logo" class="logo-img">
        </div>
        <div class="nav-links" style="display: flex; gap: 30px;">
            <a href="#problema">Solución</a>
            <a href="#seguridad">Seguridad</a>
            <a href="#planes">Planes</a>
            <a href="#faq">FAQ</a>
        </div>
        <div style="display: flex; gap: 15px; align-items: center;">
            <a href="#" style="color: var(--text-main); text-decoration: none; font-weight: 500; font-size: 0.95rem;">Login</a>
            <a href="#demo" class="btn-nav" style="text-decoration: none;">Solicitar Demo</a>
        </div>
    </nav>

    <main>
        <!-- 1. Hero -->
        <section class="hero-premium">
            <div class="badge">Auditoría Fiscal Automatizada B2B</div>
            <h1>Control tributario autónomo entre <span class="text-gradient">ERP y SII</span> en tiempo real.</h1>
            <p>DiffSii automatiza conciliaciones tributarias, detecta errores invisibles y protege tu operación financiera de multas y descuadres de IVA 24/7.</p>
            <div style="display: flex; gap: 20px; justify-content: center; margin-bottom: 20px;">
                <a href="#demo" class="btn-primary" style="padding: 16px 35px; text-decoration: none; font-size: 1.1rem;">Solicitar Demo</a>
                <a href="#planes" class="btn-nav" style="padding: 16px 35px; text-decoration: none; font-size: 1.1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border);">Ver Planes</a>
            </div>
            
            <div class="hero-mockup">
                <img src="img/grafico.png" alt="Dashboard Premium DiffSii" loading="lazy">
            </div>
        </section>

        <!-- 2. Prueba Social -->
        <section class="social-proof">
            <p>Empresas chilenas, CFOs y auditores confían en DiffSii</p>
            <div class="stats-grid">
                <div class="stat-item"><h3>+5M</h3><span>Documentos Auditados</span></div>
                <div class="stat-item"><h3>+5k</h3><span>Horas Ahorradas m/m</span></div>
                <div class="stat-item"><h3>100%</h3><span>Rigor SII</span></div>
            </div>
        </section>

        <!-- 3. Problema -->
        <section id="problema" class="section container">
            <div class="section-header reveal">
                <h2>El cierre mensual no debería ser una pesadilla.</h2>
                <p>La dependencia extrema del Excel y cruces manuales generan riesgos ocultos en tu empresa.</p>
            </div>
            <div class="bento-grid problem-grid reveal">
                <div class="step-card danger-card">
                    <i data-lucide="file-spreadsheet" style="width: 35px; height: 35px;"></i>
                    <h4>Cruces en Excel</h4>
                    <p>Horas desperdiciadas comparando miles de filas propiciando severos errores humanos.</p>
                </div>
                <div class="step-card danger-card">
                    <i data-lucide="file-question" style="width: 35px; height: 35px;"></i>
                    <h4>Facturas Faltantes</h4>
                    <p>Documentos que tu ERP ignora pero que el SII efectivamente te está cobrando hoy.</p>
                </div>
                <div class="step-card danger-card">
                    <i data-lucide="calculator" style="width: 35px; height: 35px;"></i>
                    <h4>IVA Incorrecto</h4>
                    <p>Pagar impuestos excesivos por descuadres temporales entre la realidad y la contabilidad.</p>
                </div>
                <div class="step-card danger-card">
                    <i data-lucide="clock" style="width: 35px; height: 35px;"></i>
                    <h4>Horas Perdidas</h4>
                    <p>Tu equipo financiero y auditores perdiendo su valioso talento en digitación repetitiva.</p>
                </div>
                <div class="step-card danger-card">
                    <i data-lucide="alert-triangle" style="width: 35px; height: 35px;"></i>
                    <h4>Riesgo Tributario</h4>
                    <p>Exposición constante a notificaciones y fiscalizaciones sorpresa por el RCV inconsistente.</p>
                </div>
                <div class="step-card danger-card">
                    <i data-lucide="eye-off" style="width: 35px; height: 35px;"></i>
                    <h4>ERP Ciego</h4>
                    <p>Un software contable tradicional que no refleja los movimientos fiscales en tiempo real.</p>
                </div>
            </div>
        </section>

        <!-- 4. Solución -->
        <section class="section container" style="margin-top: 50px;">
            <div class="section-header reveal">
                <h2>DiffSii trabaja mientras tu equipo duerme.</h2>
                <p>Nuestra infraestructura SaaS elimina la fricción del cruce de datos.</p>
            </div>
            <div class="steps-container reveal">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <i data-lucide="plug" style="margin-bottom: 15px; color: var(--primary);"></i>
                    <h4>Conectamos SII y ERP</h4>
                    <p>Integración nativa e invisible; recolectando firmas y documentos sin interrumpir tu operación.</p>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <i data-lucide="cpu" style="margin-bottom: 15px; color: var(--primary);"></i>
                    <h4>Auditamos Automáticamente</h4>
                    <p>El motor inteligente empareja el libro de compras y ventas línea por línea con tu contabilidad.</p>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <i data-lucide="bell-ring" style="margin-bottom: 15px; color: var(--primary);"></i>
                    <h4>Alertamos Diferencias</h4>
                    <p>Si existe una factura "Rechazada en ERP pero Aceptada en SII", el dashboard lo notifica en rojo.</p>
                </div>
            </div>
        </section>

        <!-- 5. Beneficios -->
        <section class="section container reveal">
            <div class="bento-grid" style="grid-template-columns: repeat(3, 1fr);">
                <div class="feature-card">
                    <div class="feature-icon"><i data-lucide="shield-check"></i></div>
                    <h3>Garantía RCV</h3>
                    <p>Absoluta certeza de que lo pagado en el F29 es idéntico a lo centralizado.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i data-lucide="bar-chart-2"></i></div>
                    <h3>Dashboard Ejecutivo</h3>
                    <p>Visualiza KPIs de compras, ventas y exposición tributaria condensados.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i data-lucide="zap"></i></div>
                    <h3>Implementación Ágil</h3>
                    <p>Tu empresa estará auditando documentos el mismo día de la contratación.</p>
                </div>
            </div>
        </section>

        <!-- 6. Seguridad -->
        <section id="seguridad" class="section security-section">
            <div class="container">
                <div class="section-header reveal">
                    <h2>Seguridad empresarial de nivel bancario</h2>
                    <p>Tus credenciales y datos contables están en una bóveda inviolable.</p>
                </div>
                <div class="bento-grid" style="grid-template-columns: repeat(4, 1fr);">
                    <div class="step-card sec-card reveal">
                        <i data-lucide="lock" style="width: 32px; height: 32px; margin-bottom:10px;"></i>
                        <h4 style="font-size: 1.1rem;">Encriptación AES-256</h4>
                    </div>
                    <div class="step-card sec-card reveal">
                        <i data-lucide="file-key" style="width: 32px; height: 32px; margin-bottom:10px;"></i>
                        <h4 style="font-size: 1.1rem;">Gestión de PFX Aislada</h4>
                    </div>
                    <div class="step-card sec-card reveal">
                        <i data-lucide="server" style="width: 32px; height: 32px; margin-bottom:10px;"></i>
                        <h4 style="font-size: 1.1rem;">Infraestructura Cloud</h4>
                    </div>
                    <div class="step-card sec-card reveal">
                        <i data-lucide="users" style="width: 32px; height: 32px; margin-bottom:10px;"></i>
                        <h4 style="font-size: 1.1rem;">Accesos por Roles</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. Pricing -->
        <section id="planes" class="section container">
            <div class="section-header reveal">
                <h2>Infraestructura que escala contigo</h2>
                <p>Planes transparentes basados en el volumen operativo de tu RUT.</p>
            </div>
            
            <div class="pricing-4 reveal">
                <!-- Básico -->
                <div class="plan-c">
                    <h3>Básico</h3>
                    <div class="price">0.9 <span>UF/mes</span></div>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Para pequeñas empresas y consultores individuales.</p>
                    <ul>
                        <li><i data-lucide="check"></i> <span>Hasta 200 docs. al mes</span></li>
                        <li><i data-lucide="check"></i> <span>Diferencias RCV diarias</span></li>
                        <li><i data-lucide="check"></i> <span>2 Accesos</span></li>
                        <li><i data-lucide="check"></i> <span>Soporte por email</span></li>
                    </ul>
                    <a href="contratacion.html?plan=basico" class="btn-primary" style="display: block; text-align: center; background: rgba(255,255,255,0.05); color: #fff; text-decoration: none; padding: 12px; border-radius: 8px;">Probar Plan</a>
                </div>

                <!-- Start -->
                <div class="plan-c featured">
                    <div style="background: var(--gradient-hero); color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 100px; display: inline-block; margin-bottom: 15px;">RECOMENDADO</div>
                    <h3>Start</h3>
                    <div class="price">1.9 <span>UF/mes</span></div>
                    <p style="font-size: 0.9rem; color: var(--text-muted); opacity: 0.8;">Para estudios contables y empresas dinámicas.</p>
                    <ul>
                        <li><i data-lucide="check"></i> <span>Hasta 1.000 docs. al mes</span></li>
                        <li><i data-lucide="check"></i> <span>Alertas de descuadres en vivo</span></li>
                        <li><i data-lucide="check"></i> <span>10 Accesos configurables</span></li>
                        <li><i data-lucide="check"></i> <span>Reportabilidad avanzada</span></li>
                        <li><i data-lucide="check"></i> <span>Soporte Prioritario</span></li>
                    </ul>
                    <a href="contratacion.html?plan=start" class="btn-primary" style="display: block; text-align: center; text-decoration: none; padding: 12px; border-radius: 8px;">Comenzar Ahora</a>
                </div>

                <!-- Prime -->
                <div class="plan-c">
                    <h3>Prime</h3>
                    <div class="price">3.9 <span>UF/mes</span></div>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Para operaciones logísticas y financieras intensivas.</p>
                    <ul>
                        <li><i data-lucide="check"></i> <span>Hasta 5.000 docs. al mes</span></li>
                        <li><i data-lucide="check"></i> <span>Conciliación ERP Directa</span></li>
                        <li><i data-lucide="check"></i> <span>Accesos Ilimitados</span></li>
                        <li><i data-lucide="check"></i> <span>Auditoría de Acciones</span></li>
                        <li><i data-lucide="check"></i> <span>Soporte WhatsApp/Call</span></li>
                    </ul>
                    <a href="contratacion.html?plan=prime" class="btn-primary" style="display: block; text-align: center; background: rgba(255,255,255,0.05); color: #fff; text-decoration: none; padding: 12px; border-radius: 8px;">Probar Plan</a>
                </div>

                <!-- Enterprise -->
                <div class="plan-c" style="background: transparent; border: 1px dashed var(--glass-border);">
                    <h3>Enterprise</h3>
                    <div class="price">Custom</div>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Para Holdings, grupos de empresas y multi-RUT.</p>
                    <ul>
                        <li><i data-lucide="check"></i> <span>Facturación Ilimitada</span></li>
                        <li><i data-lucide="check"></i> <span>Múltiples RUT Consolidados</span></li>
                        <li><i data-lucide="check"></i> <span>Onboarding Dedicado</span></li>
                        <li><i data-lucide="check"></i> <span>SLA Garantizado (99.9%)</span></li>
                        <li><i data-lucide="check"></i> <span>API Privada</span></li>
                    </ul>
                    <a href="#demo" class="btn-primary" style="display: block; text-align: center; background: transparent; border: 1px solid var(--text-muted); color: #fff; text-decoration: none; padding: 12px; border-radius: 8px;">Contactar Ventas</a>
                </div>
            </div>
        </section>

        <!-- 8. FAQ -->
        <section id="faq" class="section container">
            <div class="section-header reveal">
                <h2>Preguntas Frecuentes</h2>
                <p>Todo lo que el equipo directivo necesita saber.</p>
            </div>
            <div class="faq-grid reveal">
                <div class="faq-item">
                    <h4>¿Se conecta con cualquier ERP?</h4>
                    <p>Sí, disponemos de integraciones nativas para los ERPs chilenos líderes (Bsale, Defontana, Softland), además de admitir archivos tabulados y JSON API para software a medida.</p>
                </div>
                <div class="faq-item">
                    <h4>¿Necesito instalar algún software?</h4>
                    <p>En lo absoluto. DiffSii opera 100% en la nube a través de tu navegador moderno, asegurando accesibilidad instantánea sin requerimientos técnicos locales ni servidores.</p>
                </div>
                <div class="faq-item">
                    <h4>¿Cuánto demora la implementación?</h4>
                    <p>La puesta en marcha es plug-and-play. Al validar la identidad y el certificado PFX de la empresa, el primer mapeo histórico toma menos de 40 minutos en disponibilizarse.</p>
                </div>
                <div class="faq-item">
                    <h4>¿Cómo protegen las credenciales del SII?</h4>
                    <p>Empleamos bóvedas criptográficas con protocolo AES-256 en reposo y TLS 1.3 en tránsito. Sus llaves PFX solo residen cifradas para el motor validador, aislando la vulnerabilidad humana.</p>
                </div>
            </div>
        </section>

        <!-- 9. Final CTA -->
        <section id="demo" class="cta-final reveal">
            <div class="container" style="max-width: 700px;">
                <div class="badge" style="background: rgba(99, 102, 241, 0.1); color: var(--primary); padding: 5px 15px; border-radius: 20px; font-weight: bold; margin-bottom: 20px; display: inline-block;">AGENDA LISTA</div>
                <h2>El próximo cierre mensual puede ser distinto.</h2>
                <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 40px;">Solicita una demo técnica consultiva y descubre cómo eliminar las horas de cruces en Excel para siempre.</p>
                
                <!-- Lead Capture Form -->
                <form id="contact-form" action="https://formsubmit.co/ajax/diffsii.notifica@gmail.com" method="POST" style="background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 30px; border-radius: 20px; text-align: left;">
                    <input type="hidden" name="_subject" value="Solicitud Demo/Contacto desde Landing Page">
                    <input type="hidden" name="_captcha" value="false">
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <label style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px; display: block;">Nombre Completo</label>
                            <input type="text" id="name" name="name" required style="width: 100%; background: #050505; border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 8px;">
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px; display: block;">Email Corporativo</label>
                            <input type="email" id="email" name="email" required style="width: 100%; background: #050505; border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 8px;">
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <label style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px; display: block;">Teléfono</label>
                            <input type="tel" id="phone" name="phone" required style="width: 100%; background: #050505; border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 8px;">
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px; display: block;">RUT Empresa (Opcional)</label>
                            <input type="text" id="rut" name="rut" oninput="if(window.formatRUT) window.formatRUT(this)" style="width: 100%; background: #050505; border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 8px;">
                        </div>
                    </div>
                    <div id="form-success" style="display: none; color: #10b981; font-weight: 600; margin-bottom: 15px; text-align: center;">✓ Solicitud recibida. Un ejecutivo te contactará en breve.</div>
                    <button type="submit" class="btn-primary" style="width: 100%; padding: 16px; font-size: 1.1rem; border-radius: 8px; border: none; cursor: pointer; background: var(--primary); color: white;"><span id="btn-text">Agendar Demo ahora</span></button>
                    <!-- Errors placeholder from script -->
                    <div id="email-error" class="error-msg" style="display:none;"></div>
                    <div id="phone-error" class="error-msg" style="display:none;"></div>
                    <div id="rut-error" class="error-msg" style="display:none;"></div>
                </form>
            </div>
        </section>
    </main>

    <a href="https://wa.me/56928294494?text=Hola,%20busco%20informaci%C3%B3n%20comercial%20del%20SaaS%20DiffSii" class="wa-float" target="_blank" title="Contacta por WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
    </a>

    <footer>
        <div class="container footer-grid">
            <div class="footer-col">
                <img src="logo.png" style="height:35px; width:auto; filter: grayscale(1); opacity: 0.7; margin-bottom: 20px; transform: scale(3.0); transform-origin: left center;">
                <p style="color: var(--text-muted); font-size: 0.9rem;">Tecnología financiera para asegurar el compliance tributario de Chile.</p>
            </div>
            <div class="footer-col">
                <h5>Contacto Web</h5>
                <a href="mailto:contacto@diffsii.com">contacto@diffsii.com</a>
                <a href="https://wa.me/56928294494" target="_blank">+56 9 2829 4494</a>
                <p style="color: var(--text-muted); margin-top: 10px; font-size: 0.9rem;">Servicios Tecnológicos SpA<br>RUT: 77.XXX.XXX-X<br>Santiago, Chile</p>
            </div>
            <div class="footer-col">
                <h5>Plataforma</h5>
                <a href="#">Ingreso Plataforma</a>
                <a href="#planes">Precios y Planes</a>
                <a href="#faq">Preguntas</a>
            </div>
            <div class="footer-col">
                <h5>Legal</h5>
                <a href="#">Términos del Servicio</a>
                <a href="#">Privacidad y Datos</a>
                <a href="#">Acuerdo ANS (SLA)</a>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 DiffSii. Todos los derechos reservados. Arquitectura Segura B2B.
        </div>
    </footer>

    <script src="script.js"></script>
    <script>
        lucide.createIcons();
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible'); // Let's just make them visible out of box if script fails
            observer.observe(el);
        });
    </script>
</body>
</html>
`;

const extraCss = `
/* --- PREMIUM B2B NEW CSS OVERRIDES --- */
.hero-premium {
    padding: 160px 5% 60px;
    text-align: center;
    max-width: 1050px;
    margin: 0 auto;
}
.hero-premium .badge {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 100px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    color: var(--text-muted);
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    letter-spacing: 1px;
    text-transform: uppercase;
}
.hero-premium h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 25px;
    letter-spacing: -2px;
}
.hero-premium p {
    font-size: 1.3rem;
    color: var(--text-muted);
    max-width: 750px;
    margin: 0 auto 40px;
}
.hero-mockup {
    margin-top: 60px;
    perspective: 1500px;
}
.hero-mockup img {
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 35px 100px rgba(92, 98, 236, 0.25);
    transform: rotateX(8deg) scale(0.95);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.hero-mockup:hover img {
    transform: rotateX(0deg) scale(1);
}
@media (max-width: 768px) {
    .hero-premium h1 { font-size: 2.8rem; }
    .hero-premium p { font-size: 1.1rem; }
    .hero-mockup img { transform: rotateX(0) scale(1); }
}

.social-proof {
    text-align: center;
    padding: 60px 5%;
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
}
.social-proof p {
    color: var(--text-muted);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 40px;
}
.stats-grid {
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
}
.stat-item h3 {
    font-size: 3.5rem;
    background: var(--gradient-hero);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0px;
    line-height: 1.2;
}
.stat-item span {
    color: var(--text-muted);
    font-weight: 500;
}
.section-header {
    text-align: center;
    margin-bottom: 70px;
}
.section-header h2 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    letter-spacing: -1px;
}
.section-header p {
    font-size: 1.2rem;
    color: var(--text-muted);
}
.problem-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}
.danger-card {
    background: linear-gradient(180deg, rgba(239, 68, 68, 0.03), transparent);
    border: 1px solid rgba(239, 68, 68, 0.15);
    padding: 35px;
    border-radius: 20px;
    text-align: left;
}
.danger-card h4 { font-size: 1.3rem; margin-bottom: 12px; }
.danger-card p { color: var(--text-muted); font-size: 1rem; }

.steps-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    position: relative;
}
.step-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--glass-border);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    transition: var(--transition);
}
.step-card:hover {
    transform: translateY(-8px);
    border-color: rgba(92, 98, 236, 0.5);
    box-shadow: 0 15px 45px rgba(92, 98, 236, 0.1);
}
.step-number {
    width: 60px;
    height: 60px;
    background: var(--gradient-hero);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0 auto 25px;
    box-shadow: 0 0 20px rgba(92, 98, 236, 0.4);
}
.step-card h4 { font-size: 1.3rem; margin-bottom: 15px; }
.step-card p { color: var(--text-muted); line-height: 1.6; }

.security-section {
    background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
    border-top: 1px solid rgba(16, 185, 129, 0.1);
    border-bottom: 1px solid rgba(16, 185, 129, 0.1);
    padding: 120px 5%;
}
.sec-card { background: rgba(0,0,0,0.6); padding: 30px; }
.sec-card i { color: #10b981; }

.pricing-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}
@media (max-width: 1024px) { .pricing-4 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .pricing-4 { grid-template-columns: 1fr; } }

.plan-c { 
    padding: 40px 30px; 
    border-radius: 20px; 
    text-align: left; 
    background: rgba(255,255,255,0.02); 
    border: 1px solid var(--glass-border); 
    display: flex;
    flex-direction: column;
}
.plan-c h3 { font-size: 1.5rem; margin-bottom: 15px; color: var(--text-muted); }
.plan-c .price { font-size: 2.8rem; font-weight: 800; margin-bottom: 25px; line-height: 1; }
.plan-c .price span { font-size: 1.1rem; color: var(--text-muted); font-weight: 400; }
.plan-c ul { list-style: none; margin: 30px 0; flex-grow: 1; }
.plan-c li { margin-bottom: 18px; display: flex; gap: 12px; font-size: 0.95rem; color: #e2e8f0; }
.plan-c i { color: var(--primary); width: 18px; flex-shrink: 0; }
.plan-c.featured { 
    border: 2px solid var(--primary); 
    background: rgba(92, 98, 236, 0.05); 
    transform: scale(1.05); 
    box-shadow: 0 20px 50px rgba(92, 98, 236, 0.15);
}
.plan-c.featured h3 { color: var(--primary); }

.faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto;
}
.faq-item {
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--glass-border);
    padding: 30px;
    border-radius: 16px;
}
.faq-item h4 { margin-bottom: 12px; font-size: 1.2rem; }
.faq-item p { color: var(--text-muted); font-size: 1rem; line-height: 1.6; }
@media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr; } }

.cta-final {
    text-align: center;
    padding: 120px 5%;
    background: linear-gradient(180deg, transparent, rgba(92, 98, 236, 0.1));
}
.cta-final h2 { font-size: 3.5rem; margin-bottom: 20px; letter-spacing: -1.5px; }

.wa-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #10b981;
    color: white;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
    z-index: 9999;
    transition: transform 0.3s;
}
.wa-float:hover { transform: scale(1.1) translateY(-5px); }
.wa-float svg { width: 36px; height: 36px; fill: currentColor; }

footer {
    border-top: 1px solid var(--glass-border);
    padding: 80px 5% 40px;
    background: #030303;
}
.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 60px;
}
@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; } }
.footer-col h5 { font-size: 1.1rem; margin-bottom: 25px; color: white; }
.footer-col a { display: block; color: var(--text-muted); text-decoration: none; margin-bottom: 15px; transition: color 0.3s; }
.footer-col a:hover { color: var(--text-main); }
.footer-bottom { text-align: center; border-top: 1px solid var(--glass-border); padding-top: 40px; color: var(--text-muted); font-size: 0.9rem; }
`;

fs.writeFileSync('index.html', indexHtml);
fs.appendFileSync('style.css', extraCss);

// Let's modify contratacion.html briefly to reflect the Básico plan at 0.9, Start at 1.9, Prime at 3.9
const contrPath = 'contratacion.html';
let contrText = fs.readFileSync(contrPath, 'utf8');
contrText = contrText.replace(/'basico': { name: 'Plan Básico', price: 1.0 }/, "'basico': { name: 'Plan Básico', price: 0.9 }");
contrText = contrText.replace(/'start': { name: 'Plan Start', price: 1.5 }/, "'start': { name: 'Plan Start', price: 1.9 }");
contrText = contrText.replace(/'prime': { name: 'Plan Prime', price: 2.0 }/, "'prime': { name: 'Plan Prime', price: 3.9 }");
fs.writeFileSync(contrPath, contrText);

console.log("SUCCESS");
