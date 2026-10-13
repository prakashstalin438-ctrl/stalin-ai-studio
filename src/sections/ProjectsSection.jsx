import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProjectsSection = ({ onSelectProject, onOpenGallery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.tag === selectedCategory || p.category.includes(selectedCategory));

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">Verified Projects & Engineering Case Studies</h2>
          <p className="section-subtitle">
            Every project showcases real implementations, authentic tech stacks, and production-minded interface design.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="projects-filter-bar">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-chip ${isSelected ? 'active' : ''}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects 2x2 Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              onOpenGallery={onOpenGallery}
            />
          ))}
        </div>

        {/* Quality & Privacy Assurance Banner */}
        <div className="assurance-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-purple-light)',
                flexShrink: 0
              }}
            >
              <ShieldCheck style={{ width: 22, height: 22 }} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: '#fff', marginBottom: 2 }}>
                Authentic & Verified Implementation
              </strong>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0 }}>
                All metrics, screenshots, and tech labels represent real inspectable codebases. STAR public demo strictly isolates personal memories.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#34d399',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              whiteSpace: 'nowrap'
            }}
          >
            <CheckCircle2 style={{ width: 14, height: 14 }} />
            <span>4 / 4 Projects Inspected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
