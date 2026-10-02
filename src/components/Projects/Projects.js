import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import SingleProject from './SingleProject/SingleProject';
import './Projects.css';

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className='projects-section' id='projects'>
            <div className='projects-bg-grid' />
            <div className='projects-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>04.</span>
                    <h2 className='section-heading'>Featured Projects</h2>
                    <div className='section-divider-line' />
                </div>

                <p className='projects-intro-text animate-on-scroll delay-100'>
                    A selection of production-grade web applications, interactive dashboards, and design systems I've designed and engineered.
                </p>

                <div className='projects-grid'>
                    {projectsData.slice(0, 6).map((project, idx) => (
                        <div key={project.id} className={`project-card-wrapper animate-on-scroll delay-${(idx % 3 + 1) * 150}`}>
                            <SingleProject
                                theme={theme}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image}
                            />
                        </div>
                    ))}
                </div>

                {projectsData.length > 6 && (
                    <div className='projects-view-all-box animate-on-scroll delay-200'>
                        <Link to='/projects' className='projects-view-all-btn'>
                            <span>View All Projects Archive</span>
                            <FiArrowRight />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
