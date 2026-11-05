# 🔗 Moaz Alsabouh — Social Links (`links`)

صفحة روابط شخصية عصرية وسريعة مخصصة للنشر على **GitHub Pages**، لاستخدامها كمرجع موحّد في فوتر المشاريع والحسابات الشخصية.

🌐 **الرابط المباشر (بعد تفعيل GitHub Pages):**
- بالعربية: `https://moazalsabouh.github.io/links/`
- بالإنجليزية مباشر: `https://moazalsabouh.github.io/links/?lang=en`

---

## ✨ المميزات
- 🎨 **تصميم Glassmorphism عصري** مع دعم الوضع الداكن والفاتح (Dark / Light Mode).
- 🌍 **ثنائي اللغة (عربي / إنجليزي)** مع تبديل فوري للاتجاه (`RTL` / `LTR`) ودعم بارامتر الرابط `?lang=en`.
- 🖼️ **صورة الملف الشخصي تلقائية** من حساب GitHub (`https://github.com/MoazAlsabouh.png`) وتُحدَّث تلقائياً عند تغيير صورتك على جيتهاب.
- ⚡ **خفيفة وسريعة جداً** بدون أي مكتبات خارجية ثقيلة (Pure HTML5, CSS3, Vanilla JS + Inline SVGs).

---

## 🧩 كود جاهز للاستخدام في فوتر مشاريعك (Footer Snippets)

### 1. فوتر HTML بسيط مع سنة ديناميكية (للمواقع وتطبيقات الويب)
```html
<footer style="text-align: center; padding: 1.25rem; font-family: system-ui, sans-serif; font-size: 0.9rem; color: #94a3b8;">
  © <script>document.write(new Date().getFullYear())</script> — طُوّر بواسطة
  <a href="https://moazalsabouh.github.io/links/" target="_blank" rel="noopener noreferrer" style="color: #6366f1; font-weight: 600; text-decoration: none;">
    معاذ الصبوح (Moaz Alsabouh)
  </a>
</footer>
```

### 2. فوتر Markdown (لملفات `README.md` في مشاريع GitHub)
```markdown
---
<p align="center">
  Developed by <a href="https://moazalsabouh.github.io/links/?lang=en"><b>Moaz Alsabouh (معاذ الصبوح)</b></a> •
  <a href="https://moazns.sy">Website</a> •
  <a href="https://www.linkedin.com/in/moazalsabouh/">LinkedIn</a> •
  <a href="https://x.com/moazAlsabouh">X</a> •
  <a href="https://www.youtube.com/@MoazAlsabouh">YouTube</a>
</p>
```

---

## 🚀 خطوات النشر على GitHub Pages
1. ارفع الملفات إلى المستودع:
   ```bash
   git add .
   git commit -m "Add modern bilingual social links page"
   git push origin main
   ```
2. افتح إعدادات المستودع على GitHub: **Settings** → **Pages**.
3. تحت قسم **Build and deployment**، اختر:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (أو `master`) والمجلد `/ (root)` ثم اضغط **Save**.
4. خلال دقيقة ستكون صفحتك متاحة على: `https://moazalsabouh.github.io/links/`
