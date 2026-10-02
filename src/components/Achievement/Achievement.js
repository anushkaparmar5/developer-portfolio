import React from 'react';
import './Achievement.css';
import { achievementData } from '../../data/achievementData';
import AchievementCard from './AchievementCard';

function Achievement() {
    return (
        <section className='cert-section' id='certifications'>
            <div className='cert-bg-grid' />
            <div className='cert-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>05.</span>
                    <h2 className='section-heading'>Certifications & Badges</h2>
                    <div className='section-divider-line' />
                </div>

                <p className='cert-intro-text animate-on-scroll delay-100'>
                    Continuous learning and verified technical milestones in modern frontend development, state management, and full-stack architectures.
                </p>

                <div className='cert-grid'>
                    {achievementData.achievements.map((achieve, idx) => (
                        <div key={achieve.id} className={`cert-card-wrapper animate-on-scroll delay-${(idx + 1) * 150}`}>
                            <AchievementCard
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                                image={achieve.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievement;
