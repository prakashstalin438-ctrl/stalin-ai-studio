import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
  Image as ImageIcon,
  MessageSquare,
  ShieldCheck,
  Flame,
  Play,
  ExternalLink
} from 'lucide-react';

const GithubIcon = ({ size = 15, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectModal = ({ project, initialTab = 'overview', onClose, onInquire }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);

  // Learn 60 sandbox interactive state
  const [completedDays, setCompletedDays] = useState([1, 2, 3]);
  const [currentStreak, setCurrentStreak] = useState(3);

  // NovaCart sandbox interactive state
  const [timeRange, setTimeRange] = useState('30d');

  // AI Job Apply sandbox state
  const [selectedRole, setSelectedRole] = useState('fullstack');

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'features', label: 'Features', icon: CheckCircle2 },
    { id: 'tech', label: 'Tech Stack', icon: Layers },
    { id: 'gallery', label: 'Screenshots', icon: ImageIcon },
    { id: 'interactive', label: 'Interactive Sandbox', icon: Play }
  ];

  const toggleDayCompletion = (dayNum) => {
    if (completedDays.includes(dayNum)) {
      setCompletedDays(completedDays.filter((d) => d !== dayNum));
      setCurrentStreak(Math.max(0, currentStreak - 1));
    } else {
      setCompletedDays([...completedDays, dayNum]);
      setCurrentStreak(currentStreak + 1);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-dialog">
        {/* Header Bar */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-purple-light)'
              }}
            >
              {project.category}
            </span>

            {project.privacyNote && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: '#34d399'
                }}
              >
                <ShieldCheck style={{ width: 13, height: 13 }} />
                <span>Privacy Verified</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '8px', borderRadius: 'var(--radius-sm)' }}
            aria-label="Close project modal"
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Title Strip */}
        <div style={{ padding: '20px 28px 12px', background: 'rgba(255, 255, 255, 0.01)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-purple-light)', textTransform: 'uppercase', fontWeight: 600 }}>
            {project.subtitle}
          </span>
          <h2 id="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: 4 }}>
            {project.title}
          </h2>
        </div>

        {/* Tabs Strip */}
        <div className="modal-tabs-strip">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`modal-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon style={{ width: 15, height: 15, color: isActive ? 'var(--accent-purple-light)' : 'var(--text-dim)' }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Modal Content */}
        <div className="modal-scroll-body">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Metrics Strip */}
              <div className="modal-metrics-grid">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      {m.label}
                    </span>
                    <strong style={{ fontSize: '1.2rem', color: '#fff', marginTop: 4 }}>
                      {m.value}
                    </strong>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Sparkles style={{ width: 16, height: 16, color: 'var(--accent-purple-light)' }} />
                  Product Summary
                </h4>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.925rem', lineHeight: 1.7 }}>
                  {project.overview}
                </p>
              </div>

              {/* Architecture Statement */}
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.25)'
                }}
              >
                <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--accent-purple-light)', marginBottom: 6 }}>
                  Architecture & Engineering
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.6, margin: 0 }}>
                  {project.architecture}
                </p>
              </div>

              {/* Privacy Notice for STAR */}
              {project.privacyNote && (
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12
                  }}
                >
                  <ShieldCheck style={{ width: 20, height: 20, color: '#34d399', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: '#34d399', marginBottom: 4 }}>
                      Strict Privacy Standard
                    </strong>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-sub)', margin: 0 }}>
                      {project.privacyNote}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FEATURES */}
          {activeTab === 'features' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 600 }}>
                Verified Implemented Capabilities
              </span>
              <div className="modal-features-grid">
                {project.features.map((feat, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK */}
          {activeTab === 'tech' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 8 }}>
                  Verified Dependencies & Stack
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                  Directly verified from project configuration files and source code.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {project.verifiedTech.map((tech) => (
                    <div
                      key={tech}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(139, 92, 246, 0.12)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.825rem',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-purple-light)' }}></span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: 8 }}>
                  Engineering Principles Applied
                </strong>
                <ul style={{ fontSize: '0.825rem', color: 'var(--text-sub)', paddingLeft: 18, lineHeight: 1.7 }}>
                  <li>Zero bloated external libraries; focused bundle footprint</li>
                  <li>Type-safe or structured data schemas with graceful failure states</li>
                  <li>Responsive layout engine targeting mobile and desktop seamlessly</li>
                  <li>Subtle glassmorphic aesthetics adhering to modern SaaS design guidelines</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'gallery' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16 / 9',
                  width: '100%',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  background: '#000',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <img
                  src={project.screenshots[selectedScreenshotIndex]?.url || project.thumbnail}
                  alt={project.screenshots[selectedScreenshotIndex]?.caption || project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-dim)' }}>
                {project.screenshots[selectedScreenshotIndex]?.caption || 'Interface visual'}
              </p>

              {project.screenshots.length > 1 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, overflowX: 'auto', padding: '6px 0' }}>
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedScreenshotIndex(idx)}
                      style={{
                        position: 'relative',
                        width: 120,
                        aspectRatio: '16 / 9',
                        borderRadius: 'var(--radius-xs)',
                        overflow: 'hidden',
                        border: selectedScreenshotIndex === idx ? '2px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                        opacity: selectedScreenshotIndex === idx ? 1 : 0.6,
                        flexShrink: 0
                      }}
                    >
                      <img src={s.url} alt={s.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: INTERACTIVE SANDBOX */}
          {activeTab === 'interactive' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Learn 60 Interactive */}
              {project.id === 'learn-60' && (
                <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: '#080c16', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <h5 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', margin: 0 }}>GenAI 60-Day Progress Engine</h5>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Click any day to toggle completion</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(245, 158, 11, 0.15)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        color: 'var(--accent-amber)',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <Flame style={{ width: 16, height: 16, fill: 'var(--accent-amber)' }} />
                      <span>{currentStreak} Day Streak</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: 6 }}>
                      <span>Completed: {completedDays.length} / 60</span>
                      <span>{Math.round((completedDays.length / 60) * 100)}% Finished</span>
                    </div>
                    <div style={{ width: '100%', height: 8, borderRadius: 4, background: '#1e293b', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                          width: `${Math.max(5, (completedDays.length / 60) * 100)}%`,
                          transition: 'width 0.3s ease'
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="modal-days-grid">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((day) => {
                      const isDone = completedDays.includes(day);
                      return (
                        <button
                          key={day}
                          onClick={() => toggleDayCompletion(day)}
                          style={{
                            aspectRatio: '1',
                            borderRadius: 'var(--radius-xs)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: isDone ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
                            color: isDone ? '#fff' : 'var(--text-dim)',
                            border: isDone ? '1px solid var(--accent-purple-light)' : '1px solid var(--border-subtle)',
                            cursor: 'pointer'
                          }}
                        >
                          <span>D{day}</span>
                          {isDone && <CheckCircle2 style={{ width: 10, height: 10, marginTop: 2 }} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* NovaCart Interactive */}
              {project.id === 'novacart-dashboard' && (
                <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: '#080c16', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <h5 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', margin: 0 }}>NovaCart Executive Live Metrics</h5>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Select reporting time window</span>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {['7d', '30d', '90d'].map((range) => (
                        <button
                          key={range}
                          onClick={() => setTimeRange(range)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-xs)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: timeRange === range ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
                            color: timeRange === range ? '#fff' : 'var(--text-dim)',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="modal-metrics-grid">
                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)' }}>Gross Sales</span>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '4px 0' }}>
                        {timeRange === '7d' ? '$112,450' : timeRange === '30d' ? '$482,910' : '$1,438,200'}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>+12.3% vs prior</span>
                    </div>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)' }}>Conversion Rate</span>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '4px 0' }}>
                        {timeRange === '7d' ? '3.91%' : timeRange === '30d' ? '3.72%' : '3.65%'}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>+0.9% optimized</span>
                    </div>

                    <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)' }}>Active Carts</span>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '4px 0' }}>
                        {timeRange === '7d' ? '380' : timeRange === '30d' ? '1,245' : '3,890'}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple-light)', fontFamily: 'var(--font-mono)' }}>Live shoppers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* CareerOS / AI Job Apply Interactive */}
              {(project.id === 'careeros' || project.id === 'ai-job-apply') && (
                <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: '#080c16', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <h5 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', margin: 0 }}>ATS Semantic Matcher</h5>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Select target job spec to evaluate alignment</span>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {[
                        { id: 'fullstack', label: 'Full-Stack' },
                        { id: 'genai', label: 'GenAI Engineer' },
                        { id: 'frontend', label: 'Senior React' }
                      ].map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setSelectedRole(r.id)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-xs)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: selectedRole === r.id ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
                            color: selectedRole === r.id ? '#fff' : 'var(--text-dim)',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)' }}>Calculated Match Score</span>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', marginTop: 2 }}>
                        {selectedRole === 'fullstack' ? '94%' : selectedRole === 'genai' ? '91%' : '96%'} Match
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--accent-purple-light)', fontWeight: 600 }}>Matched Skills</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-sub)', fontFamily: 'var(--font-mono)' }}>
                        {selectedRole === 'fullstack' ? '16 / 18 Requirements' : selectedRole === 'genai' ? '14 / 16 Requirements' : '17 / 18 Requirements'}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '14px 18px', borderRadius: 'var(--radius-sm)', background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.25)', fontSize: '0.825rem' }}>
                    <strong style={{ display: 'block', color: 'var(--accent-purple-light)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>
                      Sample Generated Cover Letter Opening:
                    </strong>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-sub)', margin: 0, lineHeight: 1.6 }}>
                      "With focused expertise in scalable React architecture, TypeScript, and modern AI engineering, I am excited to apply for the {selectedRole.toUpperCase()} position. My hands-on experience building production workflows aligns directly with your team's technical demands..."
                    </p>
                  </div>
                </div>
              )}

              {/* STAR Love Journal Interactive */}
              {project.id === 'star-love-journal' && (
                <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', background: '#080c16', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.25)', color: '#fda4af', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ShieldCheck style={{ width: 16, height: 16, color: 'var(--accent-rose)', flexShrink: 0 }} />
                    <span>Public Concept Demo — Curated sample couple memories & dummy countdown.</span>
                  </div>

                  <div style={{ padding: '24px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08), rgba(139, 92, 246, 0.08))', border: '1px solid rgba(244, 63, 94, 0.2)', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: '#fda4af', letterSpacing: '0.1em' }}>
                      Sample Next Milestone Countdown
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 280, margin: '16px auto' }}>
                      <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-mono)' }}>364</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Days</span>
                      </div>
                      <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-mono)' }}>10</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Hours</span>
                      </div>
                      <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-mono)' }}>30</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Mins</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                      "Every moment together is a chapter in our favorite story."
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="modal-footer-bar">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.775rem', color: 'var(--text-dim)' }}>
            {project.demoNote}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '9px 14px', fontSize: '0.825rem' }}
                title="View GitHub Repository"
              >
                <GithubIcon size={14} style={{ color: 'var(--accent-purple-light)' }} />
                <span>GitHub</span>
              </a>
            )}

            {project.liveDemoAvailable && project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '9px 16px', fontSize: '0.825rem' }}
              >
                <span>Live Demo</span>
                <ExternalLink style={{ width: 14, height: 14 }} />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="btn btn-secondary"
              style={{
                padding: '9px 16px',
                fontSize: '0.825rem',
                background: project.liveDemoAvailable ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-purple)',
                color: '#fff'
              }}
            >
              <MessageSquare style={{ width: 14, height: 14 }} />
              <span>Inquire</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
