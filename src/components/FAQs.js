```javascript
import React from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: 'How do I login?',
            answer: 'You can login using your email and password. Alternatively, you can use third-party services like Google or Facebook.'
        },
        {
            question: 'How do I manage my AI agents?',
            answer: 'You can manage your AI agents from the "My Agents" section in the dashboard.'
        },
        {
            question: 'How do I explore the Elysium metaverse?',
            answer: 'You can explore the Elysium metaverse from the "Marketplace" section in the dashboard.'
        },
        // More FAQs can be added here
    ];

    return (
        <div className="faqs">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
```