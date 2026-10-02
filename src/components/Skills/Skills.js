import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import './Skills.css';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const [activeTab, setActiveTab] = useState('all');

    const skillCategories = [
        { id: 'all', label: 'All Technologies' },
        { id: 'frontend', label: 'Frontend Core' },
        { id: 'styling', label: 'Styling & UI' },
        { id: 'backend', label: 'Backend & APIs' },
        { id: 'tools', label: 'Tools & Ecosystem' }
    ];

    const techStack = [
        { name: 'React', category: 'frontend', role: 'Core Library', level: 'Expert' },
        { name: 'Next JS', category: 'frontend', role: 'SSR & Fullstack', level: 'Advanced' },
        { name: 'Typescript', category: 'frontend', role: 'Type Safety', level: 'Advanced' },
        { name: 'Javascript', category: 'frontend', role: 'ES6+ Core', level: 'Expert' },
        { name: 'Redux', category: 'frontend', role: 'State Management', level: 'Expert' },
        { name: 'HTML', category: 'frontend', role: 'Markup', level: 'Expert' },
        { name: 'CSS', category: 'styling', role: 'Styling', level: 'Expert' },
        { name: 'Tailwind', category: 'styling', role: 'Utility CSS', level: 'Expert' },
        { name: 'MaterialUI', category: 'styling', role: 'Component Library', level: 'Advanced' },
        { name: 'Bootstrap', category: 'styling', role: 'Responsive Grid', level: 'Advanced' },
        { name: 'Sass', category: 'styling', role: 'Preprocessor', level: 'Advanced' },
        { name: 'Figma', category: 'styling', role: 'UI/UX Design', level: 'Intermediate' },
        { name: 'Rest API', category: 'backend', role: 'API Integration', level: 'Expert' },
        { name: 'MongoDB', category: 'backend', role: 'NoSQL Database', level: 'Intermediate' },
        { name: 'Firebase', category: 'backend', role: 'Auth & DB', level: 'Intermediate' },
        { name: 'Git', category: 'tools', role: 'Version Control', level: 'Expert' },
        { name: 'ViteJS', category: 'tools', role: 'Build Tool', level: 'Advanced' }
    ];

    const filteredSkills = activeTab === 'all'
        ? techStack
        : techStack.filter(item => item.category === activeTab);

    return (
        <section className='skills-section' id='skills'>
            <div className='skills-bg-grid' />
            <div className='skills-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>02.</span>
                    <h2 className='section-heading'>Tech Stack & Skills</h2>
                    <div className='section-divider-line' />
                </div>

                <p className='skills-intro-text animate-on-scroll delay-100'>
                    A comprehensive set of modern technologies, frameworks, and engineering tools I utilize to build scalable, high-performance web applications.
                </p>

                {/* Category Filter Tabs */}
                <div className='skills-tabs animate-on-scroll delay-150'>
                    {skillCategories.map(cat => (
                        <button
                            key={cat.id}
                            className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Categorized Tech Grid */}
                <div className='skills-grid'>
                    {filteredSkills.map((tech, idx) => (
                        <div key={tech.name} className={`tech-card animate-on-scroll delay-${(idx % 6 + 1) * 100}`}>
                            <div className='tech-icon-box'>
                                <img src={skillsImage(tech.name)} alt={tech.name} className='tech-icon-img' />
                            </div>
                            <div className='tech-info'>
                                <h3 className='tech-name'>{tech.name}</h3>
                                <span className='tech-role'>{tech.role}</span>
                            </div>
                            <span className={`tech-level-badge level-${tech.level.toLowerCase()}`}>
                                {tech.level}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Animated Marquee Strip at bottom */}
                <div className='skills-marquee-container animate-on-scroll delay-200'>
                    <div className='marquee-label'>Continuous Integration & Everyday Arsenal:</div>
                    <Marquee
                        gradient={false}
                        speed={50}
                        pauseOnHover={true}
                        direction='left'
                    >
                        {techStack.map((tech, idx) => (
                            <div className='marquee-chip' key={idx}>
                                <img src={skillsImage(tech.name)} alt={tech.name} className='marquee-icon' />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default Skills;
