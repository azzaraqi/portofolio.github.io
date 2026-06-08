document.addEventListener('DOMContentLoaded', () => {
    // ═══════════════════════════════════════
    // 1. MOBILE MENU — Toggle + Auto-Close on link click
    // ═══════════════════════════════════════
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Auto-close drawer when user taps a navigation link
        mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ═══════════════════════════════════════
    // 2. STICKY NAVBAR — Glassmorphism on scroll
    // ═══════════════════════════════════════
    const header = document.getElementById('main-header');
    const heroSection = document.getElementById('beranda');

    function updateHeader() {
        if (!header) return;
        const scrolled = window.scrollY > 60;
        const inDarkHero = heroSection && window.scrollY < heroSection.offsetHeight;

        if (scrolled) {
            header.classList.add('backdrop-blur-xl', 'shadow-lg', 'shadow-slate-900/5', 'border-b');
            if (inDarkHero) {
                header.classList.add('bg-slate-900/80', 'border-slate-700/50');
                header.classList.remove('bg-white/85', 'border-slate-200/50');
            } else {
                header.classList.add('bg-white/85', 'border-slate-200/50');
                header.classList.remove('bg-slate-900/80', 'border-slate-700/50');
            }
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove(
                'backdrop-blur-xl', 'shadow-lg', 'shadow-slate-900/5',
                'border-b', 'bg-white/85', 'border-slate-200/50',
                'bg-slate-900/80', 'border-slate-700/50'
            );
            header.classList.add('bg-transparent');
        }
    }

    // ═══════════════════════════════════════
    // 3. SCROLL ENTRANCE ANIMATIONS — Intersection Observer
    // ═══════════════════════════════════════
    const fadeElements = document.querySelectorAll('.scroll-fade-in');
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => scrollObserver.observe(el));

    // ═══════════════════════════════════════
    // 4. ACTIVE NAV LINK HIGHLIGHTING
    // ═══════════════════════════════════════
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let currentId = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                currentId = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${currentId}`;
            link.classList.toggle('!text-violet-400', isActive);
            link.classList.toggle('!font-bold', isActive);
        });
    }

    // ═══════════════════════════════════════
    // 5. STATS COUNTER ANIMATION
    // ═══════════════════════════════════════
    function animateCounters() {
        document.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 2000;
            const start = performance.now();

            function step(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    }

    const statsSection = document.getElementById('stats-row');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // ═══════════════════════════════════════
    // 6. BACK TO TOP BUTTON
    // ═══════════════════════════════════════
    const backToTop = document.getElementById('back-to-top');
    function updateBackToTop() {
        if (!backToTop) return;
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ═══════════════════════════════════════
    // 7. CONTACT FORM — mailto fallback
    // ═══════════════════════════════════════
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) return;

            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(
                `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
            );
            window.location.href = `mailto:dhiwa17koe@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // ═══════════════════════════════════════
    // UNIFIED SCROLL HANDLER (debounced via rAF)
    // ═══════════════════════════════════════
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateHeader();
                updateActiveNav();
                updateBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ═══════════════════════════════════════
    // 8. LIGHTBOX GALLERY SYSTEM
    // ═══════════════════════════════════════
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxIndex = document.getElementById('lightbox-index');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxThumbnails = document.getElementById('lightbox-thumbnails');

    let currentGalleryImages = [];
    let currentGalleryIndex = 0;
    let currentGalleryName = "";

    function openLightbox(images, startIndex, galleryName) {
        currentGalleryImages = images;
        currentGalleryIndex = startIndex;
        currentGalleryName = galleryName;
        if (lightboxModal) {
            lightboxModal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            updateLightboxImage();
            buildThumbnails();
        }
    }

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    }

    function updateLightboxImage() {
        if (!lightboxImg || currentGalleryImages.length === 0) return;
        const src = currentGalleryImages[currentGalleryIndex];
        lightboxImg.src = src;
        if (lightboxCaption) {
            lightboxCaption.textContent = `${currentGalleryName} - Screen ${currentGalleryIndex + 1}`;
        }
        if (lightboxIndex) {
            lightboxIndex.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
        }
        
        // Update active thumbnail borders
        if (lightboxThumbnails) {
            const thumbs = lightboxThumbnails.querySelectorAll('img');
            thumbs.forEach((thumb, idx) => {
                if (idx === currentGalleryIndex) {
                    thumb.classList.add('border-violet-600', 'scale-105');
                    thumb.classList.remove('opacity-50', 'border-transparent');
                } else {
                    thumb.classList.remove('border-violet-600', 'scale-105');
                    thumb.classList.add('opacity-50', 'border-transparent');
                }
            });
        }
    }

    function buildThumbnails() {
        if (!lightboxThumbnails) return;
        lightboxThumbnails.innerHTML = '';
        currentGalleryImages.forEach((imgSrc, idx) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'w-16 h-10 object-cover rounded border-2 cursor-pointer transition-all duration-200 border-transparent opacity-50';
            img.addEventListener('click', () => {
                currentGalleryIndex = idx;
                updateLightboxImage();
            });
            lightboxThumbnails.appendChild(img);
        });
        updateLightboxImage();
    }

    // Attach triggers
    document.querySelectorAll('.gallery-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const imagesStr = trigger.getAttribute('data-images');
            if (!imagesStr) return;
            const images = imagesStr.split(',');
            const galleryName = trigger.getAttribute('data-gallery') || 'Galeri';
            openLightbox(images, 0, galleryName);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateLightboxImage();
    });
    if (lightboxNext) lightboxNext.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
        updateLightboxImage();
    });

    // Close on clicking backdrop
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') {
                currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                updateLightboxImage();
            }
            if (e.key === 'ArrowRight') {
                currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
                updateLightboxImage();
            }
        }
    });

    // Fire once on load
    updateHeader();
    updateActiveNav();
});
