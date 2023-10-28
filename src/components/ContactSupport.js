import React, { useState } from 'react';

const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // for example, send the form data to your server or an email service
    };

    return (
        <div className="contact-support">
            <h2>Contact Support</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div>
                    <label>Message</label>
                    <textarea 
                        name="message" 
                        value={message} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactSupport;