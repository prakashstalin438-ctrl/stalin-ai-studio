import React from 'react';
import { servicesData } from '../data/servicesData';
import { Cpu, Globe, Bot, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap = {
  Cpu,
  Globe,
  Bot,
  Zap,
};

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section id="services" className="section" style={{ background: 'rgba(9, 13, 24, 0.6)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="section-title">High-Impact Services For Growing Businesses</h2>
          <p className="section-subtitle">
            Focused, modern engineering tailored to turn technical requirements into intuitive, reliable products.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Cpu;
            return (
              <div key={service.id} className="glass-card service-card">
                <span className="service-watermark">{service.number}</span>

                <div>
                  {/* Service Header */}
                  <div className="service-header">
                    <div className="service-icon-box">
                      <Icon style={{ width: 28, height: 28 }} />
                    </div>
                    <div>
                      <span className="service-num-label">Service {service.number}</span>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="service-tagline">{service.tagline}</p>
                  <p className="service-desc">{service.description}</p>

                  {/* Deliverables Checklist */}
                  <div className="service-deliverables">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="deliverable-item">
                        <CheckCircle2 style={{ width: 16, height: 16, color: 'var(--accent-purple-light)', flexShrink: 0, marginTop: 2 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.inquiryTopic)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '12px 18px', justifyContent: 'space-between' }}
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
