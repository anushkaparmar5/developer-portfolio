import React from 'react';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { educationData } from '../../data/educationData';
import './Education.css';

function Education() {
    return (
        <section className='education-section' id='education'>
            <div className='education-bg-grid' />
            <div className='education-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>06.</span>
                    <h2 className='section-heading'>Academic Background</h2>
                    <div className='section-divider-line' />
                </div>

                <div className='education-grid'>
                    {educationData.map((edu, idx) => (
                        <div key={edu.id} className={`education-card animate-on-scroll delay-${(idx + 1) * 150}`}>
                            <div className='education-card-icon'>
                                <FiBookOpen />
                            </div>
                            <div className='education-card-info'>
                                <div className='education-date-badge'>
                                    <FiCalendar />
                                    <span>{edu.startYear} – {edu.endYear}</span>
                                </div>
                                <h3 className='education-course'>{edu.course}</h3>
                                <h4 className='education-institution'>{edu.institution}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
