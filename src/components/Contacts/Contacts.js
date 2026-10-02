import React, { useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import isEmail from 'validator/lib/isEmail';
import {
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiArrowUpRight, FiZap } from 'react-icons/fi';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import { headerData } from '../../data/headerData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setSnackbarMsg('Please fill in all required fields');
            setOpen(true);
            return;
        }

        if (!isEmail(email)) {
            setSnackbarMsg('Please enter a valid email address');
            setOpen(true);
            return;
        }

        setIsSubmitting(true);

        // Simulate seamless submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setSnackbarMsg('Message sent successfully! I will respond promptly.');
            setOpen(true);

            setTimeout(() => {
                setSuccess(false);
            }, 4000);
        }, 800);
    };

    return (
        <section className='contacts-section' id='contacts'>
            <div className='contacts-bg-grid' />
            
            {/* CTA Banner: "Build Better Apps, Faster" */}
            <div className='cta-banner-wrapper animate-on-scroll'>
                <div className='cta-banner-card'>
                    <div className='cta-banner-glow' />
                    <div className='cta-badge'>
                        <FiZap className='cta-zap-icon' />
                        <span>Ready to collaborate</span>
                    </div>
                    <h2 className='cta-headline'>Build Better Apps, Faster</h2>
                    <p className='cta-subtext'>
                        Have an exciting project in mind or looking for a passionate Frontend & MERN engineer to elevate your team? Let's turn your vision into pixel-perfect reality.
                    </p>
                    <div className='cta-actions'>
                        <a href={`mailto:${contactsData.email}`} className='cta-email-btn'>
                            <span>Email Me Directly</span>
                            <FiArrowUpRight />
                        </a>
                        <a href={headerData.resumePdf || '#'} target='_blank' rel='noreferrer' className='cta-cv-btn'>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='contacts-container'>
                {/* Section Header */}
                <div className='section-title-wrapper animate-on-scroll'>
                    <span className='section-num'>07.</span>
                    <h2 className='section-heading'>Get In Touch</h2>
                    <div className='section-divider-line' />
                </div>

                <div className='contacts-content-grid'>
                    {/* Left Column: Direct Info & Socials */}
                    <div className='contacts-info-column animate-on-scroll animate-fade-left delay-150'>
                        <h3 className='info-title'>Let's Start a Conversation</h3>
                        <p className='info-desc'>
                            Whether you have a question, a project proposal, or just want to discuss modern frontend architecture, my inbox is always open.
                        </p>

                        <div className='direct-cards-list'>
                            <a href={`mailto:${contactsData.email}`} className='direct-card'>
                                <div className='direct-icon-box'>
                                    <FiMail />
                                </div>
                                <div className='direct-details'>
                                    <span className='direct-label'>Email</span>
                                    <span className='direct-value'>{contactsData.email}</span>
                                </div>
                            </a>

                            <a href={`tel:${contactsData.phone}`} className='direct-card'>
                                <div className='direct-icon-box'>
                                    <FiPhone />
                                </div>
                                <div className='direct-details'>
                                    <span className='direct-label'>Phone</span>
                                    <span className='direct-value'>{contactsData.phone}</span>
                                </div>
                            </a>

                            <div className='direct-card non-link'>
                                <div className='direct-icon-box'>
                                    <FiMapPin />
                                </div>
                                <div className='direct-details'>
                                    <span className='direct-label'>Location</span>
                                    <span className='direct-value'>{contactsData.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='contacts-social-wrapper'>
                            <span className='social-label'>Find Me Online:</span>
                            <div className='contacts-social-btns'>
                                {socialsData.github && (
                                    <a href={socialsData.github} target='_blank' rel='noreferrer' className='contact-social-btn' aria-label='GitHub'>
                                        <FaGithub />
                                    </a>
                                )}
                                {socialsData.linkedIn && (
                                    <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className='contact-social-btn' aria-label='LinkedIn'>
                                        <FaLinkedinIn />
                                    </a>
                                )}
                                {socialsData.whatsapp && (
                                    <a href={socialsData.whatsapp} target='_blank' rel='noreferrer' className='contact-social-btn' aria-label='WhatsApp'>
                                        <FaWhatsapp />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Modern Glassmorphic Form */}
                    <div className='contacts-form-column animate-on-scroll animate-fade-right delay-200'>
                        <div className='form-glass-card'>
                            <h3 className='form-title'>Send a Message</h3>
                            <form onSubmit={handleContactForm} className='contact-form'>
                                <div className='form-group'>
                                    <label htmlFor='contact-name'>Your Name *</label>
                                    <input
                                        id='contact-name'
                                        type='text'
                                        placeholder='Jane Doe'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className='form-control-input'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='contact-email'>Your Email *</label>
                                    <input
                                        id='contact-email'
                                        type='email'
                                        placeholder='jane@example.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className='form-control-input'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='contact-subject'>Subject</label>
                                    <input
                                        id='contact-subject'
                                        type='text'
                                        placeholder='Project Inquiry / Opportunity'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className='form-control-input'
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='contact-msg'>Message *</label>
                                    <textarea
                                        id='contact-msg'
                                        rows='5'
                                        placeholder='Hi Bansi, I would like to discuss...'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className='form-control-textarea'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className={`form-submit-btn ${success ? 'btn-success' : ''}`}
                                >
                                    {success ? (
                                        <>
                                            <FiCheck className='submit-btn-icon' />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : isSubmitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FiSend className='submit-btn-icon' />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={4500}
                onClose={handleClose}
            >
                <SnackbarContent
                    message={snackbarMsg}
                    action={
                        <IconButton size='small' color='inherit' onClick={handleClose}>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    }
                    style={{
                        backgroundColor: '#1e293b',
                        color: '#f8fafc',
                        border: '1px solid #38bdf8',
                        fontFamily: 'var(--primaryFont)',
                        borderRadius: '10px'
                    }}
                />
            </Snackbar>
        </section>
    );
}

export default Contacts;
