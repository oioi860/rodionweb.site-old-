// ===== YANDEX MAPS INITIALIZATION (если карта нужна, оставляем) =====
function initMap() {
    if (typeof ymaps !== 'undefined') {
        var myMap = new ymaps.Map("map", {
            center: [55.7558, 37.6176],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl']
        });
        var placemark = new ymaps.Placemark([55.7558, 37.6176], {
            balloonContent: "Bureau of Talents<br>Адрес вашего офиса"
        });
        myMap.geoObjects.add(placemark);
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== REVIEWS CAROUSEL (без изменений) =====
function initReviewsCarousel() {
    const wrapper = document.querySelector('.reviews-wrapper');
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.dots-container');
    
    if (!wrapper || slides.length === 0) return;
    
    const totalSlides = slides.length;
    let currentIndex = 0;
    
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    
    wrapper.appendChild(firstClone);
    wrapper.insertBefore(lastClone, wrapper.firstChild);
    
    wrapper.style.transform = `translateX(-100%)`;
    
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function updateDots() {
        let originalIndex = currentIndex;
        if (originalIndex < 0) originalIndex = totalSlides - 1;
        if (originalIndex >= totalSlides) originalIndex = 0;
        
        document.querySelectorAll('.dot').forEach((dot, idx) => {
            if (idx === originalIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }
    
    function goToSlide(index, noTransition = false) {
        if (noTransition) wrapper.style.transition = 'none';
        else wrapper.style.transition = 'transform 0.4s ease-in-out';
        wrapper.style.transform = `translateX(-${(index + 1) * 100}%)`;
        currentIndex = index;
        updateDots();
    }
    
    function nextSlide() {
        let newIndex = currentIndex + 1;
        goToSlide(newIndex);
        if (newIndex === totalSlides) setTimeout(() => goToSlide(0, true), 400);
    }
    
    function prevSlide() {
        let newIndex = currentIndex - 1;
        goToSlide(newIndex);
        if (newIndex === -1) setTimeout(() => goToSlide(totalSlides - 1, true), 400);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
}

// ===== FAQ ACCORDION =====
function initFaqAccordion() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => item.classList.toggle('active'));
    });
}

// ===== MODAL =====
function openGuideModal() {
    const modal = document.getElementById('guideModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Сброс формы и результата при открытии
        const form = document.getElementById('guideFormModal');
        const resultDiv = document.getElementById('guideResult');
        if (form) form.style.display = 'block';
        if (resultDiv) resultDiv.style.display = 'none';
        if (form) form.reset();
    }
}
function closeGuideModal() {
    const modal = document.getElementById('guideModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
document.addEventListener('click', (e) => {
    if (e.target === document.getElementById('guideModal')) closeGuideModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGuideModal();
});

// ===== GUIDE FORM (отправка через fetch на PHP) =====
function initGuideForm() {
    const form = document.getElementById('guideFormModal');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Отправляем...';
        btn.disabled = true;

        const data = new FormData(form);
        fetch('send.php', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                form.style.display = 'none';
                const resultDiv = document.getElementById('guideResult');
                if (resultDiv) resultDiv.style.display = 'block';
            } else {
                alert('❌ ' + (result.message || 'Ошибка отправки. Попробуйте позже.'));
            }
        })
        .catch(() => {
            alert('❌ Ошибка соединения. Попробуйте позже или напишите нам на почту.');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
    });
}

// ===== CALLBACK FORM (отправка через PHP, но без fetch, простая отправка с перезагрузкой) =====
function initFormHandler() {
    const form = document.getElementById('callbackForm');
    if (!form) return;
    // Валидация чекбокса перед отправкой
    const checkbox = document.getElementById('callbackConsent');
    if (checkbox) {
        form.addEventListener('submit', function(e) {
            if (!checkbox.checked) {
                e.preventDefault();
                alert('Необходимо согласие на обработку персональных данных');
            }
        });
    }
}

// ===== COOKIE BANNER =====
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    if (!banner || !acceptBtn) return;
    if (localStorage.getItem('cookieConsent') === 'true') {
        banner.classList.add('hidden');
        return;
    }
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.classList.add('hidden');
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            btn.classList.remove('active');
            menu.classList.remove('active');
        }
    });
}

// ===== INIT ALL =====
function initAll() {
    initFormHandler();      // для обычной формы обратной связи
    initGuideForm();        // для формы гайда
    initSmoothScroll();
    initReviewsCarousel();
    initFaqAccordion();
    initMobileMenu();
    initCookieBanner();
    if (typeof ymaps !== 'undefined') ymaps.ready(initMap);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}