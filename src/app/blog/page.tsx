'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Heart, Eye, Filter } from 'lucide-react';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function BlogPage() {
  const { t, language } = useLanguage();
  const { blogCategories, getBlogPostsByCategory } = useTranslatedData();
  const [activeCategory, setActiveCategory] = useState(blogCategories[0]);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const filteredPosts = getBlogPostsByCategory(activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20" style={{ backgroundColor: 'var(--color-background)' }}>
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center mb-6 transition-colors"
            style={{ 
              color: hoveredElement === 'back-link' ? 'var(--color-primary)' : 'var(--color-text-secondary)' 
            }}
            onMouseEnter={() => setHoveredElement('back-link')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('common.backToHome')}
          </Link>
          
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{t('blog.title')}</h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            {t('blog.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={16} style={{ color: 'var(--color-text-secondary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{t('projects.filterBy')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === category 
                    ? 'var(--color-primary)' 
                    : hoveredElement === `filter-${category}` 
                      ? 'var(--color-surface-hover)' 
                      : 'var(--color-surface)',
                  color: activeCategory === category 
                    ? 'white' 
                    : 'var(--color-text-secondary)',
                  border: activeCategory === category 
                    ? 'none' 
                    : '1px solid var(--color-border)',
                  boxShadow: activeCategory === category ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                onMouseEnter={() => setHoveredElement(`filter-${category}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden group" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              {/* Post Image */}
              <div className="aspect-video flex items-center justify-center border-b" style={{ borderColor: 'var(--color-border)' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>{post.category}</span>
                {post.featured && (
                  <div className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-primary)' }}>
                    Featured
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{formatDate(post.publishedAt)}</span>
                </div>

                <h3 className="font-semibold mb-2 group-hover:transition-colors line-clamp-2" style={{ color: 'var(--color-text-primary)' }}>
                  {post.title}
                </h3>

                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
                  {post.excerpt}
                </p>

                {/* Author and Meta */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}>
                      {typeof post.author === 'string' ? post.author.charAt(0) : post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>{typeof post.author === 'string' ? post.author : post.author.name}</p>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readingTime || (post.readTime ? `${post.readTime} min read` : 'N/A')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {post.views ? post.views.toLocaleString() : '0'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} />
                          {post.likes || '0'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug || post.id}`}
                    className="text-sm font-medium transition-colors"
                    style={{
                      color: hoveredElement === `post-${post.id}` ? 'var(--color-primary-dark)' : 'var(--color-primary)'
                    }}
                    onMouseEnter={() => setHoveredElement(`post-${post.id}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>No posts found</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>Try selecting a different category to see more posts.</p>
          </div>
        )}


      </div>
    </FadeIn>
  );
}
