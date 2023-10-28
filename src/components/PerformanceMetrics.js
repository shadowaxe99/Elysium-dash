```javascript
import React, { useState, useEffect } from 'react';

const PerformanceMetrics = () => {
    const [loadTime, setLoadTime] = useState(0);
    const [errorRate, setErrorRate] = useState(0);

    useEffect(() => {
        // Simulate fetching performance metrics from server
        setTimeout(() => {
            setLoadTime(Math.random() * 2); // Random load time under 2 seconds
            setErrorRate(Math.random() * 0.1); // Random error rate under 10%
        }, 1000);
    }, []);

    return (
        <div className="performance-metrics">
            <h2>Performance Metrics</h2>
            <div className="metric">
                <h3>Page Load Time</h3>
                <p>{loadTime.toFixed(2)} seconds</p>
            </div>
            <div className="metric">
                <h3>Error Rates</h3>
                <p>{(errorRate * 100).toFixed(2)}%</p>
            </div>
        </div>
    );
};

export default PerformanceMetrics;
```