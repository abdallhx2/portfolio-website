# Portfolio Website | موقع شخصي

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive portfolio website built with Next.js 15, featuring bilingual support (Arabic/English), multiple theme options, and beautiful animations.

موقع شخصي حديث ومتجاوب مبني بـ Next.js 15، يتميز بالدعم ثنائي اللغة (العربية/الإنجليزية)، وخيارات متعددة للمظاهر، وحركات جميلة.

## 🌟 Live Demo | المعاينة المباشرة

[**View Live Website**](https://github.com/abdallhx2/portfolio-website) | [**عرض الموقع**](https://github.com/abdallhx2/portfolio-website)

## ✨ Features | المميزات

### 🌍 Multilingual Support
- **Arabic (RTL)** - دعم كامل للغة العربية مع اتجاه النص من اليمين لليسار
- **English (LTR)** - Full English support with left-to-right text direction
- Real-time language switching without page reload

### 🎨 Theme System
- **Dark/Light Mode** - نظام المظهر الداكن والفاتح
- **5 Color Schemes** - 5 أنظمة ألوان مختلفة (Blue, Purple, Green, Orange, Pink)
- Instant theme switching with smooth transitions
- System preference detection

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Progressive enhancement

### ⚡ Performance
- Next.js 15 with App Router
- Server-side rendering (SSR)
- Static site generation (SSG)
- Optimized images and assets
- Fast page loads and smooth animations

### 🎭 Animations & Interactions
- Custom fade-in animations
- Staggered children animations
- Smooth transitions and hover effects
- Hardware-accelerated animations
- Scroll-triggered animations

## 🛠️ Technology Stack | التقنيات المستخدمة

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image
- **Animations:** CSS Transitions + Custom React Hooks
- **Deployment:** Vercel Ready

## 🚀 Getting Started | البداية

### Prerequisites | المتطلبات

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation | التثبيت

1. **Clone the repository | نسخ المشروع**
   ```bash
   git clone https://github.com/abdallhx2/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies | تثبيت المكتبات**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server | تشغيل الخادم المحلي**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser | فتح في المتصفح**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure | هيكل المشروع

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   ├── services/          # Services pages
│   └── shop/              # Shop page
├── components/            # Reusable components
│   ├── Animations.tsx     # Animation components
│   ├── ThemeToggle.tsx   # Theme switcher
│   ├── Footer.tsx        # Footer component
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── ...
├── context/              # React contexts
│   ├── LanguageContext.tsx  # Language management
│   ├── ThemeContext.tsx     # Theme management
│   └── SidebarContext.tsx   # Sidebar state
├── data/                 # Static data and translations
│   ├── me.ts             # Personal information
│   ├── projects.ts       # Projects data
│   ├── blog.ts           # Blog posts data
│   └── colors.ts         # Color schemes
├── hooks/                # Custom React hooks
│   ├── useTranslatedData.ts
│   └── useColorScheme.ts
├── translations/         # Translation files
│   └── index.ts
└── utils/               # Utility functions
    └── colorUtils.ts

public/
├── me/                  # Personal images
├── project/            # Project screenshots
├── roadmap/           # Roadmap icons
└── services/          # Service icons
```

## 🎨 Customization | التخصيص

### Updating Personal Information | تحديث المعلومات الشخصية

**Quick Setup | الإعداد السريع:**

1. **Personal Info | المعلومات الشخصية**: Edit `src/data/me.ts` and `src/data/me-translations.ts`
   ```typescript
   // Update your name, title, bio, contact info, and social links
   // حدث اسمك، المسمى الوظيفي، النبذة، معلومات التواصل، والروابط الاجتماعية
   ```

2. **Projects | المشاريع**: Edit `src/data/projects.ts` and `src/data/projects-translations.ts`
   ```typescript
   // Add your projects with images, descriptions, and links
   // أضف مشاريعك مع الصور والأوصاف والروابط
   ```

3. **Blog Posts | المقالات**: Edit `src/data/blog.ts` and `src/data/blog-translations.ts`
   ```typescript
   // Add your blog posts and articles
   // أضف مقالاتك ومنشوراتك
   ```

4. **Images | الصور**: Replace images in `public/` folders:
   - `public/me/` - Personal photos
   - `public/project/` - Project screenshots
   - `public/services/` - Service icons

### Adding New Languages | إضافة لغات جديدة

1. Update `src/translations/index.ts` with new language translations
2. Add language data to relevant files in `src/data/`
3. Update the language switcher in the customization section

### Customizing Themes | تخصيص المظاهر

1. Edit `src/data/colors.ts` to add new color schemes
2. Update CSS variables in `src/app/globals.css`
3. Test across all components for consistency

### Adding New Sections | إضافة أقسام جديدة

1. Create new components in `src/components/`
2. Add translations in `src/translations/`
3. Import and use in relevant pages

## 📚 Available Scripts | الأوامر المتاحة

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌐 Deployment | النشر

### Vercel (Recommended | الموصى به)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Manual Deployment | النشر اليدوي

1. Build the project: `npm run build`
2. Deploy the generated files

## 📱 Browser Support | دعم المتصفحات

- ✅ Chrome 80+
- ✅ Firefox 80+
- ✅ Safari 14+
- ✅ Edge 80+

## 🤝 Contributing | المساهمة

Contributions are welcome! Please feel free to submit a Pull Request.

المساهمات مرحب بها! لا تتردد في إرسال Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License | الرخصة

This project is open source and available under the [MIT License](LICENSE).

هذا المشروع مفتوح المصدر ومتاح تحت [رخصة MIT](LICENSE).

## 📞 Contact | التواصل

**Abdullah Alhasani | عبدالله الحسني**

- 🌐 **GitHub:** [@abdallhx2](https://github.com/abdallhx2)
- 📧 **Email:** [Contact via GitHub]
- 🐦 **Twitter:** [@01DMXX](https://twitter.com/01DMXX)
- 📍 **Location:** Riyadh, Saudi Arabia | الرياض، المملكة العربية السعودية


---

<div align="center">
  <p><strong>Made with ❤️ by Abdullah Alhasani</strong></p>
  <p><strong>صنع بـ ❤️ بواسطة عبدالله الحسني</strong></p>
  
  <p>
    <a href="https://github.com/abdallhx2/portfolio-website">⭐ Star this repository if you found it helpful!</a>
  </p>
  <p>
    <a href="https://github.com/abdallhx2/portfolio-website">⭐ ضع نجمة للمشروع إذا كان مفيداً!</a>
  </p>
</div>
