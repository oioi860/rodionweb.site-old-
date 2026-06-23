(function () {
  const SESSION_KEY = "ifoods-admin-session-v1";
  const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
  const CREDENTIAL_HASH = "e59555fb1a002e240a3c75271d698ceb14a3786984e34f601aeeafeebd10fd61";

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function toHex(buffer) {
    return Array.from(new Uint8Array(buffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  function sha256Fallback(message) {
    const K = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ];
    const bytes = new TextEncoder().encode(message);
    const bitLen = bytes.length * 8;
    const withOne = new Uint8Array(((bytes.length + 9 + 63) >> 6) << 6);
    withOne.set(bytes);
    withOne[bytes.length] = 0x80;
    new DataView(withOne.buffer).setUint32(withOne.length - 4, bitLen);

    let h0 = 0x6a09e667;
    let h1 = 0xbb67ae85;
    let h2 = 0x3c6ef372;
    let h3 = 0xa54ff53a;
    let h4 = 0x510e527f;
    let h5 = 0x9b05688c;
    let h6 = 0x1f83d9ab;
    let h7 = 0x5be0cd19;
    const w = new Uint32Array(64);

    for (let offset = 0; offset < withOne.length; offset += 64) {
      for (let i = 0; i < 16; i += 1) {
        w[i] = new DataView(withOne.buffer, offset + i * 4, 4).getUint32(0);
      }
      for (let i = 16; i < 64; i += 1) {
        const s0 = ((w[i - 15] >>> 7) | (w[i - 15] << 25)) ^ ((w[i - 15] >>> 18) | (w[i - 15] << 14)) ^ (w[i - 15] >>> 3);
        const s1 = ((w[i - 2] >>> 17) | (w[i - 2] << 15)) ^ ((w[i - 2] >>> 19) | (w[i - 2] << 13)) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }

      let a = h0;
      let b = h1;
      let c = h2;
      let d = h3;
      let e = h4;
      let f = h5;
      let g = h6;
      let h = h7;

      for (let i = 0; i < 64; i += 1) {
        const S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        const ch = (e & f) ^ (~e & g);
        const temp1 = (h + S1 + ch + K[i] + w[i]) >>> 0;
        const S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (S0 + maj) >>> 0;
        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
      }

      h0 = (h0 + a) >>> 0;
      h1 = (h1 + b) >>> 0;
      h2 = (h2 + c) >>> 0;
      h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0;
      h5 = (h5 + f) >>> 0;
      h6 = (h6 + g) >>> 0;
      h7 = (h7 + h) >>> 0;
    }

    const hash = new Uint8Array(32);
    const view = new DataView(hash.buffer);
    view.setUint32(0, h0);
    view.setUint32(4, h1);
    view.setUint32(8, h2);
    view.setUint32(12, h3);
    view.setUint32(16, h4);
    view.setUint32(20, h5);
    view.setUint32(24, h6);
    view.setUint32(28, h7);
    return toHex(hash);
  }

  async function hashCredentials(email, password) {
    const payload = `${normalizeEmail(email)}:${String(password || "")}`;

    if (window.crypto?.subtle) {
      try {
        const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
        return toHex(digest);
      } catch {
        return sha256Fallback(payload);
      }
    }

    return sha256Fallback(payload);
  }

  function readSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (!session?.token || !session?.expiresAt || Date.now() > session.expiresAt) {
        sessionStorage.removeItem(SESSION_KEY);
        return null;
      }
      return session;
    } catch {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
  }

  function writeSession(token) {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        token,
        expiresAt: Date.now() + SESSION_TTL_MS,
      }),
    );
  }

  function isAuthenticated() {
    return Boolean(readSession());
  }

  function getAdminToken() {
    return readSession()?.token ?? null;
  }

  async function login(email, password) {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail || !password) {
      return { ok: false, message: "Введите почту и пароль." };
    }

    const digest = await hashCredentials(normalizedEmail, password);
    if (digest !== CREDENTIAL_HASH) {
      return { ok: false, message: "Неверная почта или пароль." };
    }

    writeSession(digest);
    return { ok: true };
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function mountAdminApp() {
    const mount = document.getElementById("adminAppMount");
    const template = document.getElementById("adminAppTemplate");
    if (!mount || !template || mount.childElementCount > 0) return;

    mount.appendChild(template.content.cloneNode(true));
  }

  function unmountAdminApp() {
    const mount = document.getElementById("adminAppMount");
    if (mount) mount.replaceChildren();
  }

  function applyAdminGate() {
    if (document.body?.dataset?.page !== "admin") return;

    const gate = document.getElementById("adminLoginGate");
    const authed = isAuthenticated();

    if (authed) {
      mountAdminApp();
      if (gate) gate.hidden = true;
      document.body.classList.add("is-admin-authenticated");
      document.body.classList.remove("admin-locked");
    } else {
      unmountAdminApp();
      if (gate) gate.hidden = false;
      document.body.classList.remove("is-admin-authenticated");
      document.body.classList.add("admin-locked");
    }
  }

  function launchAdminApp() {
    applyAdminGate();
    window.dispatchEvent(new CustomEvent("ifoods-admin-auth"));

    if (typeof window.ifoodsStartAdminApp === "function") {
      void window.ifoodsStartAdminApp();
    }
  }

  function setupLoginForm() {
    const form = document.getElementById("adminLoginForm");
    if (!form) return;

    const errorHost = document.getElementById("adminLoginError");
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton?.textContent ?? "Войти";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      if (errorHost) {
        errorHost.textContent = "";
        errorHost.classList.remove("is-visible");
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Входим…";
      }

      try {
        const result = await login(email, password);
        if (!result.ok) {
          if (errorHost) {
            errorHost.textContent = result.message;
            errorHost.classList.add("is-visible");
          }
          return;
        }

        launchAdminApp();
      } catch (error) {
        console.error("Admin login failed:", error);
        if (errorHost) {
          errorHost.textContent = "Не удалось выполнить вход. Обновите страницу и попробуйте снова.";
          errorHost.classList.add("is-visible");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultButtonText;
        }
      }
    });
  }

  function setupLogout() {
    document.addEventListener("click", (event) => {
      const logoutButton = event.target.closest("#adminLogoutButton");
      if (!logoutButton) return;

      logout();
      applyAdminGate();
      window.location.replace("./admin.html");
    });
  }

  function initAdminAuth() {
    applyAdminGate();
    setupLoginForm();
    setupLogout();

    if (isAuthenticated()) {
      launchAdminApp();
    }
  }

  window.ifoodsAuth = {
    isAuthenticated,
    getAdminToken,
    login,
    logout,
    applyAdminGate,
    mountAdminApp,
    unmountAdminApp,
    launchAdminApp,
  };

  function boot() {
    initAdminAuth();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
