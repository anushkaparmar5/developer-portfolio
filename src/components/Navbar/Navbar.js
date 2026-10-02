import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import './Navbar.css';
import { headerData } from '../../data/headerData';
import { useHistory, useLocation } from 'react-router-dom';
import URLS from '../../routing/index';

function Navbar() {
    const history = useHistory();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        history.push(URLS.Home);
    };

    const navLinks = [
        { name: 'About', path: '/#about', hash: '#about' },
        { name: 'Tech Stack', path: '/#skills', hash: '#skills' },
        { name: 'Journey', path: '/#experience', hash: '#experience' },
        { name: 'Projects', path: '/#projects', hash: '#projects' },
        { name: 'Certificates', path: '/#certifications', hash: '#certifications' },
        { name: 'Connect', path: '/#contacts', hash: '#contacts' },
    ];

    return (
        <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className='navbar-wrapper'>
                {/* Brand Monogram */}
                <div className='navbar-brand' onClick={handleLogoClick}>
                    <span className='brand-logo-text'>BP</span>
                    <span className='brand-dot'>.</span>
                </div>

                {/* Center Horizontal Nav */}
                <nav className='navbar-nav-center'>
                    {navLinks.map((item, idx) => {
                        const isActive = location.hash === item.hash;
                        return (
                            <NavLink
                                key={idx}
                                to={item.path}
                                smooth={true}
                                duration={800}
                                className={`nav-item-link ${isActive ? 'active' : ''}`}
                            >
                                <span className='nav-link-text'>{item.name}</span>
                                {isActive && <span className='nav-active-pill' />}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Right Action */}
                <div className='navbar-right-actions'>
                    <a
                        href={headerData.resumePdf || '#'}
                        target='_blank'
                        rel='noreferrer'
                        className='nav-action-btn'
                    >
                        <span>Resume</span>
                        <FiArrowUpRight className='nav-action-icon' />
                    </a>

                    <div className='nav-status-badge' title='Available for work'>
                        <span className='status-pulse-dot' />
                        <span className='status-badge-text'>Available</span>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className='mobile-menu-btn'
                        onClick={toggleMobileMenu}
                        aria-label='Toggle menu'
                    >
                        {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <div className='mobile-nav-links'>
                    {navLinks.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.path}
                            smooth={true}
                            duration={800}
                            onClick={closeMobileMenu}
                            className='mobile-nav-link'
                        >
                            <span className='mobile-nav-num'>0{idx + 1}.</span>
                            <span className='mobile-nav-text'>{item.name}</span>
                        </NavLink>
                    ))}
                    <div className='mobile-nav-footer'>
                        <a
                            href={headerData.resumePdf || '#'}
                            target='_blank'
                            rel='noreferrer'
                            className='mobile-resume-btn'
                            onClick={closeMobileMenu}
                        >
                            <span>Download Resume</span>
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
