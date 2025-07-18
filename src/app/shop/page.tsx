'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { FadeIn } from '@/components/Animations';

const designTemplates = [
  {
    id: 1,
    title: "Hyperfolio Template",
    price: "$49",
    rating: 4.9,
    reviews: 124,
    image: "/template-1.jpg",
    tags: ["Portfolio", "Framer", "Responsive"]
  },
  {
    id: 2,
    title: "SaaS Landing Page Kit",
    price: "$79",
    rating: 4.8,
    reviews: 89,
    image: "/template-2.jpg", 
    tags: ["SaaS", "Landing", "Modern"]
  },
  {
    id: 3,
    title: "E-commerce UI Kit",
    price: "$99",
    rating: 4.9,
    reviews: 156,
    image: "/template-3.jpg",
    tags: ["E-commerce", "UI Kit", "Figma"]
  },
  {
    id: 4,
    title: "Mobile App Design System",
    price: "$129",
    rating: 5.0,
    reviews: 67,
    image: "/template-4.jpg",
    tags: ["Mobile", "Design System", "iOS"]
  },
  {
    id: 5,
    title: "Dashboard Admin Template",
    price: "$89",
    rating: 4.7,
    reviews: 203,
    image: "/template-5.jpg",
    tags: ["Dashboard", "Admin", "React"]
  },
  {
    id: 6,
    title: "Agency Website Template",
    price: "$59",
    rating: 4.8,
    reviews: 95,
    image: "/template-6.jpg",
    tags: ["Agency", "Creative", "Portfolio"]
  }
];

export default function ShopPage() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

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
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Design Templates & Resources</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              High-quality design templates and UI kits to accelerate your projects. 
              All templates are fully customizable and come with detailed documentation.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All Templates', 'Framer', 'Figma', 'React', 'UI Kits'].map((filter, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: index === 0 
                  ? 'var(--color-primary)' 
                  : hoveredElement === `filter-${index}` 
                    ? 'var(--color-primary-light)' 
                    : 'var(--color-surface)',
                color: index === 0 
                  ? 'white' 
                  : hoveredElement === `filter-${index}` 
                    ? 'var(--color-primary)' 
                    : 'var(--color-text-secondary)',
                border: index === 0 ? 'none' : '1px solid var(--color-border)'
              }}
              onMouseEnter={() => setHoveredElement(`filter-${index}`)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {designTemplates.map((template) => (
            <div key={template.id} className="card overflow-hidden group" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <div className="aspect-video flex items-center justify-center border-b" style={{ borderColor: 'var(--border)' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>Template Preview</span>
                <div className="absolute top-4 right-4 px-2 py-1 rounded text-sm font-semibold" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--color-border)' }}>
                  {template.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                  {template.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="fill-current" size={16} style={{ color: '#fbbf24' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{template.rating}</span>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>({template.reviews} reviews)</span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-secondary)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="btn-primary w-full flex items-center justify-center space-x-2 transition-colors"
                  style={{
                    backgroundColor: hoveredElement === `buy-${template.id}` ? 'var(--color-primary-dark)' : 'var(--color-primary)',
                    color: 'white'
                  }}
                  onMouseEnter={() => setHoveredElement(`buy-${template.id}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <ShoppingCart size={16} />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All-Access Pass */}
        <div className="card p-8 text-center border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>All-Access Pass</h2>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Get unlimited access to all current and future templates, plus exclusive resources and early access to new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-3xl font-bold">$97</div>
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: hoveredElement === 'all-access-btn' ? 'rgba(255, 255, 255, 0.9)' : 'white',
                color: 'var(--color-primary)'
              }}
              onMouseEnter={() => setHoveredElement('all-access-btn')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Get All-Access Pass
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "High-Quality Designs",
                description: "Professionally crafted templates with attention to detail and modern design principles."
              },
              {
                title: "Full Customization",
                description: "All templates are fully customizable with well-organized layers and components."
              },
              {
                title: "Documentation",
                description: "Detailed setup guides and documentation to help you get started quickly."
              }
            ].map((feature, index) => (
              <div key={index} className="card p-6 text-center" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
