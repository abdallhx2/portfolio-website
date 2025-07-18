'use client';

import { notFound } from 'next/navigation';
import { blogPostsTranslations } from '@/data/blog-translations';
import BlogPostClient from './BlogPostClient';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

import { BlogPostTranslation } from '@/data/blog-translations';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { language } = useLanguage();
  const [slug, setSlug] = useState<string>('');
  const [post, setPost] = useState<BlogPostTranslation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
    });
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    // Get posts from the current language
    const posts = blogPostsTranslations[language];
    
    // Find the post by slug or id in the current language
    const foundPost = posts.find(p => p.slug === slug || p.id === slug);
    
    setPost(foundPost || null);
    setIsLoading(false);
  }, [slug, language]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}

