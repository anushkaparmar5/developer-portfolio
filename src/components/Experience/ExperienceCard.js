import React from 'react';
import { HiOutlineLocationMarker, HiBriefcase } from 'react-icons/hi';
import { FiChevronRight, FiCalendar } from 'react-icons/fi';
import './Experience.css';

function ExperienceCard({ id, index, company, jobtitle, startYear, endYear, inWord, location, details }) {

    // Dynamic tech stack tags based on company
    const getTechTags = (comp) => {
        if (comp.includes('Coddit64')) {
            return ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Redux Toolkit'];
        } else if (comp.includes('Techseria')) {
            return ['React.js', 'Next.js', 'Redux Toolkit', 'JavaScript ES6+', 'Performance Optimization', 'Web Vitals'];
        } else {
            return ['React.js', 'JavaScript', 'REST APIs', 'HTML5/CSS3', 'Git'];
        }
    };

    const techTags = getTechTags(company);

    return (
        <div className='journey-card'>
            {/* Timeline connector dot */}
            <div className='journey-timeline-dot'>
                <HiBriefcase />
            </div>

            <div className='journey-card-content'>
                {/* Header Row */}
                <div className='journey-header'>
                    <div className='journey-role-company'>
                        <h3 className='journey-role'>{jobtitle}</h3>
                        <h4 className='journey-company'>{company}</h4>
                    </div>

                    <div className='journey-meta'>
                        <span className='journey-date-badge'>
                            <FiCalendar className='meta-icon' />
                            <span>{startYear} – {endYear}</span>
                            {inWord && <span className='journey-duration-pill'>{inWord}</span>}
                        </span>

                        {location && (
                            <span className='journey-location'>
                                <HiOutlineLocationMarker className='meta-icon' />
                                <span>{location}</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Bullet Points */}
                {details && details.length > 0 && (
                    <ul className='journey-bullet-list'>
                        {details.map((point, i) => (
                            <li key={i} className='journey-bullet-item'>
                                <FiChevronRight className='bullet-arrow' />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack Pills */}
                <div className='journey-tech-stack'>
                    <span className='tech-stack-label'>Technologies:</span>
                    <div className='journey-tech-pills'>
                        {techTags.map((tag, i) => (
                            <span key={i} className='journey-tech-pill'>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
