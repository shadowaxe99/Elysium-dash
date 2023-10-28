import React from 'react';

const Dependencies = () => {
    return (
        <div className="dependencies">
            <h2>Dependencies</h2>
            <ul>
                <li>Backend API: The dashboard relies on backend APIs to fetch and update data.</li>
                <li>Third-party Login Services: If social login is implemented, dependencies on third-party authentication services.</li>
                <li>React.js: Used in all frontend components for building user interfaces.</li>
                <li>Node.js and Express.js: Used in all server-side logic files.</li>
                <li>MongoDB Schemas: User, Agent, MarketplaceItem, Notification, and SupportTicket schemas are used across various server routes and models.</li>
                <li>CSS Classes: Used across all CSS files and their corresponding React components.</li>
                <li>Middleware Functions: auth and errorHandler middleware are used in server routes.</li>
                <li>Utility Functions: encryption, ADACompliance, performanceMetrics, security, database, thirdPartyServices, and timeline functions are used across various server files.</li>
                <li>DOM Element IDs: Used in frontend components for JavaScript interactivity and CSS styling.</li>
                <li>Backend API Endpoints: Used in frontend components for fetching and updating data.</li>
                <li>Third-party Services: Used in Login component and server routes if social login is implemented.</li>
                <li>State Variables and Props: Used across React components for state management and data passing.</li>
                <li>Function Names: Used across all files for defining and calling functions.</li>
                <li>Message Names: Used in Notifications component and server routes for user notifications.</li>
            </ul>
        </div>
    );
};

export default Dependencies;