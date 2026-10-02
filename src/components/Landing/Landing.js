import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import './Landing.css';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

function Landing() {
    const handleScrollToAbout = (e) => {
        e.preventDefault();
        const aboutElem = document.getElementById('about');
        if (aboutElem) {
            aboutElem.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.hash = '#about';
        }
    };

    return (
        <section className='hero-section' id='home'>
            {/* Ambient Animated Background Grid & Glowing Orbs */}
            <div className='hero-bg-grid' />
            <div className='hero-glow hero-glow-1' />
            <div className='hero-glow hero-glow-2' />

            <div className='hero-container'>
                {/* Left Column: Headline & Intro */}
                <div className='hero-left animate-on-scroll animate-fade-left is-visible'>
                    <div className='hero-intro-wrapper'>
                        <h1 className='hero-name'>
                            {headerData.name}
                        </h1>

                        <h2 className='hero-tagline'>
                            Frontend Engineer <span className='hero-tagline-amp'>&</span> Product-Minded Builder
                        </h2>

                        <p className='hero-bio'>
                            Building <strong>end-to-end solutions</strong> from pixel-perfect interfaces to <strong>scalable frontend architectures</strong>, with deep expertise in <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>REST APIs</strong>, and <strong>modern web standards</strong>.
                        </p>

                        <div className='hero-status-pill'>
                            <span className='status-dot' />
                            <span>Available for Full-Time & High-Impact Opportunities</span>
                        </div>

                        <div className='hero-actions'>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                duration={800}
                                className='hero-primary-cta'
                            >
                                <span>Get In Touch</span>
                            </NavLink>

                            <NavLink
                                to='/#projects'
                                smooth={true}
                                duration={800}
                                className='hero-secondary-cta'
                            >
                                <span>View Projects</span>
                            </NavLink>

                            {/* Social Icons */}
                            <div className='hero-social-links'>
                                {socialsData.linkedIn && (
                                    <a
                                        href={socialsData.linkedIn}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label='LinkedIn'
                                        className='hero-social-btn'
                                    >
                                        <FaLinkedin />
                                    </a>
                                )}
                                {socialsData.github && (
                                    <a
                                        href={socialsData.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label='GitHub'
                                        className='hero-social-btn'
                                    >
                                        <FaGithub />
                                    </a>
                                )}
                                {socialsData.whatsapp && (
                                    <a
                                        href={socialsData.whatsapp}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label='WhatsApp'
                                        className='hero-social-btn'
                                    >
                                        <FaWhatsapp />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Srijan-Style Bento Grid Cards with Staggered Entrance */}
                <div className='hero-right'>
                    <div className='bento-card bento-mastery animate-on-scroll is-visible delay-100'>
                        <div className='bento-icon-title'>
                            <span className='bento-trophy'>🏆</span>
                            <h3>Frontend & MERN Mastery</h3>
                        </div>
                        <p className='bento-tags'>
                            React.js • Next.js • TypeScript • Redux Toolkit • REST APIs • UI/UX • Clean Architecture
                        </p>
                    </div>

                    <div className='bento-row'>
                        <div className='bento-card bento-subcard animate-on-scroll is-visible delay-200'>
                            <div className='bento-sub-header'>
                                <span className='bento-sub-icon text-cyan'>💙</span>
                                <h4>Frontend</h4>
                            </div>
                            <span className='bento-sub-detail'>React 18 + Next.js + TS</span>
                        </div>

                        <div className='bento-card bento-subcard animate-on-scroll is-visible delay-300'>
                            <div className='bento-sub-header'>
                                <span className='bento-sub-icon text-purple'>🎯</span>
                                <h4>Architecture</h4>
                            </div>
                            <span className='bento-sub-detail'>APIs + Redux + Modular Systems</span>
                        </div>
                    </div>

                    <div className='bento-card bento-uiux animate-on-scroll is-visible delay-350'>
                        <div className='bento-uiux-header'>
                            <div className='bento-sub-header'>
                                <span className='bento-sub-icon'>✨</span>
                                <h4>UI/UX Excellence</h4>
                            </div>
                            <span className='bento-palette'>🎨</span>
                        </div>
                        <p className='bento-sub-detail'>
                            Design engineering with pixel-precision and responsive accessibility at core
                        </p>
                    </div>

                    <div className='bento-row'>
                        <div className='bento-card bento-subcard animate-on-scroll is-visible delay-400'>
                            <div className='bento-sub-header'>
                                <span className='bento-sub-icon'>🚀</span>
                                <h4>Web Vitals</h4>
                            </div>
                            <span className='bento-sub-detail'>98+ Perf • SEO • Vite</span>
                        </div>

                        <div className='bento-card bento-subcard animate-on-scroll is-visible delay-500'>
                            <div className='bento-sub-header'>
                                <span className='bento-sub-icon'>🤖</span>
                                <h4>Modern Tooling</h4>
                            </div>
                            <span className='bento-sub-detail'>Git + Tailwind + Firebase</span>
                        </div>
                    </div>

                    <div className='bento-card bento-quote animate-on-scroll is-visible delay-600'>
                        <p>
                            <em>"Bridging design and engineering to build exceptional digital experiences"</em>
                        </p>
                    </div>
                </div>
            </div>

            {/* Clickable Centered Explore Indicator */}
            <div className='hero-explore-container animate-on-scroll is-visible delay-600'>
                <a
                    href='#about'
                    onClick={handleScrollToAbout}
                    className='hero-explore-btn'
                    aria-label='Scroll to About Section'
                >
                    <span className='explore-text'>EXPLORE</span>
                    <div className='mouse-scroll-icon'>
                        <div className='mouse-wheel' />
                    </div>
                    <FiChevronDown className='explore-arrow' />
                </a>
            </div>
        </section>
    );
}

export default Landing;
