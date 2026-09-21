# StreamX — CCcam & IPTV Pro Hub

StreamX هو موقع HTML/CSS/JavaScript ثابت، RTL-first، مهيأ للنشر على GitHub Pages. الواجهة الحالية تجريبية ولا تتضمن بيانات وصول أو اشتراكات حقيقية.

## ما تم تحسينه

- نظام CSS موحد ومتجاوب بدون Tailwind CDN.
- دعم الشاشات الصغيرة والمتوسطة والكبيرة.
- تحسين التباين والوضع الفاتح/الداكن.
- Focus states وإمكانية تخطي المحتوى لتحسين الوصول.
- عناوين ووصف وCanonical وOpen Graph وStructured Data.
- صفحات عامة نظيفة: About، Contact، Privacy، Terms.
- صفحات مقالات وفئة IPTV مع Article/CollectionPage structured data.
- Sitemap وrobots.txt و404 وsecurity.txt وفق بنية GitHub Pages.
- PWA manifest.
- إزالة نسخ الصفحات المصدرية من الفهرسة باستخدام noindex وcanonical.
- Quality gate عبر GitHub Actions.
- Workflow للنشر التلقائي إلى GitHub Pages.
- احترام الاستخدام المسؤول وحقوق المحتوى.

## البنية

- `index.html` — الصفحة الرئيسية المنشورة.
- `categories/` — صفحات التصنيفات.
- `posts/` — المقالات المنشورة.
- `src/styles/` — نظام CSS الموحد.
- `src/pages/` — النسخ المصدرية القديمة، غير مخصصة للفهرسة.
- `src/Legal pages/` — النسخ المصدرية للصفحات القانونية.
- `public/` — الأصول العامة.
- `.well-known/security.txt` — قناة الإبلاغ الأمني.
- `.github/workflows/` — فحوص الجودة والنشر.
- `scripts/quality.mjs` — فحص تقني سريع.

## التشغيل المحلي

يمكن فتح `index.html` مباشرة في المتصفح، أو استخدام أي خادم ملفات ثابت. وظائف HLS تحتاج إلى بيئة HTTP/HTTPS وبعض المصادر قد تفرض قيود CORS.

## GitHub Pages

تمت إضافة workflow باسم **Deploy to GitHub Pages**. في إعدادات المستودع اختر GitHub Actions كمصدر للنشر إذا لم يكن ذلك مفعلاً مسبقاً، ثم راقب تبويب Actions.

## ملاحظة أمنية

لا تضع كلمات مرور أو مفاتيح وصول أو أسرار API داخل هذا المستودع. GitHub Pages ينشر الملفات علناً على الإنترنت.

## الحالة

الإصدار الحالي: **2.1.0**.

## الموقع المنشور

[StreamX — IPTV & CCcam](https://gpldroid.github.io/cccam/)

أدلة الموقع:
- [تطبيقات IPTV على Android وAndroid TV](https://gpldroid.github.io/cccam/categories/iptv-apps.html)
- [دليل M3U وM3U8](https://gpldroid.github.io/cccam/posts/iptv-m3u-guide.html)
- [مكتبات IPTV على GitHub](https://gpldroid.github.io/cccam/posts/iptv-github.html)
