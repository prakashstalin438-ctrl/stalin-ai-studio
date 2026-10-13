import React from 'react';
import { ArrowUp, Mail, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: '#05070c', paddingTop: 64, paddingBottom: 48, position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40, marginBottom: 56 }}>
          {/* Brand Info with Custom Stalin AI Studio Logo */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#0a0d18',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <img
                  src="/stalin-ai-logo.png"
                  alt="Stalin AI Studio Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                Stalin <span style={{ color: 'var(--accent-purple-light)' }}>AI Studio</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: 420, lineHeight: 1.65, marginBottom: 20 }}>
              Crafting premium AI applications, responsive modern websites, intelligent agents, and workflow automations for forward-thinking founders and businesses.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#34d399',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399' }}></span>
              <span>Available for Freelance & Contract Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: 16 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.875rem' }}>
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.toLowerCase());
                    }}
                    style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: 16 }}>
              Direct Channels
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem' }}>
              <li>
                <a
                  href="mailto:prakashstalin@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-sub)' }}
                >
                  <Mail style={{ width: 16, height: 16, color: 'var(--accent-purple-light)' }} />
                  <span>prakashstalin@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918124787237?text=Hi%20Stalin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Stalin%20AI%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-sub)' }}
                >
                  <MessageCircle style={{ width: 16, height: 16, color: '#34d399' }} />
                  <span>+91 81247 87237</span>
                </a>
              </li>
              <li style={{ paddingTop: 6 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)' }}>
                  <ShieldCheck style={{ width: 14, height: 14, color: 'var(--accent-purple-light)' }} />
                  <span>Verified Engineering & Clean Code</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            fontSize: '0.8rem',
            color: 'var(--text-dim)'
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Stalin AI Studio. All rights reserved.</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              Crafted with <Sparkles style={{ width: 14, height: 14, color: 'var(--accent-purple-light)' }} /> React & Vite
            </span>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.75rem', gap: 6 }}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp style={{ width: 13, height: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
