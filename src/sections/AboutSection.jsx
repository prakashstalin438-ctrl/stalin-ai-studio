import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Database, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection = ({ onNavigate }) => {
  const skillCategories = [
    {
      title: 'Frontend Engineering',
      icon: Code2,
      skills: ['React 19 & 18', 'Vite', 'Modern JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Layouts', 'Glassmorphism UI']
    },
    {
      title: 'AI & GenAI Solutions',
      icon: Cpu,
      skills: ['LLM Prompt Architecture', 'Structured Output APIs', 'Resume & Doc Parsing', 'Task-Oriented AI Agents', 'Conversational Chatbots']
    },
    {
      title: 'Data & Cloud Architecture',
      icon: Database,
      skills: ['Firebase Firestore', 'Offline-First LocalStorage', 'PWA Architecture', 'REST & Webhook APIs', 'Security Rules Validation']
    },
    {
      title: 'Automation & Tooling',
      icon: Workflow,
      skills: ['Workflow Automation', 'Node.js Scripting', 'Git & GitHub', 'Vercel Deployment', 'Performance Optimization']
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Scope',
      desc: 'Clarify project objectives, map user journeys, and define a realistic, efficient tech stack.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      desc: 'Craft premium SaaS visuals, dark-mode color harmony, and responsive layout structures.'
    },
    {
      step: '03',
      title: 'Engineering & AI Integration',
      desc: 'Build with React and Vite, hook up AI models or automations, and adhere to clean code standards.'
    },
    {
      step: '04',
      title: 'Testing & Delivery',
      desc: 'Validate cross-device responsiveness, accessibility, performance, and seamless handoff.'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: '#070a12', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Developer Profile</span>
          </div>
          <h2 className="section-title">About Stalin & Stalin AI Studio</h2>
          <p className="section-subtitle">
            An independent developer building intelligent digital products with a commitment to craft, clean architecture, and practical AI.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="about-top-grid">
          {/* Left: Professional Introduction */}
          <div className="about-bio-card">
            <h3>Hi, I'm Stalin.</h3>
            <p>
              I am an independent developer operating <strong style={{ color: '#fff' }}>Stalin AI Studio</strong>. I specialize in building modern web applications, AI-powered tools, dashboards, and automated workflows for businesses and creators.
            </p>
            <p>
              My approach is grounded in pragmatic software engineering: I don't build generic bloated templates or hype-driven prototypes that break in production. Instead, I focus on delivering sleek, responsive interfaces, intuitive user experiences, and reliable integrations that solve real problems.
            </p>
            <p>
              Whether you need a custom AI application, a high-converting web presence, an intelligent task agent, or automated data workflows, I work directly with you from concept to deployment.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, paddingTop: 10 }}>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-primary"
                style={{ padding: '11px 22px', fontSize: '0.875rem' }}
              >
                <span>Work With Me</span>
                <ArrowRight style={{ width: 15, height: 15 }} />
              </button>

              <a
                href="https://wa.me/918124787237?text=Hi%20Stalin%2C%20let%27s%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '11px 22px', fontSize: '0.875rem' }}
              >
                <span>Quick WhatsApp Message</span>
              </a>
            </div>
          </div>

          {/* Right: Studio Tenets & Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="tenets-box">
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-purple-light)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Terminal style={{ width: 16, height: 16 }} />
                Core Studio Tenets
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="tenet-item">
                  <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', fontSize: '0.85rem' }}>Speed & Efficiency</strong>
                    Fast load times, minimal dependencies, and crisp micro-interactions.
                  </div>
                </div>

                <div className="tenet-item">
                  <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', fontSize: '0.85rem' }}>Authentic Implementations</strong>
                    Every feature promised is verified and backed by working code.
                  </div>
                </div>

                <div className="tenet-item">
                  <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', fontSize: '0.85rem' }}>Direct Communication</strong>
                    Work directly with the builder without middleman agency delays.
                  </div>
                </div>

                <div className="tenet-item">
                  <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#fff', fontSize: '0.85rem' }}>Privacy & Security</strong>
                    Rigorous isolation of sensitive data, secure rules, and clean credential management.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div
              style={{
                padding: '22px 26px',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Freelance Availability
                </span>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginTop: 2 }}>
                  Open for New Client Projects
                </div>
              </div>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#34d399',
                  boxShadow: '0 0 14px rgba(52, 211, 153, 0.6)',
                  animation: 'pulse-scale 2s infinite ease-in-out'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Technical Capabilities Matrix */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: 32 }}>
            Technical Stack & Capabilities
          </h3>
          <div className="capabilities-grid">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="capability-card">
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple-light)'
                    }}
                  >
                    <Icon style={{ width: 20, height: 20 }} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{cat.title}</h4>
                  <div className="tech-chips-row">
                    {cat.skills.map((s) => (
                      <span key={s} className="tech-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Workflow */}
        <div>
          <h3 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: 32 }}>
            How We Work Together
          </h3>
          <div className="workflow-grid">
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="workflow-card">
                <div className="workflow-step-num">{wf.step}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{wf.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
