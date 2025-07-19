'use client';

import Link from 'next/link';
import { ArrowLeft, Bookmark as BookmarkIcon, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/Animations';

const bookmarkedItems = [
  {
    id: 1,
    type: "Article",
    title: "The Future of Design Systems",
    description: "Exploring how design systems are evolving and what the future holds for design consistency.",
    url: "https://medium.com/design-systems",
    domain: "medium.com",
    tags: ["Design Systems", "Future", "Trends"]
  },
  {
    id: 2,
    type: "Tool",
    title: "Figma Auto Layout Guide",
    description: "Complete guide to mastering Auto Layout in Figma for responsive design.",
    url: "https://figma.com/auto-layout",
    domain: "figma.com",
    tags: ["Figma", "Tutorial", "Auto Layout"]
  },
  {
    id: 3,
    type: "Inspiration",
    title: "Dribbble UI Patterns",
    description: "Collection of beautiful UI patterns and micro-interactions for inspiration.",
    url: "https://dribbble.com/patterns",
    domain: "dribbble.com",
    tags: ["UI", "Patterns", "Inspiration"]
  },
  {
    id: 4,
    type: "Resource",
    title: "Color Palette Generator",
    description: "AI-powered tool for generating beautiful color palettes for your designs.",
    url: "https://coolors.co",
    domain: "coolors.co",
    tags: ["Colors", "Generator", "Tools"]
  },
  {
    id: 5,
    type: "Article",
    title: "UX Research Methods",
    description: "Comprehensive guide to different UX research methods and when to use them.",
    url: "https://uxresearch.guide",
    domain: "uxresearch.guide",
    tags: ["UX Research", "Methods", "Guide"]
  },
  {
    id: 6,
    type: "Tool",
    title: "Accessibility Checker",
    description: "Tool for checking web accessibility compliance and getting improvement suggestions.",
    url: "https://wave.webaim.org",
    domain: "wave.webaim.org",
    tags: ["Accessibility", "Testing", "WCAG"]
  }
];

const categories = [
  { name: "All", count: 6, active: true },
  { name: "Articles", count: 2, active: false },
  { name: "Tools", count: 2, active: false },
  { name: "Inspiration", count: 1, active: false },
  { name: "Resources", count: 1, active: false }
];

export default function BookmarkPage() {
  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen page-container px-4 lg:px-8 pt-16 pb-20">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center mb-6 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Design Bookmarks</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A curated collection of useful design resources, tools, articles, and inspiration that I&apos;ve found valuable in my design journey.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              style={{
                backgroundColor: category.active ? 'var(--accent-primary)' : 'var(--surface)',
                color: category.active ? 'var(--accent-text)' : 'var(--text-secondary)',
                border: category.active ? 'none' : '1px solid var(--border-color)'
              }}
              onMouseEnter={(e) => {
                if (!category.active) {
                  e.currentTarget.style.backgroundColor = 'var(--accent-light)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!category.active) {
                  e.currentTarget.style.backgroundColor = 'var(--surface)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <span>{category.name}</span>
              <span 
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: category.active ? 'var(--accent-secondary)' : 'var(--background-secondary)',
                  color: category.active ? 'var(--accent-text)' : 'var(--text-tertiary)'
                }}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bookmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bookmarkedItems.map((item) => (
            <div key={item.id} className="card p-6 group">
              <div className="flex items-start justify-between mb-4">
                <span 
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: 
                      item.type === 'Article' ? 'var(--info-light)' :
                      item.type === 'Tool' ? 'var(--success-light)' :
                      item.type === 'Inspiration' ? 'var(--accent-light)' :
                      'var(--warning-light)',
                    color: 
                      item.type === 'Article' ? 'var(--info)' :
                      item.type === 'Tool' ? 'var(--success)' :
                      item.type === 'Inspiration' ? 'var(--accent-primary)' :
                      'var(--warning)'
                  }}
                >
                  {item.type}
                </span>
                <BookmarkIcon className="fill-current" style={{ color: 'var(--accent-primary)' }} size={16} />
              </div>
              
              <h3 
                className="font-semibold mb-2 transition-colors group-hover:text-accent-primary"
                style={{ color: 'var(--text-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {item.title}
              </h3>
              
              <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{item.domain}</span>
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'var(--accent-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--background-secondary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add Bookmark CTA */}
        <div className="card p-8 text-center">
          <BookmarkIcon className="mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} size={32} />
          <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            Know a Great Resource?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            If you have a design resource, tool, or article that you think would be valuable to the community, 
            feel free to share it with me!
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Suggest a Resource</span>
            <ExternalLink size={18} />
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div 
            className="card p-8 border"
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Get Weekly Design Resources
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Subscribe to receive curated design resources, tools, and inspiration delivered to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text-primary)'
                  } as React.CSSProperties}
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
