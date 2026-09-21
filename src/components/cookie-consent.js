(() => {
  const KEY = "streamx-cookie-consent";
  const consent = localStorage.getItem(KEY);
  if (consent) return;
  const banner = document.createElement("section");
  banner.className = "cookie-consent";
  banner.setAttribute("role","dialog");
  banner.setAttribute("aria-label","إعدادات ملفات تعريف الارتباط");
  banner.innerHTML = `
    <div class="cookie-consent__content">
      <strong>الخصوصية وملفات تعريف الارتباط</strong>
      <p>نستخدم التخزين المحلي فقط لحفظ تفضيلات الواجهة والموافقة. لا نستخدم حالياً ملفات تتبع أو إعلانات مخصصة داخل الموقع.</p>
      <a href="/cccam/privacy.html">اقرأ سياسة الخصوصية</a>
    </div>
    <div class="cookie-consent__actions">
      <button type="button" class="cookie-btn cookie-btn--secondary" data-cookie="reject">رفض غير الضرورية</button>
      <button type="button" class="cookie-btn cookie-btn--primary" data-cookie="accept">موافق</button>
    </div>`;
  document.body.appendChild(banner);
  banner.querySelectorAll("[data-cookie]").forEach(btn => btn.addEventListener("click", () => {
    localStorage.setItem(KEY, btn.dataset.cookie);
    banner.remove();
  }));
})();