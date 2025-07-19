/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';

interface SearchResult {
  type: 'project' | 'blog';
  title: string;
  description: string;
  url: string;
  category?: string;
}

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search projects
    projects.forEach(project => {
      if (
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery) ||
        project.category.toLowerCase().includes(searchQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
      ) {
        searchResults.push({
          type: 'project',
          title: project.title,
          description: project.description,
          url: `/projects/${(project as any).slug || project.id}`,
          category: project.category,
        });
      }
    });

    // Search blog posts
    blogPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.category.toLowerCase().includes(searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      ) {
        searchResults.push({
          type: 'blog',
          title: post.title,
          description: post.excerpt,
          url: `/blog/${(post as any).slug || post.id}`,
          category: post.category,
        });
      }
    });

    setResults(searchResults.slice(0, 10));
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      window.location.href = results[selectedIndex].url;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-start justify-center pt-20" style={{ backgroundColor: 'var(--overlay-bg)' }}>
      <div className="rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="flex items-center gap-3 p-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <SearchIcon className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, blogs, technologies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-lg"
            style={{ 
              color: 'var(--text-primary)'
            }}
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg transition-colors"
            style={{ 
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={`${result.type}-${result.title}`}
                href={result.url}
                onClick={onClose}
                className="block p-4 last:border-b-0 transition-colors"
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  backgroundColor: index === selectedIndex ? 'var(--surface-hover)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (index !== selectedIndex) {
                    e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== selectedIndex) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: result.type === 'project' ? 'var(--accent-bg)' : 'var(--success-bg)',
                      color: result.type === 'project' ? 'var(--accent-text)' : 'var(--success-text)'
                    }}
                  >
                    {result.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                      {result.title}
                    </h3>
                    <p className="text-sm line-clamp-2 mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {result.description}
                    </p>
                    {result.category && (
                      <span className="text-xs mt-1 inline-block" style={{ color: 'var(--text-muted)' }}>
                        {result.category}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center">
            <SearchIcon className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
            <p style={{ color: 'var(--text-secondary)' }}>
              No results found for &quot;{query}&quot;
            </p>
          </div>
        )}

        {!query && (
          <div className="p-8 text-center">
            <SearchIcon className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
            <p style={{ color: 'var(--text-secondary)' }}>
              Start typing to search projects and blog posts
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
