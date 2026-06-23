// Smooth scroll for in-page anchors
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Active menu item based on current path
const navLinks = document.querySelectorAll(".nav a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

// Reveal on scroll
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealItems.forEach((item) => revealObserver.observe(item));

// Отключаем контекстное меню на изображениях
document.addEventListener("contextmenu", (event) => {
  if (event.target && event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

// Contact form: send to email (FormSubmit) and Telegram without redirect
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  const statusEl = document.querySelector("#contactFormStatus");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  const setStatus = (message, isError = false) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.style.color = isError ? "#b42318" : "#2b7a4b";
  };

  const toTelegramText = (data) => {
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    return [
      "Новая заявка с сайта",
      "",
      `Имя: ${name || "—"}`,
      `Контакт: ${contact || "—"}`,
      "",
      "Задача:",
      message || "—",
    ].join("\n");
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const telegramToken = contactForm.getAttribute("data-telegram-token") || "";
    const telegramChatId = contactForm.getAttribute("data-telegram-chat") || "";
    const canSendTelegram = telegramToken.trim() && telegramChatId.trim();

    setStatus("Отправляем заявку...");
    if (submitButton) submitButton.disabled = true;

    // Email via FormSubmit (AJAX, no redirect)
    const emailRequest = fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    // Telegram via Bot API (optional).
    // no-cors is used because Telegram Bot API often blocks browser CORS checks.
    let telegramRequest = null;
    if (canSendTelegram) {
      const telegramBody = new URLSearchParams({
        chat_id: telegramChatId.trim(),
        text: toTelegramText(formData),
      });
      telegramRequest = fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        mode: "no-cors",
        body: telegramBody,
      });
    }

    try {
      const emailResult = await emailRequest;
      if (!emailResult.ok) {
        setStatus("Не удалось отправить заявку. Попробуйте позже.", true);
        return;
      }

      if (telegramRequest) {
        await telegramRequest;
      }

      setStatus("Заявка отправлена. Спасибо!");
      contactForm.reset();
    } catch (error) {
      setStatus("Не удалось отправить заявку. Попробуйте позже.", true);
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
