import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="brand-logo"
          aria-label="Stalin AI Studio Home"
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: '#0a0d18',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <img
              src="/stalin-ai-logo.png"
              alt="Stalin AI Studio"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="brand-text-wrap">
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span className="brand-name">
                Stalin <span className="brand-name-accent">AI Studio</span>
              </span>
              <span
                className="brand-live-indicator"
                title="Available for projects"
                aria-label="Online status"
              >
                <span className="brand-live-dot"></span>
                <span className="brand-live-ring"></span>
              </span>
            </div>
            <span className="brand-subline">Intelligent Digital Products</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a
            href="https://wa.me/918124787237?text=Hi%20Stalin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Stalin%20AI%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chip"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle style={{ width: 15, height: 15 }} />
            <span>WhatsApp</span>
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="btn btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.85rem' }}
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="https://wa.me/918124787237?text=Hi%20Stalin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Stalin%20AI%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', fontSize: '0.875rem' }}
            >
              <MessageCircle style={{ width: 16, height: 16 }} />
              <span>WhatsApp: +91 81247 87237</span>
              <ArrowUpRight style={{ width: 15, height: 15 }} />
            </a>

            <a
              href="mailto:prakashstalin@gmail.com"
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.875rem' }}
            >
              <span>Email: prakashstalin@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
