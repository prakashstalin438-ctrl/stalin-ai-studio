import React, { useState, useEffect } from 'react';
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Phone,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Database
} from 'lucide-react';
import { saveInquiryToFirestore, isFirebaseConfigured } from '../services/firebase';

export const ContactSection = ({ defaultServiceTopic = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultServiceTopic || 'AI Application Development');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const recipientEmail = 'prakashstalin@gmail.com';
  const whatsappNumber = '918124787237';

  const standardServices = [
    'AI Application Development',
    'Website Development',
    'AI Agents and Chatbots',
    'Workflow Automation',
    'General Project Consultation'
  ];

  useEffect(() => {
    if (defaultServiceTopic) {
      setService(defaultServiceTopic);
    }
  }, [defaultServiceTopic]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      newErrors.name = 'Please enter your name.';
    }

    if (!trimmedMessage) {
      newErrors.message = 'Please provide a brief description of your project or questions.';
    }

    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com) or leave blank.';
    }

    setErrors(newErrors);
    return {
      isValid: Object.keys(newErrors).length === 0,
      trimmedName,
      trimmedEmail,
      trimmedMessage
    };
  };

  const handleWhatsAppSend = (e) => {
    if (e) e.preventDefault();
    const { isValid, trimmedName, trimmedEmail, trimmedMessage } = validate();
    if (!isValid) return;

    let text = `Hi Stalin,\n\n`;
    text += `I would like to discuss a project with Stalin AI Studio.\n\n`;
    text += `• Name: ${trimmedName}\n`;
    if (trimmedEmail) {
      text += `• Email: ${trimmedEmail}\n`;
    }
    text += `• Service Interested In: ${service}\n\n`;
    text += `Project Brief / Questions:\n${trimmedMessage}\n\n`;
    text += `Looking forward to your response!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = (e) => {
    if (e) e.preventDefault();
    const { isValid, trimmedName, trimmedEmail, trimmedMessage } = validate();
    if (!isValid) return;

    const subject = `New Project Inquiry - ${service}`;
    let body = `Hi Stalin,\n\n`;
    body += `I am reaching out regarding a project with Stalin AI Studio.\n\n`;
    body += `• Name: ${trimmedName}\n`;
    if (trimmedEmail) {
      body += `• Email: ${trimmedEmail}\n`;
    }
    body += `• Service Interested In: ${service}\n\n`;
    body += `Project Brief / Questions:\n${trimmedMessage}\n\n`;
    body += `Looking forward to hearing from you!`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSaveInquiry = async (e) => {
    if (e) e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    const { isValid, trimmedName, trimmedEmail, trimmedMessage } = validate();
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      await saveInquiryToFirestore({
        name: trimmedName,
        email: trimmedEmail,
        service,
        message: trimmedMessage
      });

      setSubmitSuccess(true);
    } catch (err) {
      console.error('Failed to save inquiry to Firestore:', err);
      if (err.code === 'FIREBASE_NOT_CONFIGURED') {
        setSubmitError(
          'Firebase Cloud Firestore is not yet configured with project credentials. Add your Firebase keys to .env to enable database saving, or reach out directly below via WhatsApp or Email.'
        );
      } else {
        setSubmitError(
          err.message || 'Unable to save inquiry to database. Your entered details have been preserved. You can also contact directly via WhatsApp or Email below.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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

              <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={(e) => e.preventDefault()}>
                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiry-name">
                      Your Name <span style={{ color: '#fb7185' }}>*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                      placeholder="e.g. Alex"
                      value={name}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error-msg" role="alert">
                        <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiry-email">
                      Your Email <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="alex@company.com"
                      value={email}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error-msg" role="alert">
                        <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry-service">
                    Service Interested In
                  </label>
                  <select
                    id="inquiry-service"
                    className="form-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {!standardServices.includes(service) && (
                      <option value={service}>{service}</option>
                    )}
                    {standardServices.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry-brief">
                    Project Brief / Questions <span style={{ color: '#fb7185' }}>*</span>
                  </label>
                  <textarea
                    id="inquiry-brief"
                    rows={4}
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                    placeholder="Describe what you'd like to build, any specific features, goals, or target timelines..."
                    value={message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Firestore Save Action */}
                <button
                  type="button"
                  onClick={handleSaveInquiry}
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '14px', position: 'relative' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} />
                      <span>Saving to Studio Database...</span>
                    </>
                  ) : (
                    <>
                      <Database style={{ width: 16, height: 16 }} />
                      <span>Save Inquiry to Studio Database</span>
                    </>
                  )}
                </button>

                {/* Firestore Success Notice */}
                {submitSuccess && (
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontSize: '0.825rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      lineHeight: 1.5
                    }}
                    role="status"
                  >
                    <CheckCircle2 style={{ width: 18, height: 18, flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <strong style={{ display: 'block', color: '#fff', marginBottom: 2 }}>Inquiry Saved to Firestore!</strong>
                      Your inquiry has been successfully recorded in the studio database. You can also follow up instantly on WhatsApp or Email below.
                    </div>
                  </div>
                )}

                {/* Firestore Error Notice */}
                {submitError && (
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(244, 63, 94, 0.1)',
                      border: '1px solid rgba(244, 63, 94, 0.3)',
                      color: '#fb7185',
                      fontSize: '0.825rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      lineHeight: 1.5
                    }}
                    role="alert"
                  >
                    <AlertCircle style={{ width: 18, height: 18, flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <strong style={{ display: 'block', color: '#fff', marginBottom: 2 }}>Notice</strong>
                      {submitError}
                    </div>
                  </div>
                )}

                {/* Direct Contact Channels Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }}></div>
                  <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                    Or Chat Directly
                  </span>
                  <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }}></div>
                </div>

                {/* Direct Action Buttons */}
                <div className="form-btn-row">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '13px' }}
                  >
                    <MessageCircle style={{ width: 16, height: 16 }} />
                    <span>Send on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="btn btn-secondary"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '13px' }}
                  >
                    <Mail style={{ width: 16, height: 16 }} />
                    <span>Send via Email</span>
                  </button>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', margin: 0, paddingTop: 2 }}>
                  WhatsApp and Email buttons open your chosen app with your inquiry details pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
