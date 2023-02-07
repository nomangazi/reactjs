import React from 'react';

const PersonalInfo = (props) => {
    return (
        <div className='personal-info border-b'>
            <div className=''>
                <p className='text-xl'>
                    <strong>{props.name}</strong>
                </p>
                <p>
                    Date of Birth: <strong>{props.dateOfBirth}</strong>
                </p>
                <p>
                    Tel: <strong>{props.telephone}</strong>
                </p>
                <p>
                    Address: <strong>{props.address}</strong>
                </p>
            </div>
        </div>
    );
};

export default PersonalInfo;
