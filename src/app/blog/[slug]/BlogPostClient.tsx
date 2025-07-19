'use client';

import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, Heart, Eye, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';
import { useState } from 'react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string | { name: string };
  publishedAt: string;
  readingTime?: string;
  readTime?: number;
  image?: string;
  views?: number;
  likes?: number;
}

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { language } = useLanguage();
  const { blogPosts: translatedBlogPosts } = useTranslatedData();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Translations for static text
  const translations = {
    en: {
      backToBlog: "Back to Blog",
      relatedPosts: "Related Posts",
      minRead: "min read",
      share: "Share",
      bookmark: "Bookmark",
      like: "Like",
      tableOfContents: "Table of Contents",
      author: "Author",
      publishedOn: "Published on",
      readTime: "Read time",
      views: "Views",
      likes: "Likes"
    },
    ar: {
      backToBlog: "العودة للمدونة",
      relatedPosts: "مقالات ذات صلة",
      minRead: "دقيقة قراءة",
      share: "مشاركة",
      bookmark: "حفظ",
      like: "إعجاب",
      tableOfContents: "جدول المحتويات",
      author: "الكاتب",
      publishedOn: "نُشر في",
      readTime: "وقت القراءة",
      views: "المشاهدات",
      likes: "الإعجابات"
    }
  };

  const t = translations[language];

  const relatedPosts = translatedBlogPosts
    .filter(p => (p.id !== post.id && p.slug !== post.slug) && p.category === post.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="min-h-screen pt-20" 
      style={{ backgroundColor: 'var(--color-background)' }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Navigation */}
      <FadeIn direction="down" duration={0.5}>
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(var(--color-background), 0.8)', borderColor: 'var(--color-border)' }}>
          <div className="page-container px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <ArrowLeft size={16} />
                {t.backToBlog}
              </Link>
              
              {/* Social Actions */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: isLiked ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: isLiked ? 'white' : 'var(--color-text-secondary)'
                  }}
                >
                  <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: isBookmarked ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: isBookmarked ? 'white' : 'var(--color-text-secondary)'
                  }}
                >
                  <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
                <button 
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Section */}
      <FadeIn direction="up" duration={0.6}>
        <section className="relative overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20" />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
              <div className="page-container mx-auto text-white">
                {/* Category & Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 max-w-4xl">
                  {post.title}
                </h1>
                
                {/* Excerpt */}
                <p className="text-sm sm:text-base lg:text-xl mb-6 max-w-3xl opacity-90 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Article Meta */}
      <FadeIn direction="up" delay={0.2}>
        <section className="border-b" style={{ borderColor: 'var(--color-border)' }}>
          <div className="page-container px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                >
                  {typeof post.author === 'string' ? post.author.charAt(0) : post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {typeof post.author === 'string' ? post.author : post.author.name}
                  </p>
                  <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readingTime || (post.readTime ? `${post.readTime} ${t.minRead}` : 'N/A')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {post.views ? post.views.toLocaleString() : '0'}
                </span>
                <span className="flex items-center gap-1">
                  <Heart size={16} />
                  {post.likes || '0'}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  0
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Main Content */}
      <div className="page-container px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <FadeIn direction="up" delay={0.3}>
            <article className="mb-16">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none markdown-content"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--color-border)'
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({children}) => (
                      <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-6 scroll-mt-20" style={{ color: 'var(--color-text-primary)' }}>
                        {children}
                      </h1>
                    ),
                    h2: ({children}) => (
                      <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 scroll-mt-20" style={{ color: 'var(--color-text-primary)' }}>
                        {children}
                      </h2>
                    ),
                    h3: ({children}) => (
                      <h3 className="text-lg sm:text-xl font-bold mt-6 mb-3 scroll-mt-20" style={{ color: 'var(--color-text-primary)' }}>
                        {children}
                      </h3>
                    ),
                    p: ({children}) => (
                      <p className="mb-4 leading-relaxed text-sm sm:text-base" style={{ color: 'var(--color-text-primary)' }}>
                        {children}
                      </p>
                    ),
                    ul: ({children}) => <ul className="space-y-2 list-disc pl-5 mb-4">{children}</ul>,
                    ol: ({children}) => <ol className="space-y-2 list-decimal pl-5 mb-4">{children}</ol>,
                    li: ({children}) => <li className="text-sm sm:text-base" style={{ color: 'var(--color-text-primary)' }}>{children}</li>,
                    blockquote: ({children}) => (
                      <blockquote 
                        className="border-l-4 pl-4 py-3 mb-6 italic rounded-r-lg"
                        style={{ 
                          borderColor: 'var(--color-primary)', 
                          backgroundColor: 'var(--color-surface-hover)',
                          color: 'var(--color-text-secondary)'
                        }}
                      >
                        {children}
                      </blockquote>
                    ),
                    code: ({children, className}) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code 
                            className="px-2 py-1 rounded text-sm font-mono"
                            style={{ backgroundColor: 'var(--color-surface-hover)', color: 'var(--color-primary)' }}
                          >
                            {children}
                          </code>
                        );
                      }
                      return (
                        <code className={className} style={{ color: 'var(--color-text-primary)' }}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({children}) => (
                      <pre 
                        className="p-4 rounded-lg overflow-x-auto mb-6 text-sm"
                        style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                      >
                        {children}
                      </pre>
                    ),
                    a: ({children, href}) => (
                      <a 
                        href={href}
                        className="underline transition-colors font-medium"
                        style={{ color: 'var(--color-primary)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                      >
                        {children}
                      </a>
                    ),
                    strong: ({children}) => <strong className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{children}</strong>,
                    em: ({children}) => <em className="italic" style={{ color: 'var(--color-text-primary)' }}>{children}</em>,
                    img: ({src, alt}) => (
                      <div className="my-8 rounded-lg overflow-hidden">
                        <Image
                          src={typeof src === 'string' ? src : ''}
                          alt={alt || ''}
                          width={800}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    ),
                    table: ({children}) => (
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse" style={{ borderColor: 'var(--color-border)' }}>
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({children}) => (
                      <th className="border px-4 py-2 font-semibold text-left" style={{ 
                        borderColor: 'var(--color-border)', 
                        backgroundColor: 'var(--color-surface-hover)',
                        color: 'var(--color-text-primary)'
                      }}>
                        {children}
                      </th>
                    ),
                    td: ({children}) => (
                      <td className="border px-4 py-2" style={{ 
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)'
                      }}>
                        {children}
                      </td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </FadeIn>

          {/* Article Actions */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16 p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  Was this helpful?
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{ 
                      backgroundColor: isLiked ? 'var(--color-primary)' : 'var(--color-surface-hover)',
                      color: isLiked ? 'white' : 'var(--color-text-primary)'
                    }}
                  >
                    <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    {t.like}
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{ 
                      backgroundColor: isBookmarked ? 'var(--color-primary)' : 'var(--color-surface-hover)',
                      color: isBookmarked ? 'white' : 'var(--color-text-primary)'
                    }}
                  >
                    <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                    {t.bookmark}
                  </button>
                </div>
              </div>
              
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                <Share2 size={16} />
                {t.share}
              </button>
            </div>
          </FadeIn>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <FadeIn direction="up" delay={0.5}>
              <section>
                <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
                  {t.relatedPosts}
                </h2>
                
                <StaggerChildren>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost, index) => (
                      <FadeIn key={relatedPost.id} direction="up" delay={index * 0.1}>
                        <Link
                          href={`/blog/${relatedPost.slug || relatedPost.id}`}
                          className="group block h-full"
                        >
                          <article className="h-full rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ 
                            backgroundColor: 'var(--color-surface)', 
                            borderColor: 'var(--color-border)' 
                          }}>
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden">
                              {relatedPost.image ? (
                                <Image
                                  src={relatedPost.image}
                                  alt={relatedPost.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                                  <span className="text-lg font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                                    {relatedPost.category}
                                  </span>
                                </div>
                              )}
                              
                              <div className="absolute bottom-3 left-3">
                                <span 
                                  className="px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                                  style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                                    color: 'var(--color-primary)' 
                                  }}
                                >
                                  {relatedPost.category}
                                </span>
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {formatDate(relatedPost.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock size={12} />
                                  {relatedPost.readingTime || (relatedPost.readTime ? `${relatedPost.readTime} ${t.minRead}` : 'N/A')}
                                </span>
                              </div>
                              
                              <h3 className="font-bold mb-2 group-hover:text-purple-600 transition-colors line-clamp-2" style={{ color: 'var(--color-text-primary)' }}>
                                {relatedPost.title}
                              </h3>
                              
                              <p className="text-sm line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
                                {relatedPost.excerpt}
                              </p>
                            </div>
                          </article>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                </StaggerChildren>
              </section>
            </FadeIn>
          )}

          {/* Navigation */}
          <FadeIn direction="up" delay={0.6}>
            <div className="flex items-center justify-between mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <Link 
                href="/blog"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">All Articles</span>
              </Link>
              
              <Link 
                href="/blog"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                <span className="hidden sm:inline">Browse More</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}