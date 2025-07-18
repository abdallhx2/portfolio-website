'use client';

import { Calendar, Clock, Tag, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { blogPosts } from '@/data/blog';
import Newsletter from '@/components/Newsletter';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

interface BlogPostClientProps {
  post: any;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { language } = useLanguage();
  const { blogPosts: translatedBlogPosts } = useTranslatedData();

  // Translations for static text
  const translations = {
    en: {
      backToBlog: "Back to Blog",
      relatedPosts: "Related Posts",
      minRead: "min read"
    },
    ar: {
      backToBlog: "العودة للمدونة",
      relatedPosts: "مقالات ذات صلة",
      minRead: "دقيقة قراءة"
    }
  };

  const t = translations[language];

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20" style={{ backgroundColor: 'var(--background)' }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 transition-colors mb-8 hover:text-primary"
              style={{ color: 'var(--muted)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
          </FadeIn>

        {/* Header */}
        <header className="mb-12">
          <FadeIn direction="up" delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                {post.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 rounded text-xs"
                    style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {post.title}
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl mb-6" style={{ color: 'var(--muted)' }}>
              {post.excerpt}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--muted)' }}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {typeof post.author === 'string' ? post.author : post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime || (post.readTime ? `${post.readTime} ${t.minRead}` : 'N/A')}
              </div>
            </div>
          </FadeIn>
        </header>

        {/* Featured Image */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mb-12">
            {post.image ? (
              <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold px-4 py-2 rounded" style={{ color: 'var(--muted)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                    {post.category}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                <h3 className="text-xl font-semibold" style={{ color: 'var(--muted)' }}>
                  {post.category}
                </h3>
              </div>
            )}
          </div>
        </FadeIn>

          {/* Content */}
          <FadeIn direction="up" delay={0.7}>
            <article 
              className="prose prose-lg dark:prose-invert max-w-none mb-16 markdown-content"
              style={{ 
                backgroundColor: 'var(--card)', 
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--border)'
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-6" style={{ color: 'var(--foreground)' }}>{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--foreground)' }}>{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: 'var(--foreground)' }}>{children}</h3>,
                  p: ({children}) => <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)' }}>{children}</p>,
                  ul: ({children}) => <ul className="space-y-2 list-disc pl-5 mb-4">{children}</ul>,
                  ol: ({children}) => <ol className="space-y-2 list-decimal pl-5 mb-4">{children}</ol>,
                  li: ({children}) => <li style={{ color: 'var(--foreground)' }}>{children}</li>,
                  blockquote: ({children}) => (
                    <blockquote 
                      className="border-l-4 pl-4 py-2 mb-4 italic" 
                      style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--secondary)' }}
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
                          style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className={className} style={{ color: 'var(--foreground)' }}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({children}) => (
                    <pre 
                      className="p-4 rounded-lg overflow-x-auto mb-4"
                      style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                    >
                      {children}
                    </pre>
                  ),
                  a: ({children, href}) => (
                    <a 
                      href={href}
                      className="underline transition-colors"
                      style={{ color: 'var(--primary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-dark)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    >
                      {children}
                    </a>
                  ),
                  strong: ({children}) => <strong className="font-semibold" style={{ color: 'var(--foreground)' }}>{children}</strong>,
                  em: ({children}) => <em className="italic" style={{ color: 'var(--foreground)' }}>{children}</em>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </FadeIn>


          {/* Related Posts */}
          <FadeIn direction="up" delay={0.9}>
            <section>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
                {t.relatedPosts}
              </h2>
              <StaggerChildren>
                <div className="grid md:grid-cols-2 gap-6">
                  {translatedBlogPosts
                    .filter(p => (p.id !== post.id && p.slug !== post.slug) && p.category === post.category)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <FadeIn key={relatedPost.id} direction="up">
                        <Link
                          href={`/blog/${relatedPost.slug || relatedPost.id}`}
                          className="group rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--card)', 
                            borderColor: 'var(--border)' 
                          }}
                        >
                          {relatedPost.image ? (
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              width={400}
                              height={200}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                              <span style={{ color: 'var(--muted-foreground)' }}>{relatedPost.category}</span>
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <span 
                                className="text-xs font-medium px-2 py-1 rounded-full"
                                style={{ 
                                  backgroundColor: 'var(--accent-background)', 
                                  color: 'var(--accent-foreground)' 
                                }}
                              >
                                {relatedPost.category}
                              </span>
                              <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                                {relatedPost.readingTime || (relatedPost.readTime ? `${relatedPost.readTime} ${t.minRead}` : 'N/A')}
                              </span>
                            </div>
                            <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2" style={{ color: 'var(--foreground)' }}>
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--muted-foreground)' }}>
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </Link>
                      </FadeIn>
                    ))}
                </div>
              </StaggerChildren>
            </section>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
}