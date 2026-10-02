import React from 'react';
import { FiBriefcase, FiCheckCircle, FiZap, FiCode } from 'react-icons/fi';
import './About.css';
import { headerData } from '../../data/headerData';

function About() {
    const highlights = [
        {
            icon: <FiBriefcase className='highlight-icon' />,
            number: '3+ Years',
            title: 'Frontend Experience',
            desc: 'Building responsive React & Next.js web applications'
        },
        {
            icon: <FiCheckCircle className='highlight-icon' />,
            number: '15+ Projects',
            title: 'Delivered Successfully',
            desc: 'Enterprise solutions and client web applications'
        },
        {
            icon: <FiZap className='highlight-icon' />,
            number: '98+ Score',
            title: 'Performance & SEO',
            desc: 'Optimized Core Web Vitals and fast load times'
        },
        {
            icon: <FiCode className='highlight-icon' />,
            number: 'Clean Code',
            title: 'Modern Architecture',
            desc: 'Modular, maintainable, and scalable component design'
        }
    ];

    return (
        <section className='about-section' id='about'>
            <div className='about-bg-grid' />
            <div className='about-container'>
                {/* Section Top Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>01.</span>
                    <h2 className='section-heading'>About Me</h2>
                    <div className='section-divider-line' />
                </div>

                <div className='about-content-grid'>
                    {/* Left Column: Narrative Bio */}
                    <div className='about-text-column'>
                        <div className='about-story animate-on-scroll delay-100'>
                            <p>
                                I'm a frontend engineer based in <strong>Ahmedabad, Gujarat, India</strong>, focused on building interfaces and web systems that are <strong>fast, predictable, and deliberately engineered</strong>. I care deeply about the details that matter — especially the ones users don't consciously notice.
                            </p>
                            <p>
                                I work close to the browser, where rendering behavior, accessibility, and performance are core concerns, not afterthoughts. I treat <strong>frontend quality as an engineering discipline</strong>, focused on how software behaves under real production use and user stress.
                            </p>
                            <p>
                                Beyond interfaces, I think in scalable systems — how state stays predictable, how component libraries stay reusable, and why maintainability from day one guarantees software longevity. This drives me toward clean architecture and modern tools like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>.
                            </p>
                        </div>

                        <blockquote className='about-quote animate-on-scroll delay-200'>
                            <em>"Good software should be quiet, fast, and hard to misuse."</em>
                        </blockquote>

                        {/* Professional Highlights Subsection */}
                        <div className='about-highlights-wrapper animate-on-scroll delay-250'>
                            <h3 className='highlights-title'>Professional Highlights</h3>
                            <div className='highlights-grid'>
                                {highlights.map((item, idx) => (
                                    <div key={idx} className={`highlight-card animate-on-scroll delay-${(idx + 1) * 100}`}>
                                        <div className='highlight-header'>
                                            {item.icon}
                                            <span className='highlight-num'>{item.number}</span>
                                        </div>
                                        <h4 className='highlight-name'>{item.title}</h4>
                                        <p className='highlight-desc'>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: User Photo with Glowing Offset Frame */}
                    <div className='about-image-column animate-on-scroll animate-fade-right delay-200'>
                        <div className='about-photo-wrapper'>
                            <div className='about-photo-frame'>
                                <img
                                    src={headerData.image}
                                    alt={headerData.name}
                                    className='about-photo-img'
                                />
                            </div>
                            <div className='about-photo-offset-border' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
