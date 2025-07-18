# Hyperfolio - Next.js Portfolio Clone

A modern, scalable portfolio website clone built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates and enhances the design patterns from https://hyperfolio.framer.website/ with improved functionality, performance, and developer experience.

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: CSS-based and React-powered micro-interactions
- **Clean Typography**: Inter font family for optimal readability
- **Consistent Spacing**: Design token system for uniform spacing and colors

### 🔧 Technical Features
- **Next.js 15**: Latest App Router with server components and static generation
- **TypeScript**: Full type safety with comprehensive interfaces
- **Tailwind CSS v4**: Utility-first styling with custom utilities
- **Component Architecture**: Modular, reusable components
- **Error Boundaries**: Graceful error handling and recovery
- **SEO Optimized**: Meta tags, structured data, and performance optimization

### 🚀 Interactive Components
- **Global Search**: Search across projects and blog posts with keyboard navigation
- **Loading States**: Progressive loading indicators and smooth page transitions
- **Newsletter Integration**: Email subscription with validation and feedback
- **Contact Forms**: Functional contact form with validation
- **Scroll Effects**: Parallax scrolling and scroll-to-top functionality
- **Mobile Navigation**: Responsive hamburger menu with smooth animations

### 📱 Pages & Sections
- **Home**: Hero section, featured projects, services, statistics, recent blogs
- **Projects**: Portfolio showcase with filtering by category and detailed project pages
- **Blog**: Article listing with categories, tags, and individual post pages
- **About**: Personal story, skills, experience, and achievements
- **Services**: Service offerings with detailed descriptions
- **Contact**: Contact form, information, and FAQ section
- **Shop**: Template marketplace with pricing and features
- **Bookmarks**: Curated resource collection

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 15.3.5 with Turbopack
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 with custom utilities
- **Font**: Inter (Google Fonts)
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript compiler
- **Dev Server**: Next.js development server with fast refresh

### Architecture Patterns
- **Component Composition**: Reusable UI components
- **Data Management**: Static data with TypeScript interfaces
- **State Management**: React hooks for local state
- **Error Handling**: Error boundaries and graceful fallbacks
- **Performance**: Image optimization, lazy loading, and code splitting

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and utilities
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects pages
│   │   ├── page.tsx       # Projects listing
│   │   └── [slug]/        # Individual project pages
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Individual blog posts
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── shop/              # Shop page
│   └── bookmark/          # Bookmarks page
├── components/            # Reusable UI components
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── Footer.tsx         # Site footer
│   ├── LoadingBar.tsx     # Page transition indicator
│   ├── ThemeToggle.tsx    # Dark mode toggle
│   ├── ScrollToTop.tsx    # Scroll to top button
│   ├── Search.tsx         # Global search component
│   ├── Newsletter.tsx     # Email subscription
│   ├── ErrorBoundary.tsx  # Error boundary wrapper
│   └── Animations.tsx     # Animation utilities
├── data/                  # Static data and types
│   ├── projects.ts        # Project data and interfaces
│   └── blog.ts            # Blog data and interfaces
└── public/                # Static assets
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portofilo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Export static files (optional)
npm run export
```

## 📝 Content Management

### Adding Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Brief description",
  category: "Web Development",
  technologies: ["Next.js", "TypeScript"],
  image: "/images/project.jpg",
  gallery: ["/images/1.jpg", "/images/2.jpg"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/user/repo",
  featured: true,
  year: "2024",
  client: "Client Name",
  duration: "3 months",
  role: "Full Stack Developer",
  challenges: ["Challenge 1", "Challenge 2"],
  solutions: ["Solution 1", "Solution 2"],
  results: ["Result 1", "Result 2"]
}
```

### Adding Blog Posts

Edit `src/data/blog.ts` to add new blog posts:

```typescript
{
  id: "unique-post-id",
  title: "Blog Post Title",
  excerpt: "Brief excerpt",
  content: "Full markdown content",
  category: "Technology",
  tags: ["nextjs", "react"],
  image: "/images/blog.jpg",
  author: {
    name: "Author Name",
    avatar: "/images/avatar.jpg",
    bio: "Author bio"
  },
  publishedAt: "2024-01-01",
  readingTime: "5 min read",
  featured: true,
  views: 1250,
  likes: 45
}
```

## 🎨 Customization

### Design Tokens

The design system is built with CSS custom properties in `src/app/globals.css`:

```css
:root {
  --color-primary: rgb(147 51 234);
  --color-secondary: rgb(139 92 246);
  --spacing-unit: 0.25rem;
  --border-radius: 0.5rem;
}
```

### Custom Components

Create new components in `src/components/`:

```typescript
interface ComponentProps {
  title: string;
  description?: string;
  variant?: 'default' | 'large';
}

export default function CustomComponent({ 
  title, 
  description, 
  variant = 'default' 
}: ComponentProps) {
  return (
    <div className={`component ${variant}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### Animations

Use the animation utilities from `src/components/Animations.tsx`:

```jsx
import { FadeIn, CountUp, StaggerChildren } from '@/components/Animations';

<FadeIn direction="up" delay={0.2}>
  <h2>Animated Title</h2>
</FadeIn>

<CountUp end={100} suffix="+" duration={2} />

<StaggerChildren staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerChildren>
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Style

- Use TypeScript for all components and utilities
- Follow component composition patterns
- Implement proper error boundaries
- Use semantic HTML elements
- Ensure accessibility compliance
- Write descriptive commit messages

### Performance Best Practices

- Use Next.js Image component for optimized images
- Implement lazy loading for components below the fold
- Minimize bundle size with dynamic imports
- Use proper caching strategies
- Optimize Web Vitals (LCP, FID, CLS)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out` (if using static export)
3. Set up continuous deployment

### Self-Hosting

1. Build the project: `npm run build`
2. Copy `.next` folder to your server
3. Install dependencies: `npm ci --production`
4. Start with: `npm start`

## 🔮 Future Enhancements

### Planned Features
- [ ] **CMS Integration**: Headless CMS for dynamic content management
- [ ] **E-commerce**: Shopping cart and payment integration for template sales
- [ ] **Authentication**: User accounts and personalized experiences
- [ ] **Analytics**: Custom analytics dashboard and visitor insights
- [ ] **Performance Monitoring**: Real-time performance metrics
- [ ] **Advanced Search**: Full-text search with filters and sorting
- [ ] **Comments System**: Blog post comments and engagement features
- [ ] **Social Integration**: Social media sharing and OAuth login

### Technical Improvements
- [ ] **Testing Suite**: Unit, integration, and E2E tests
- [ ] **CI/CD Pipeline**: Automated testing and deployment
- [ ] **Database Integration**: PostgreSQL/MongoDB for dynamic data
- [ ] **API Routes**: Backend API for forms and dynamic features
- [ ] **Internationalization**: Multi-language support
- [ ] **PWA Features**: Service workers and offline functionality
- [ ] **Advanced Caching**: Redis caching and ISR optimization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Email: hello@pentaclay.com
- Twitter: @yourhandle

## 🙏 Acknowledgments

- Original design inspiration from [Hyperfolio](https://hyperfolio.framer.website/)
- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Lucide team for the beautiful icon library
- Vercel for hosting and deployment platform

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
