'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Heart, Eye, Filter, Calendar, Search } from 'lucide-react';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function BlogPage() {
  const { t, language } = useLanguage();
  const { blogCategories, getBlogPostsByCategory } = useTranslatedData();
  const [activeCategory, setActiveCategory] = useState(blogCategories[0]);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = getBlogPostsByCategory(activeCategory).filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="mb-12">
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/" 
              className="inline-flex items-center mb-6 transition-colors"
              style={{ 
                color: hoveredElement === 'back-link' ? 'var(--primary)' : 'var(--muted-foreground)' 
              }}
              onMouseEnter={() => setHoveredElement('back-link')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <ArrowLeft size={20} className={`${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t('common.backToHome')}
            </Link>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {t('blog.title')}
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted-foreground)' }}>
              {t('blog.description')}
            </p>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn direction="up" delay={0.3}>
            <div className="relative max-w-md mt-6">
              <Search 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                style={{ color: 'var(--muted-foreground)' }}
              />
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder') || "Search articles..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
              />
            </div>
          </FadeIn>
        </div>

     

        {/* Category Filter */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} style={{ color: 'var(--muted-foreground)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                {t('projects.filterBy')}
              </span>
            </div>
            
            <StaggerChildren staggerDelay={0.1}>
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={{
                      backgroundColor: activeCategory === category 
                        ? 'var(--primary)' 
                        : hoveredElement === `filter-${category}` 
                          ? 'var(--muted)' 
                          : 'var(--card)',
                      color: activeCategory === category 
                        ? 'white' 
                        : 'var(--muted-foreground)',
                      border: activeCategory === category 
                        ? 'none' 
                        : '1px solid var(--border)',
                      boxShadow: activeCategory === category ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredElement(`filter-${category}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Blog Posts Grid */}
        <StaggerChildren staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1" 
                style={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  boxShadow: hoveredElement === `post-${post.id}` 
                    ? '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredElement(`post-${post.id}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {/* Post Image */}
                <div className="aspect-video relative border-b" style={{ borderColor: 'var(--border)' }}>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                      <span className="text-lg font-medium" style={{ color: 'var(--muted-foreground)' }}>
                        {post.category}
                      </span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-white text-xs rounded-full font-medium" style={{ backgroundColor: 'var(--primary)' }}>
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium" 
                      style={{ backgroundColor: 'var(--primary)/10', color: 'var(--primary)' }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Date and Reading Time */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      <Calendar size={12} />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      <Clock size={12} />
                      <span>{post.readingTime || (post.readTime ? `${post.readTime} min` : 'N/A')}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-semibold mb-2 group-hover:transition-colors line-clamp-2" 
                    style={{ color: 'var(--foreground)' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    className="text-sm mb-4 line-clamp-3" 
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Author and Meta */}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        {typeof post.author === 'string' ? post.author.charAt(0) : post.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                          {typeof post.author === 'string' ? post.author : post.author.name}
                        </p>
                      </div>
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--muted-foreground)' }}>
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

                  {/* Read More Button */}
                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.slug || post.id}`}
                      className="w-full text-center font-medium block py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                      style={{
                        backgroundColor: hoveredElement === `post-${post.id}-read` ? 'var(--primary)' : 'transparent',
                        color: hoveredElement === `post-${post.id}-read` ? 'white' : 'var(--primary)',
                        border: `1px solid ${hoveredElement === `post-${post.id}-read` ? 'var(--primary)' : 'var(--border)'}`,
                        boxShadow: hoveredElement === `post-${post.id}-read` ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                      }}
                      onMouseEnter={() => setHoveredElement(`post-${post.id}-read`)}
                      onMouseLeave={() => setHoveredElement(null)}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StaggerChildren>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <FadeIn direction="up" delay={0.6}>
            <div className="text-center py-12">
              <div className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                No articles found
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }}>
                {searchQuery 
                  ? `No articles match "${searchQuery}". Try a different search term.`
                  : "Try selecting a different category to see more articles."
                }
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-6 py-2 rounded-lg font-medium transition-colors"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white'
                  }}
                >
                  Clear Search
                </button>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </FadeIn>
  );
}
