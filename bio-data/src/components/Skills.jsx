import React from 'react';

const Skills = (props) => {
    return (
        <div className='skills-section'>
            <h1 className='text-3xl font-bold'>Skills of me</h1>
            <div className='list-of-skills'>
                <ul className='ml-4'>
                    {props.skills.map((skill,index) => (
                        <li key={skill}>{index+1}. {skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
