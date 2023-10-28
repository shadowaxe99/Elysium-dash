```javascript
const performance = require('perf_hooks').performance;

const measureExecutionTime = (func) => {
    return (...args) => {
        const start = performance.now();
        const result = func(...args);
        const end = performance.now();
        console.log(`Execution time: ${end - start}ms`);
        return result;
    };
};

const monitorErrorRates = (func) => {
    let totalExecutions = 0;
    let totalErrors = 0;

    return (...args) => {
        totalExecutions++;
        try {
            return func(...args);
        } catch (error) {
            totalErrors++;
            console.log(`Error rate: ${totalErrors / totalExecutions * 100}%`);
            throw error;
        }
    };
};

module.exports = {
    measureExecutionTime,
    monitorErrorRates
};
```