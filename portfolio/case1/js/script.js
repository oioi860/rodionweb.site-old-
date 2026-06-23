// script.js — современная версия 2026

// Прогресс-бар и навбар при скролле
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
  
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.getElementById("scrollProgress");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
});

// Лёгкий параллакс (отключен — может вызывать «плывущую» вёрстку)

// Fade-in с каскадом и параллакс-эффектом
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
        // Добавляем эффект "вылета" с задержкой
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }, 100);
    }
  });
}, { 
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
});

faders.forEach(fader => observer.observe(fader));

// Слайдер с улучшенной анимацией
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn && prevBtn && slides.length) {
  showSlide(0);
  
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
  
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
  
  // Автопрокрутка с паузой при наведении
  let autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  const sliderContainer = document.querySelector('.slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    sliderContainer.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
      }, 5000);
    });
  }
}

// Бургер-меню
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");
    menuOverlay?.classList.toggle("active", mobileMenu.classList.contains("active"));
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
  });
  
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      menuOverlay?.classList.remove("active");
      document.body.style.overflow = 'auto';
    });
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
    burger?.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

// Плавный скролл для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      if (mobileMenu?.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burger?.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    }
  });
});

// Эффект появления цифр в футере (счетчик)
function animateNumbers() {
  const numberElements = document.querySelectorAll('.exp-number');
  numberElements.forEach(el => {
    const target = parseInt(el.textContent);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + '+';
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + '+';
      }
    }, 30);
  });
}

// Запускаем счетчик, когда футер появляется в зоне видимости
const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumbers();
      footerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const footer = document.querySelector('.footer');
if (footer) footerObserver.observe(footer);

// Отключаем контекстное меню на изображениях
document.addEventListener('contextmenu', (event) => {
  if (event.target && event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});
