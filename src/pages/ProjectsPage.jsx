import React from 'react';
import '../styles/ProjectsPage.css';
import nttImage from '../images/ntt.jpg';
import essarImage from '../images/essar.jpg';
import kenyaDataImage from '../images/kenya data.jpg';
import dtDobieImage from '../images/dt dobie.jpg';
import kenyaPowerImage from '../images/Kenya power.jpg';
import simbanetImage from '../images/simba net.jpg';

const ProjectsPage = () => {
  const projects = [
    {
      client: 'NTT (Dimension Data)',
      city: 'Nairobi, Nakuru, Naivasha, Mara, Kisumu',
      type: 'Last Mile and Fiber Implementation',
      image: nttImage
    },
    {
      client: 'Essar Company (YU)',
      city: 'Kenya',
      type: 'LAN Extension and Maintenance',
      image: essarImage
    },
    {
      client: 'Kenya Data Networks (KDN)',
      city: 'Kenya',
      type: 'Optic Fiber Network Installation',
      image: kenyaDataImage
    },
    {
      client: 'DT Dobie',
      city: 'Kenya',
      type: 'Structured Cabling and Network Upgrade',
      image: dtDobieImage
    },
    {
      client: 'Kenya Power',
      city: 'Kenya',
      type: 'Pre-paid Meter Installation',
      image: kenyaPowerImage
    },
    {
      client: 'Simbanet',
      city: 'Kenya',
      type: 'Motorola Wireless and Fiber-ready Setup',
      image: simbanetImage
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-container">
        <section className="projects-page__hero">
          <p className="projects-page__hero-badge">Projects</p>
          <h1 className="projects-page__hero-title">Reference Delivery Portfolio</h1>
          <p className="projects-page__hero-subtitle">
            A selection of implementations delivered across telecom, network, power, and infrastructure workstreams.
          </p>
        </section>

        <div className="projects-page__grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-card__media">
                <img src={project.image} alt={`${project.client} project`} className="project-card__image" />
                <div className="project-card__type">{project.type}</div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.client}</h3>
                <div className="project-card__city">{project.city}</div>
                <p className="project-card__text">
                  Delivered with structured planning, field execution, and hands-on technical support from our project teams.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
