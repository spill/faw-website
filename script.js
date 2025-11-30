// Subtle Snow Effect
document.addEventListener('DOMContentLoaded', () => {
    createSubtleSnow();
});

function createSubtleSnow() {
    const snowContainer = document.getElementById('snowEffect');
    if (!snowContainer) return;

    const numberOfDots = 35; // Keep it subtle

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'snow-dot';

        // Random horizontal position
        dot.style.left = Math.random() * 100 + '%';

        // Random size (2-5px)
        const size = 2 + Math.random() * 3;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';

        // Random animation duration (8-15 seconds for slow, gentle fall)
        const duration = 8 + Math.random() * 7;
        dot.style.animationDuration = duration + 's';

        // Random delay so they don't all start at once
        dot.style.animationDelay = Math.random() * 10 + 's';

        // Random opacity (0.3-0.6 for subtlety)
        dot.style.opacity = 0.3 + Math.random() * 0.3;

        snowContainer.appendChild(dot);
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Christmas Popup
document.addEventListener('DOMContentLoaded', () => {
    // Configuration for this specific popup
    const popupConfig = {
        id: 'christmas2025',  // Unique ID for this popup
        startDate: new Date('2025-11-29'),  // Start showing Nov 29
        endDate: new Date('2026-01-01'),    // Stop showing Jan 1
        storageType: 'session'  // 'session' or 'local' - session clears when browser closes
    };

    // Check if we should show the popup
    const today = new Date();
    const storage = popupConfig.storageType === 'session' ? sessionStorage : localStorage;
    const popupShown = storage.getItem(`popup_${popupConfig.id}`);

    // Show popup if:
    // 1. It hasn't been shown yet (or use !popupShown to always check)
    // 2. Current date is within the date range
    const shouldShow = !popupShown && today >= popupConfig.startDate && today < popupConfig.endDate;

    if (shouldShow) {
        // Show popup after a short delay
        setTimeout(() => {
            const popup = document.getElementById('christmasPopup');
            if (popup) {
                popup.classList.remove('hidden');
                // Start falling snowflakes animation
                createFallingSnowflakes();
            }
        }, 1000);
    }
});

// Create falling snowflakes animation
function createFallingSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakesContainer');
    if (!snowflakesContainer) {
        console.log('Snowflakes container not found!');
        return;
    }

    console.log('Creating falling snowflakes...');

    // Clear any existing snowflakes
    snowflakesContainer.innerHTML = '';

    // Christmas emojis to use
    const christmasItems = ['❄️', '🎄', '⭐', '🎁', '🔔', '❄️', '❄️', '⭐'];
    const numberOfItems = 30;

    // Create snowflakes and Christmas items
    for (let i = 0; i < numberOfItems; i++) {
        const item = document.createElement('div');
        item.className = 'snowflake';
        item.textContent = christmasItems[Math.floor(Math.random() * christmasItems.length)];

        // Random horizontal position
        item.style.left = Math.random() * 100 + '%';

        // Random animation duration (6-12 seconds for variety)
        const fallDuration = 6 + Math.random() * 6;
        item.style.animationDuration = `${fallDuration}s`;

        // Random delay to stagger the items
        item.style.animationDelay = `${Math.random() * 3}s`;

        snowflakesContainer.appendChild(item);
    }

    console.log(`Created ${numberOfItems} Christmas items`);
}

// Close popup function
function closeChristmasPopup() {
    const popup = document.getElementById('christmasPopup');
    const snowflakesContainer = document.getElementById('snowflakesContainer');

    if (popup) {
        popup.classList.add('hidden');

        // Store that this specific popup was shown using the same ID
        // Change 'session' to 'local' if you want it to persist across browser sessions
        const storageType = 'session';
        const storage = storageType === 'session' ? sessionStorage : localStorage;
        storage.setItem('popup_christmas2025', 'true');

        // Remove all snowflakes
        if (snowflakesContainer) {
            snowflakesContainer.innerHTML = '';
        }
    }
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('christmasPopup');
    if (popup && e.target === popup) {
        closeChristmasPopup();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect with Glassmorphism
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you shortly.');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .testimonial-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Current year in footer
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// ========================================
// PREMIUM UI ENHANCEMENTS
// ========================================

// Animated Number Counter for Stats
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/[0-9]/g, '');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Intersection Observer for Number Animation
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateNumber(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all stat numbers
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(num => numberObserver.observe(num));
});

// Button Ripple Effect
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
});

// Add ripple effect styles dynamically if not already in CSS
if (!document.querySelector('style#ripple-styles')) {
    const rippleStyles = document.createElement('style');
    rippleStyles.id = 'ripple-styles';
    rippleStyles.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced Card Hover Effects with 3D Tilt
document.querySelectorAll('.service-card, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// Smooth Reveal on Scroll - Triggers earlier for faster appearance
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.05,  // Lower threshold = triggers sooner
    rootMargin: '0px 0px -50px 0px'  // Less margin = triggers sooner
});

// Add reveal animation styles - Faster animations
if (!document.querySelector('style#reveal-styles')) {
    const revealStyles = document.createElement('style');
    revealStyles.id = 'reveal-styles';
    revealStyles.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(revealStyles);
}

// Apply reveal effect to elements - Faster delays
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .trust-badge, .faq-item, .info-item'
    );
    revealElements.forEach((el, index) => {
        el.classList.add('reveal-element');
        // Much faster delay - only 0.03s between elements
        el.style.transitionDelay = `${index * 0.03}s`;
        revealObserver.observe(el);
    });
});

// Loading state removed - page loads instantly now

// Enhanced Info Icon Animations
document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.info-icon svg');
        if (icon) {
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent-green');
        }
    });

    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.info-icon svg');
        if (icon) {
            icon.style.transform = 'rotate(0deg) scale(1)';
            icon.style.color = '';
        }
    });
});

// Add Active State to Current Page in Navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});