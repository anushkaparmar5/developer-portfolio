import React from 'react';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image }) {
    return (
        <div className='single-project-card'>
            <div className='project-img-container'>
                <img src={image ? image : placeholder} alt={name} className='project-card-image' />
                <div className='project-img-overlay'>
                    <div className='project-overlay-links'>
                        {demo && (
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className='overlay-action-btn'
                                title='Live Preview'
                            >
                                <FiExternalLink />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {code && (
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className='overlay-action-btn'
                                title='Source Code'
                            >
                                <FiGithub />
                                <span>Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className='project-card-content'>
                <div className='project-card-top'>
                    <FiFolder className='project-folder-icon' />
                    <div className='project-header-links'>
                        {code && (
                            <a href={code} target='_blank' rel='noreferrer' className='header-icon-link' title='GitHub'>
                                <FiGithub />
                            </a>
                        )}
                        {demo && (
                            <a href={demo} target='_blank' rel='noreferrer' className='header-icon-link' title='Live Demo'>
                                <FiExternalLink />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className='project-card-title'>{name}</h3>
                <p className='project-card-desc'>{desc}</p>

                <div className='project-tags-list'>
                    {tags && tags.map((tag, idx) => (
                        <span key={idx} className='project-tech-pill'>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
