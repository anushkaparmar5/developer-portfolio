import React from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import './Achievement.css';

function AchievementCard({ id, title, details, date, field, image }) {
    return (
        <div className='cert-card'>
            <div className='cert-card-top'>
                <div className='cert-icon-badge'>
                    <FiAward />
                </div>
                <span className='cert-date'>
                    <FiCalendar />
                    <span>{date}</span>
                </span>
            </div>

            <div className='cert-body'>
                <h3 className='cert-title'>{title}</h3>
                <p className='cert-desc'>{details}</p>
                
                <div className='cert-footer'>
                    <span className='cert-field-badge'>{field}</span>
                    {image && (
                        <span className='cert-verified-tag'>
                            ✓ Verified
                        </span>
                    )}
                </div>
            </div>

            {image && (
                <div className='cert-img-preview'>
                    <img src={image} alt={title} className='cert-thumb' />
                </div>
            )}
        </div>
    );
}

export default AchievementCard;
