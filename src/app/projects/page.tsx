'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Filter } from 'lucide-react';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const { projectCategories, getProjectsByCategory } = useTranslatedData();
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-8">
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
                <ArrowLeft size={20} className="mr-2" />
                {t('common.backToHome')}
              </Link>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>{t('projects.title')}</h1>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--muted-foreground)' }}>
                {t('projects.description')}
              </p>
            </FadeIn>
          </div>

        {/* Category Filter */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} style={{ color: 'var(--muted-foreground)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{t('projects.filterBy')}</span>
            </div>
            <StaggerChildren staggerDelay={0.1}>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
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

        {/* Projects Grid */}
        <StaggerChildren staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden group" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              {/* Project Image */}
              <div className="aspect-video relative border-b" style={{ borderColor: 'var(--border)' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--primary)' }}>
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:transition-colors" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{project.client} • {project.year}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--primary)/10', color: 'var(--primary)' }}>
                    {project.category}
                  </span>
                </div>

                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--muted-foreground)' }}>
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--muted-foreground)' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>+{project.tags.length - 3} more</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="flex-1 text-white text-sm py-2 px-3 rounded-lg transition-colors text-center font-medium"
                    style={{
                      backgroundColor: hoveredElement === `project-${project.id}-view` ? 'var(--primary-foreground)' : 'var(--primary)'
                    }}
                    onMouseEnter={() => setHoveredElement(`project-${project.id}-view`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    View Details
                  </Link>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors"
                      style={{
                        color: hoveredElement === `project-${project.id}-url` ? 'var(--primary)' : 'var(--muted-foreground)'
                      }}
                      onMouseEnter={() => setHoveredElement(`project-${project.id}-url`)}
                      onMouseLeave={() => setHoveredElement(null)}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors"
                      style={{
                        color: hoveredElement === `project-${project.id}-github` ? 'var(--primary)' : 'var(--muted-foreground)'
                      }}
                      onMouseEnter={() => setHoveredElement(`project-${project.id}-github`)}
                      onMouseLeave={() => setHoveredElement(null)}
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </StaggerChildren>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>No projects found</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>Try selecting a different category to see more projects.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Have a Project in Mind?</h2>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              I&apos;m always excited to work on new challenges and bring innovative ideas to life. 
              Let&apos;s discuss how we can collaborate to create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary transition-colors"
                style={{
                  backgroundColor: hoveredElement === 'cta-contact' ? 'var(--primary-foreground)' : 'var(--primary)',
                  color: 'white'
                }}
                onMouseEnter={() => setHoveredElement('cta-contact')}
                onMouseLeave={() => setHoveredElement(null)}
              >
                Start a Project
              </Link>
              <Link 
                href="/about"
                className="btn-secondary transition-colors"
                style={{
                  backgroundColor: hoveredElement === 'cta-about' ? 'var(--muted)' : 'var(--card)',
                  color: 'var(--primary)',
                  border: '1px solid var(--border)'
                }}
                onMouseEnter={() => setHoveredElement('cta-about')}
                onMouseLeave={() => setHoveredElement(null)}
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
