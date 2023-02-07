import React from 'react';

const SocialLinks = (props) => {
    return (
        <div className='social-link border-b'>
            <h2 className='text-3xl font-bold'>Social Links</h2>
            <div className='social-links'>
                <ul>
                    {props.socialLinks.map((item) => (
                        <li key={item.platformName}>
                            <a href={item.profileLink}>{item.platformName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SocialLinks;
