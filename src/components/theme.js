(() => {
  const KEY = "streamx-theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  const initial = saved === "light" || saved === "dark"
    ? saved
    : (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  root.dataset.theme = initial;
  root.style.colorScheme = initial;

  const sync = () => {
    const light = root.dataset.theme === "light";
    const btn = document.querySelector("#dark-mode-toggle");
    const icon = btn && btn.querySelector(".theme-icon");
    if (!btn) return;
    btn.setAttribute("aria-pressed", String(light));
    btn.setAttribute("aria-label", light ? "تفعيل الوضع الداكن" : "تفعيل الوضع الفاتح");
    if (icon) icon.textContent = light ? "☀" : "☾";
  };

  const bind = () => {
    sync();
    const btn = document.querySelector("#dark-mode-toggle");
    if (!btn || window.__streamxThemeBound) return;
    window.__streamxThemeBound = true;
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      root.style.colorScheme = next;
      localStorage.setItem(KEY, next);
      sync();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind, { once: true });
  } else {
    bind();
  }
})();