import React from 'react';
import './Experience.css';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

function Experience() {
    return (
        <section className='journey-section' id='experience'>
            <div className='journey-bg-grid' />
            <div className='journey-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>03.</span>
                    <h2 className='section-heading'>Professional Journey</h2>
                    <div className='section-divider-line' />
                </div>

                <p className='journey-intro-text animate-on-scroll delay-100'>
                    My career path as a frontend engineer, delivering high-impact web products, scalable client applications, and robust design systems.
                </p>

                <div className='journey-timeline'>
                    {experienceData.map((exp, idx) => (
                        <div key={exp.id} className={`journey-timeline-item animate-on-scroll delay-${(idx + 1) * 150}`}>
                            <ExperienceCard
                                id={exp.id}
                                index={idx + 1}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear}
                                inWord={exp.inWord}
                                location={exp.location}
                                details={exp.details}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
