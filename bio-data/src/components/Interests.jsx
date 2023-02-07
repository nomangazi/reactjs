import React from 'react';

const Interests = (props) => {
    return (
        <div className='interests-section'>
            <h2 className='text-3xl font-bold'>Interest of me</h2>
            <div className='interests-section'>
                <ul className=' ml-4'>
                    {props.interests.map((item,index) => (
                        <li key={item}>{index+1}. {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Interests;
