import React from 'react';

export default function AboutMe() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'left' }}>
                <img
                    src="./v2/images/pfp1.png"
                    alt="icon"
                    style={{ width: '100px', height: '100px' }}
                />
                <div className="bio-box-1" style={{ marginLeft: '8px' }}>
                    <div
                        style={{
                            fontWeight: 'bold',
                            fontSize: '13px',
                            textDecoration: 'underline',
                        }}
                    >
                        About Me
                    </div>
                    <p>Name: David Donohue</p>
                    <p>B-Day: April 9th</p>
                    <p>Employment: <strong>Looking for Work</strong></p>
                    <p>Location: North Carolina, Triad Area</p>
                    <p>Status: Online</p>
                </div>
            </div>

            <div className="bio-box-2">
                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Bio</p>
                <p>
                    Welcome to my portfolio! I'm a software developer with a passion
                    for creating and learning new things. I have over 12 years of
                    experience programming split between hobby and academia, and
                    have worked on a variety of projects ranging from web
                    development to game development.
                </p>
                <p>
                    I graduated from the University of North Carolina Greensboro with 
                    a degree in Computer Science.
                </p>
            </div>
        </>
    );
}
