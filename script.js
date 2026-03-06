// ===========================
// NAVBAR â€“ sticky on scroll
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});

// ===========================
// HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.innerHTML = mobileMenu.classList.contains('open') ? 'âœ•' : '&#9776;';
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.innerHTML = '&#9776;';
    });
});

// ===========================
// MENU TABS FILTER
// ===========================
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active state
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.tab;

        menuCards.forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.style.display = show ? 'block' : 'none';
            card.style.animation = show ? 'fadeInUp 0.4s ease forwards' : '';
        });
    });
});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate sending
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        formSuccess.style.display = 'block';
        contactForm.reset();
        submitBtn.textContent = 'Enviar Mensaje â†’';
        submitBtn.disabled = false;

        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }, 1500);
});

// ===========================
// ORDER MODAL
// ===========================
const orderModal = document.getElementById('orderModal');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('a[href="#order"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        orderModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    orderModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===========================
// SCROLL TO TOP
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// NEWSLETTER SUBSCRIBE
// ===========================
const subscribeBtn = document.getElementById('subscribeBtn');
const newsletterEmail = document.getElementById('newsletterEmail');

subscribeBtn.addEventListener('click', () => {
    const email = newsletterEmail.value.trim();
    if (!email || !email.includes('@')) {
        newsletterEmail.style.borderColor = '#e31c1c';
        newsletterEmail.placeholder = 'Â¡Ingresa un correo vÃ¡lido!';
        return;
    }
    subscribeBtn.textContent = 'âœ“ Â¡Listo!';
    newsletterEmail.value = '';
    newsletterEmail.style.borderColor = '#4ade80';
    setTimeout(() => {
        subscribeBtn.textContent = 'Suscribirme â†’';
        newsletterEmail.style.borderColor = '';
    }, 3000);
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const animatedEls = document.querySelectorAll(
    '.menu-card, .job-item, .loc-item, .gallery-item, .about-container, .hero-stats .stat, .branch-item'
);

animatedEls.forEach(el => el.setAttribute('data-aos', 'true'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

animatedEls.forEach(el => observer.observe(el));

// ===========================
// SMOOTH ACTIVE NAV LINK
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.style.color = a.getAttribute('href') === '#' + section.id ? '#fff' : '';
            });
        }
    });
});

// ===========================
// ADD FADE-IN KEYFRAME DYNAMICALLY
// ===========================
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

