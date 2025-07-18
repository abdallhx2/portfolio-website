'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

interface ProjectPageClientProps {
  project: any;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { t } = useLanguage();
  const { projects: translatedProjects } = useTranslatedData();
  
  const translatedProject = translatedProjects.find(p => p.id === project.id) || project;

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-8">
          {/* Back Button */}
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 transition-colors mb-8 hover:text-primary"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t('common.backToHome') || 'Back to Projects'}
            </Link>
          </FadeIn>

        {/* Project Header */}
        <header className="mb-12">
          <FadeIn direction="up" delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: 'var(--secondary)', 
                  color: 'var(--primary)' 
                }}
              >
                {translatedProject.category}
              </span>
              <span style={{ color: 'var(--muted-foreground)' }}>•</span>
              <span style={{ color: 'var(--muted-foreground)' }}>{translatedProject.year}</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {translatedProject.title}
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl mb-6 max-w-3xl" style={{ color: 'var(--muted-foreground)' }}>
              {translatedProject.shortDescription}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-wrap gap-4">
              {translatedProject.url && (
                <a
                  href={translatedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors hover:opacity-90"
                  style={{ 
                    backgroundColor: 'var(--primary)', 
                    color: 'var(--primary-foreground)' 
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('common.viewLive') || 'View Live'}
                </a>
              )}
              {translatedProject.github && (
                <a
                  href={translatedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors hover:bg-card"
                  style={{ 
                    border: '1px solid var(--border)', 
                    backgroundColor: 'transparent',
                    color: 'var(--foreground)' 
                  }}
                >
                  <Github className="w-4 h-4" />
                  {t('common.viewCode') || 'View Code'}
                </a>
              )}
            </div>
          </FadeIn>
        </header>

        {/* Hero Image */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mb-16">
            <Image
              src={translatedProject.image}
              alt={translatedProject.title}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        </FadeIn>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <FadeIn direction="left" delay={0.7}>
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('projects.overview') || 'Project Overview'}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => <p className="leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>{children}</p>,
                      h3: ({children}) => <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: 'var(--foreground)' }}>{children}</h3>,
                      ul: ({children}) => <ul className="list-disc pl-5 mb-4" style={{ color: 'var(--muted-foreground)' }}>{children}</ul>,
                      li: ({children}) => <li className="mb-1">{children}</li>,
                      strong: ({children}) => <strong style={{ color: 'var(--foreground)' }}>{children}</strong>,
                    }}
                  >
                    {translatedProject.description || `This project demonstrates modern web development practices with a focus on user experience and performance. The implementation showcases advanced features including responsive design, accessibility considerations, and optimized loading patterns.

Key features include seamless user interactions, data visualization components, and integration with modern APIs. The project was built with scalability and maintainability in mind.`}
                  </ReactMarkdown>
                </div>
              </section>
            </FadeIn>

            {/* Challenge & Solution */}
            <FadeIn direction="left" delay={0.8}>
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  {t('projects.challenge') || 'Challenge'} & {t('projects.solution') || 'Solution'}
                </h2>
                <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--card)' }}>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    {t('projects.challenge') || 'Challenge'}
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                    {translatedProject.challenge || "Creating a scalable and maintainable solution that meets user needs while ensuring optimal performance across all devices."}
                  </p>
                  <h4 className="font-medium mb-2" style={{ color: 'var(--primary)' }}>
                    {t('projects.solution') || 'Solution'}:
                  </h4>
                  <p style={{ color: 'var(--muted-foreground)' }}>
                    {translatedProject.solution || "Implemented a component-based architecture with modern development tools and practices, ensuring code reusability and optimal user experience."}
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Result */}
            <FadeIn direction="left" delay={0.9}>
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  {t('projects.results') || 'Results & Impact'}
                </h2>
                <StaggerChildren staggerDelay={0.1}>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p style={{ color: 'var(--muted-foreground)' }}>
                        {translatedProject.result || "Successfully delivered a high-performance application that exceeded user expectations"}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p style={{ color: 'var(--muted-foreground)' }}>
                        Improved user engagement and satisfaction through intuitive design
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p style={{ color: 'var(--muted-foreground)' }}>
                        Achieved optimal performance metrics and accessibility standards
                      </p>
                    </div>
                  </div>
                </StaggerChildren>
              </section>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <FadeIn direction="right" delay={0.7}>
              <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--card)' }}>
                <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('projects.projectInfo') || 'Project Info'}
                </h3>
                <div className="space-y-4">
                  {translatedProject.client && (
                    <div>
                      <dt className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{t('projects.client') || 'Client'}</dt>
                      <dd style={{ color: 'var(--foreground)' }}>{translatedProject.client}</dd>
                    </div>
                  )}
                  {translatedProject.duration && (
                    <div>
                      <dt className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{t('projects.duration') || 'Duration'}</dt>
                      <dd style={{ color: 'var(--foreground)' }}>{translatedProject.duration}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{t('projects.year') || 'Year'}</dt>
                    <dd style={{ color: 'var(--foreground)' }}>{translatedProject.year}</dd>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Technologies */}
            <FadeIn direction="right" delay={0.8}>
              <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--card)' }}>
                <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  {t('projects.technologies') || 'Technologies Used'}
                </h3>
                <StaggerChildren staggerDelay={0.1}>
                  <div className="flex flex-wrap gap-2">
                    {translatedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: 'var(--background)', 
                          color: 'var(--muted-foreground)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </StaggerChildren>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Gallery */}
        {translatedProject.gallery && translatedProject.gallery.length > 0 && (
          <FadeIn direction="up" delay={1.0}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
                {t('projects.gallery') || 'Project Gallery'}
              </h2>
              <StaggerChildren staggerDelay={0.2}>
                <div className="grid md:grid-cols-2 gap-6">
                  {translatedProject.gallery.map((image: string, index: number) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${translatedProject.title} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </StaggerChildren>
            </section>
          </FadeIn>
        )}

        {/* Navigation */}
        <FadeIn direction="up" delay={1.1}>
          <nav className="flex justify-between items-center pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex-1">
              {/* Previous project logic would go here */}
            </div>
            
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg transition-colors hover:bg-muted"
              style={{ 
                backgroundColor: 'var(--card)', 
                color: 'var(--foreground)' 
              }}
            >
              {t('projects.allProjects') || 'All Projects'}
            </Link>
            
            <div className="flex-1">
              {/* Next project logic would go here */}
            </div>
          </nav>
        </FadeIn>
      </div>
    </FadeIn>
  );
}