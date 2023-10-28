```javascript
import React from 'react';

const Accessibility = () => {
    return (
        <div className="accessibility">
            <h1>Accessibility</h1>
            <p>
                We are committed to ensuring that our platform is accessible to all users. 
                We strive to adhere to ADA standards and continuously work on improving our accessibility features.
            </p>
            <h2>ADA Compliance</h2>
            <p>
                Our platform is designed with ADA standards in mind. We aim to make our platform accessible to all users, 
                including those with disabilities. If you encounter any accessibility issues, please contact our support team.
            </p>
            <button onClick={() => window.location.href='/contactSupport'}>Contact Support</button>
        </div>
    );
};

export default Accessibility;
```