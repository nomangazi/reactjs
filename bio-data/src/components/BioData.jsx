import React from 'react';

const BioData = ({ personalInfo, skillsSection, interestsSection, socialLinks }) => {
    return (
        <div className='individual-bio-data border border-gray-900 mb-10 px-8 py-4'>
            <h1 className='text-4xl'>Resume of</h1>
            {personalInfo}
            {skillsSection}
            {interestsSection}
            {socialLinks}
        </div>
    );
};

export default BioData;
