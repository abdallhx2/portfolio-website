'use client';

import { useState } from 'react';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';

interface NewsletterProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'card';
}

export default function Newsletter({ className = '', variant = 'default' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call - replace with actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll just show success
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email to confirm.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={`inline-flex ${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="px-3 py-2 rounded-lg outline-none disabled:opacity-50 transition-colors"
            style={{
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-bg)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            style={{
              backgroundColor: status === 'loading' ? 'var(--accent-disabled)' : 'var(--accent-primary)',
              color: 'var(--accent-text-primary)'
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              }
            }}
          >
            {status === 'loading' ? (
              <div 
                className="w-4 h-4 border-2 rounded-full animate-spin"
                style={{
                  borderColor: 'transparent',
                  borderTopColor: 'currentColor',
                  borderRightColor: 'currentColor'
                }}
              />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div 
        className={`rounded-xl p-6 ${className}`}
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--border-color)'
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="p-2 rounded-lg"
            style={{
              backgroundColor: 'var(--accent-bg)',
            }}
          >
            <Mail className="w-5 h-5" style={{ color: 'var(--accent-text)' }} />
          </div>
          <div>
            <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Stay Updated</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Get the latest cybersecurity insights</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'loading'}
            className="w-full px-3 py-2 rounded-lg outline-none disabled:opacity-50 transition-colors"
            style={{
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-bg)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            style={{
              backgroundColor: status === 'loading' ? 'var(--accent-disabled)' : 'var(--accent-primary)',
              color: 'var(--accent-text-primary)'
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              }
            }}
          >
            {status === 'loading' ? (
              <>
                <div 
                  className="w-4 h-4 border-2 rounded-full animate-spin"
                  style={{
                    borderColor: 'transparent',
                    borderTopColor: 'currentColor',
                    borderRightColor: 'currentColor'
                  }}
                />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Subscribe
              </>
            )}
          </button>
        </form>

        {message && (
          <div 
            className="mt-3 p-3 rounded-lg flex items-center gap-2 text-sm"
            style={{
              backgroundColor: status === 'success' ? 'var(--success-bg)' : 'var(--error-bg)',
              color: status === 'success' ? 'var(--success-text)' : 'var(--error-text)'
            }}
          >
            {status === 'success' ? (
              <Check className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            {message}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <div 
          className="p-3 rounded-full"
          style={{ backgroundColor: 'var(--accent-bg)' }}
        >
          <Mail className="w-8 h-8" style={{ color: 'var(--accent-text)' }} />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        Stay in the loop
      </h3>
      <p className="mb-6 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
        Get notified about new cybersecurity insights, secure coding tips, and project updates. No spam, unsubscribe anytime.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg outline-none disabled:opacity-50 transition-colors"
            style={{
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-bg)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            style={{
              backgroundColor: status === 'loading' ? 'var(--accent-disabled)' : 'var(--accent-primary)',
              color: 'var(--accent-text-primary)'
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              }
            }}
          >
            {status === 'loading' ? (
              <div 
                className="w-5 h-5 border-2 rounded-full animate-spin"
                style={{
                  borderColor: 'transparent',
                  borderTopColor: 'currentColor',
                  borderRightColor: 'currentColor'
                }}
              />
            ) : (
              <Send className="w-5 h-5" />
            )}
            Subscribe
          </button>
        </div>

        {message && (
          <div 
            className="p-4 rounded-lg flex items-center justify-center gap-2 text-sm"
            style={{
              backgroundColor: status === 'success' ? 'var(--success-bg)' : 'var(--error-bg)',
              color: status === 'success' ? 'var(--success-text)' : 'var(--error-text)'
            }}
          >
            {status === 'success' ? (
              <Check className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
