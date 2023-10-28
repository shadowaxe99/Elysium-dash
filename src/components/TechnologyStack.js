import React from 'react';

const TechnologyStack = () => {
    return (
        <div className="tech-stack">
            <h2>Technology Stack</h2>
            <ul>
                <li>
                    <h3>Frontend:</h3>
                    <p>React.js for building user interfaces, along with Tailwind CSS for styling.</p>
                </li>
                <li>
                    <h3>Backend:</h3>
                    <p>Node.js and Express.js for server-side logic.</p>
                </li>
                <li>
                    <h3>Database:</h3>
                    <p>MongoDB for data storage and management.</p>
                </li>
                <li>
                    <h3>Hosting & Deployment:</h3>
                    <p>Vercel for hosting and deployment, ensuring smooth CI/CD pipelines.</p>
                </li>
            </ul>
        </div>
    );
};

export default TechnologyStack;