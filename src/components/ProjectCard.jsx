import React from 'react';
import { ExternalLink, Layers, Eye, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';

export const ProjectCard = ({ project, onSelectProject, onOpenGallery }) => {
  return (
    <div className="project-card">
      {/* Thumbnail Container */}
      <div className="project-thumb-box">
        <img
          src={project.thumbnail}
          alt={`${project.title} interface preview`}
          className="project-thumb-img"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="project-badge-pill">
          <Sparkles style={{ width: 12, height: 12, color: 'var(--accent-purple-light)' }} />
          <span>{project.category}</span>
        </div>

        {/* Privacy Note Badge for STAR */}
        {project.id === 'star-love-journal' && (
          <div className="privacy-badge-pill">
            <ShieldCheck style={{ width: 13, height: 13, color: 'var(--accent-purple-light)' }} />
            <span>Sample Demo Data</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="project-card-body">
        <div className="project-category-sub">
          {project.subtitle}
        </div>
        <h3 className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-desc">
          {project.description}
        </p>

        {/* Verified Tech Stack Strip */}
        <div className="project-tech-strip">
          <div className="tech-strip-label">
            <Layers style={{ width: 13, height: 13, color: 'var(--accent-purple-light)' }} />
            <span>Verified Tech Stack</span>
          </div>
          <div className="tech-chips-row">
            {project.verifiedTech.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
            {project.verifiedTech.length > 4 && (
              <span
                className="tech-chip"
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                  color: 'var(--accent-purple-light)'
                }}
              >
                +{project.verifiedTech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="project-btn-row">
          <button
            onClick={() => onSelectProject(project)}
            className="btn btn-secondary"
            style={{ padding: '10px 14px', fontSize: '0.825rem' }}
          >
            <Eye style={{ width: 15, height: 15, color: 'var(--accent-purple-light)' }} />
            <span>View Details</span>
          </button>

          {project.liveDemoAvailable && project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '10px 14px', fontSize: '0.825rem' }}
            >
              <span>Live Demo</span>
              <ExternalLink style={{ width: 14, height: 14 }} />
            </a>
          ) : (
            <button
              onClick={() => onOpenGallery(project)}
              className="btn btn-secondary"
              style={{
                padding: '10px 14px',
                fontSize: '0.825rem',
                background: 'rgba(139, 92, 246, 0.12)',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                color: 'var(--accent-purple-light)'
              }}
            >
              <ImageIcon style={{ width: 15, height: 15 }} />
              <span>Screenshots</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
