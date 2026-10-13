import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Phone
} from 'lucide-react';

export const ContactSection = ({ defaultServiceTopic = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultServiceTopic || 'AI Application Development');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const recipientEmail = 'prakashstalin@gmail.com';
  const whatsappNumber = '918124787237';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const buildInquiryText = () => {
    let text = `Hi Stalin,\n\n`;
    if (name) text += `My name is ${name}.\n`;
    if (email) text += `My email is ${email}.\n`;
    text += `I am interested in discussing a project regarding: ${service}.\n\n`;
    if (message) {
      text += `Project details:\n${message}\n\n`;
    } else {
      text += `I would like to explore how Stalin AI Studio can help build our application.\n\n`;
    }
    text += `Looking forward to hearing from you!`;
    return text;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(buildInquiryText());
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${service} — ${name || 'Client'}`);
    const body = encodeURIComponent(buildInquiryText());
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" style={{ background: '#05070d' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Exceptional Together</h2>
          <p className="section-subtitle">
            Have a project in mind, need custom AI development, or want to discuss ideas? Reach out directly via WhatsApp or Email.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-cards-stack">
            {/* Bio Card */}
            <div className="contact-info-card">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-purple-light)', fontWeight: 600 }}>
                Principal Developer
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>Stalin</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6, margin: 0 }}>
                Founder & Lead Engineer at <strong style={{ color: '#fff' }}>Stalin AI Studio</strong>. Based in India, collaborating with clients worldwide on modern software and intelligent AI solutions.
              </p>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple-light)',
                      flexShrink: 0
                    }}
                  >
                    <Mail style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${recipientEmail}`}
                      style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}
                    >
                      {recipientEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '8px 12px', fontSize: '0.75rem' }}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check style={{ width: 15, height: 15, color: '#34d399' }} />
                  ) : (
                    <Copy style={{ width: 15, height: 15 }} />
                  )}
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                <span style={{ color: copied ? '#34d399' : 'var(--text-dim)' }}>
                  {copied ? 'Copied to clipboard!' : 'Working mailto: link'}
                </span>
                <a
                  href={`mailto:${recipientEmail}`}
                  style={{ color: 'var(--accent-purple-light)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <span>Open Client</span>
                  <ArrowUpRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-info-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: '#0a0d18',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
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
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}
                    >
                      +91 81247 87237
                    </a>
                  </div>
                </div>

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
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }}></span>
                  Online
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Fastest response channel</span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Stalin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Stalin%20AI%20Studio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight style={{ width: 13, height: 13 }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Composer */}
          <div>
            <div className="contact-composer-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 16, borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>Project Inquiry Composer</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 4, margin: 0 }}>
                    Compose your inquiry and send directly via WhatsApp or Email.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-purple-light)' }}>
                  <ShieldCheck style={{ width: 15, height: 15 }} />
                  <span>Verified Direct Route</span>
                </div>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiry-name">Your Name</label>
                    <input
                      id="inquiry-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiry-email">Your Email (Optional)</label>
                    <input
                      id="inquiry-email"
                      type="email"
                      className="form-input"
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry-service">Service Interested In</label>
                  <select
                    id="inquiry-service"
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="AI Application Development">AI Application Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="AI Agents and Chatbots">AI Agents and Chatbots</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="General Project Consultation">General Project Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry-brief">Project Brief / Questions</label>
                  <textarea
                    id="inquiry-brief"
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe what you'd like to build, any specific features, goals, or target timelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingTop: 6 }}>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '14px' }}
                  >
                    <MessageCircle style={{ width: 16, height: 16 }} />
                    <span>Send on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '14px' }}
                  >
                    <Mail style={{ width: 16, height: 16 }} />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
