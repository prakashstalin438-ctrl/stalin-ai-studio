import React from 'react';
import { ExternalLink, Layers, Eye, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';

const GithubIcon = ({ size = 14, style = {} }) => (
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

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                padding: '10px 14px',
                fontSize: '0.825rem',
                color: 'var(--text-white)'
              }}
              title="View GitHub Repository"
            >
              <GithubIcon size={14} style={{ color: 'var(--accent-purple-light)' }} />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoAvailable && project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '10px 14px',
                fontSize: '0.825rem',
                ...(project.githubUrl ? { gridColumn: 'span 2' } : {})
              }}
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
