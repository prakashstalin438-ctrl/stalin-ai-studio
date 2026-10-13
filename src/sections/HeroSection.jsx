import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Bot,
  Cpu,
  ArrowUpRight,
  Code2,
  CheckCircle2,
  Terminal,
  Zap,
  MessageCircle
} from 'lucide-react';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section id="home" className="section" style={{ paddingTop: '140px', paddingBottom: '90px' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline and Pitch */}
          <div>
            {/* Status Pill */}
            <div className="hero-pill">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#34d399',
                  display: 'inline-block',
                }}
              ></span>
              <span>Available for Freelance & Contract Projects</span>
              <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.7 }}>2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Turning Ideas Into{' '}
              <span className="text-gradient">Intelligent Digital</span>{' '}
              Products.
            </h1>

            {/* Description */}
            <p className="hero-desc">
              I build modern websites, AI-powered applications, intelligent agents and workflow automations for businesses.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button
                onClick={() => onNavigate('projects')}
                className="btn btn-primary"
              >
                <span>Explore Projects</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-secondary"
              >
                <span>Contact Me</span>
              </button>

              <a
                href="https://wa.me/918124787237?text=Hi%20Stalin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Stalin%20AI%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Direct WhatsApp Message"
              >
                <MessageCircle style={{ width: 16, height: 16 }} />
                <span>WhatsApp</span>
                <ArrowUpRight style={{ width: 15, height: 15 }} />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <CheckCircle2 style={{ width: 16, height: 16, color: '#34d399' }} />
                <span>Clean React & Vite Code</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 style={{ width: 16, height: 16, color: '#a78bfa' }} />
                <span>Modern GenAI Architecture</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 style={{ width: 16, height: 16, color: '#38bdf8' }} />
                <span>Fast Direct Communication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated AI Digital Studio Visual */}
          <div>
            <div className="hero-visual-card">
              {/* Visual Card Header */}
              <div className="visual-header">
                <div className="visual-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                  <span className="visual-tag">stalin-ai-studio // engine</span>
                </div>
                <span className="visual-badge">SYSTEM ACTIVE</span>
              </div>

              {/* Simulated Nodes List */}
              <div className="visual-node-list">
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ color: 'var(--accent-purple-light)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
                      <Terminal style={{ width: 14, height: 14 }} /> Core Stack
                    </span>
                    <span style={{ color: '#34d399' }}>Verified</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-sub)' }}>
                    React 19 • GenAI Models • Real-Time Dashboards • Task Agents
                  </div>
                </div>

                <div className="visual-node">
                  <div className="node-left">
                    <div className="node-icon-box purple">
                      <Cpu style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="node-title">AI Application Engine</div>
                      <div className="node-sub">Structured outputs & real-time UI</div>
                    </div>
                  </div>
                  <div className="node-stat">Active</div>
                </div>

                <div className="visual-node">
                  <div className="node-left">
                    <div className="node-icon-box blue">
                      <Code2 style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="node-title">Vite & React Fast Stack</div>
                      <div className="node-sub">Mobile-first responsive frontend</div>
                    </div>
                  </div>
                  <div className="node-stat" style={{ color: 'var(--accent-cyan)' }}>Sub-sec</div>
                </div>

                <div className="visual-node">
                  <div className="node-left">
                    <div className="node-icon-box green">
                      <Zap style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="node-title">Workflow Automations</div>
                      <div className="node-sub">Scripted pipelines & integrations</div>
                    </div>
                  </div>
                  <div className="node-stat" style={{ color: '#34d399' }}>100%</div>
                </div>
              </div>

              {/* Bottom Visual Card Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  marginTop: 16,
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                }}
              >
                <span>Lead: Stalin</span>
                <span style={{ color: 'var(--accent-purple-light)', fontWeight: 600 }}>Stalin AI Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
