
import { projectsTranslations } from '@/data/projects-translations';
import { notFound } from 'next/navigation';
import ProjectPageClient from './ProjectPageClient';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Get all projects from both languages to find the project
  const allProjectsEn = projectsTranslations.en;
  const allProjectsAr = projectsTranslations.ar;
  
  // Find the project in either language
  const project = allProjectsEn.find(p => p.id === params.slug) || 
                  allProjectsAr.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}

export async function generateStaticParams() {
  // Generate params from all projects in both languages
  const allProjects = [...projectsTranslations.en, ...projectsTranslations.ar];
  const uniqueIds = [...new Set(allProjects.map(project => project.id))];
  
  return uniqueIds.map((id) => ({
    slug: id,
  }));
}
