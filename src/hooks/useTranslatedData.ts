import { useLanguage } from '@/context/LanguageContext';
import { personalInfoTranslations, experiencesTranslations, educationTranslations, skillsTranslations, certificatesTranslations, servicesTranslations, testimonialsTranslations, statistics, faqTranslations } from '@/data/me-translations';
import { projectsTranslations, projectCategoriesTranslations, getProjectsByCategoryTranslated, featuredProjectsTranslations } from '@/data/projects-translations';
import { blogPostsTranslations, blogCategoriesTranslations, getBlogPostsByCategoryTranslated, featuredBlogPostsTranslations } from '@/data/blog-translations';

export function useTranslatedData() {
  const { language } = useLanguage();

  return {
    // Personal data
    personalInfo: personalInfoTranslations[language],
    experiences: experiencesTranslations[language],
    education: educationTranslations[language],
    skills: skillsTranslations[language],
    certificates: certificatesTranslations[language],
    services: servicesTranslations[language],
    testimonials: testimonialsTranslations[language],
    statistics,
    faq: faqTranslations[language],

    // Projects data
    projects: projectsTranslations[language],
    projectCategories: projectCategoriesTranslations[language],
    featuredProjects: featuredProjectsTranslations[language],
    getProjectsByCategory: (category: string) => getProjectsByCategoryTranslated(category, language),

    // Blog data
    blogPosts: blogPostsTranslations[language],
    blogCategories: blogCategoriesTranslations[language],
    featuredBlogPosts: featuredBlogPostsTranslations[language],
    getBlogPostsByCategory: (category: string) => getBlogPostsByCategoryTranslated(category, language),
  };
}