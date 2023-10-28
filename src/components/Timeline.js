```javascript
import React from 'react';

const Timeline = () => {
    const timelineData = [
        { date: 'Sprint 1 Start', description: 'Initial project setup, Login and Registration functionality' },
        { date: 'Sprint 2 Start', description: 'Dashboard and Sidebar components' },
        { date: 'Sprint 3 Start', description: 'Home, My Agents, and Marketplace components' },
        { date: 'Sprint 4 Start', description: 'Profile, Settings, and Notifications components' },
        { date: 'Sprint 5 Start', description: 'Search, FAQs, and Contact Support components' },
        { date: 'Testing Phase Start', description: 'Testing and debugging' },
        { date: 'Estimated Launch Date', description: 'Deployment of the application' },
    ];

    return (
        <div className="timeline">
            <h2>Development Timeline</h2>
            {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                    <h3>{item.date}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
```