import React from 'react';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="page-container">
        <div className="projects-page__header">
          <div>
            <h1 className="projects-page__title">Project Portfolio</h1>
            <p className="projects-page__subtitle">
              Building trust through proven technical execution. Explore our recent large-scale infrastructure projects.
            </p>
          </div>
          <div className="projects-page__filters">
            {['All', 'Telecom', 'Energy', 'IT'].map((filter) => (
              <button key={filter} className="projects-page__filter-btn">{filter}</button>
            ))}
          </div>
        </div>

        <div className="projects-page__grid">
          {[
            {
              client: 'GlobalNet Telecom',
              city: 'Metropolis',
              type: 'Tower Deployment',
              img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'City Data Center',
              city: 'Inland Hub',
              type: 'Power Redundancy',
              img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Maritime Ltd',
              city: 'Coastal Port',
              type: 'Fiber Optics',
              img: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Horizon Finance',
              city: 'Business Dist',
              type: 'Cybersecurity',
              img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Rural Reach',
              city: 'Region North',
              type: 'WISP Setup',
              img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'EcoPower',
              city: 'Desert Plains',
              type: 'Solar Microgrid',
              img: 'https://images.unsplash.com/photo-1509391366360-fe09a921881e?auto=format&fit=crop&q=80&w=600'
            }
          ].map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-card__media">
                <img src={project.img} alt={project.client} className="project-card__image" />
                <div className="project-card__type">{project.type}</div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.client}</h3>
                <div className="project-card__city">{project.city}</div>
                <p className="project-card__text">
                  Successful implementation of a robust connectivity solution involving multi-site coordination and rapid
                  deployment.
                </p>
                <div className="project-card__footer">
                  <span className="project-card__link">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
