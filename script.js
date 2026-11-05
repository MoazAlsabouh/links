(() => {
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggle");
  const langToggleBtn = document.getElementById("langToggle");
  const langText = document.getElementById("langText");
  const shareBtn = document.getElementById("shareBtn");
  const toastEl = document.getElementById("toast");
  const yearEl = document.getElementById("currentYear");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Dynamic Circular Favicon (auto-updates if GitHub avatar changes)
  const faviconLink = document.getElementById("faviconLink");
  const avatarEl = document.getElementById("profileAvatar");
  if (faviconLink && avatarEl) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const size = 128;
        const margin = 4;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        ctx.save();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - margin, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, margin, margin, size - margin * 2, size - margin * 2);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - margin, 0, Math.PI * 2);
        ctx.strokeStyle = "#6366f1";
        ctx.lineWidth = 5;
        ctx.stroke();

        faviconLink.href = canvas.toDataURL("image/png");
      } catch (_) {
        // Fallback remains static circular favicon.png
      }
    };
    img.src = avatarEl.src;
  }

  // 1. Theme Initialization & Toggle
  const savedTheme = localStorage.getItem("moaz_links_theme") || "dark";
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme") === "light" ? "light" : "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("moaz_links_theme", nextTheme);
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
  }

  // 2. Language Initialization & Toggle (Supports ?lang=en or ?lang=ar in URL)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  const savedLang = urlLang === "en" || urlLang === "ar"
    ? urlLang
    : localStorage.getItem("moaz_links_lang") || "ar";

  setLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const currentLang = htmlEl.getAttribute("lang") === "en" ? "en" : "ar";
      const nextLang = currentLang === "ar" ? "en" : "ar";
      setLanguage(nextLang);
      localStorage.setItem("moaz_links_lang", nextLang);
    });
  }

  function setLanguage(lang) {
    const isAr = lang === "ar";
    htmlEl.setAttribute("lang", isAr ? "ar" : "en");
    htmlEl.setAttribute("dir", isAr ? "rtl" : "ltr");

    if (langText) {
      langText.textContent = isAr ? "EN" : "ع";
    }

    const translatableElements = document.querySelectorAll("[data-ar][data-en]");
    translatableElements.forEach((el) => {
      el.textContent = isAr ? el.getAttribute("data-ar") : el.getAttribute("data-en");
    });
  }

  // 3. Share / Copy Page URL
  let toastTimeout;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2400);
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const isAr = htmlEl.getAttribute("lang") !== "en";
      const shareUrl = window.location.href;
      const shareData = {
        title: isAr ? "معاذ الصبوح — الروابط الرسمية" : "Moaz Alsabouh — Official Links",
        url: shareUrl,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch (_) {
          // User cancelled or share failed; fall back to clipboard copy
        }
      }

      try {
        await navigator.clipboard.writeText(shareUrl);
        showToast(isAr ? "تم نسخ الرابط بنجاح ✓" : "Link copied to clipboard ✓");
      } catch (_) {
        showToast(shareUrl);
      }
    });
  }
})();
