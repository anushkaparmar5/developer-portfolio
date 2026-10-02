import React from 'react';
import './Footer.css';
import { headerData } from '../../data/headerData';
import { FiHeart } from 'react-icons/fi';

function Footer() {
    return (
        <footer className='modern-footer'>
            <div className='footer-container'>
                <div className='footer-brand'>
                    <span className='footer-logo'>BP</span>
                    <span className='footer-dot'>.</span>
                </div>
                <p className='footer-text'>
                    Designed & Engineered with <FiHeart className='footer-heart' /> by <strong>{headerData.name}</strong>
                </p>
                <p className='footer-copyright'>
                    © {new Date().getFullYear()} All Rights Reserved. Built with React & modern CSS.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
