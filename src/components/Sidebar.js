```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <Link to="/home" className="sidebar-link">Home</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/myagents" className="sidebar-link">My Agents</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/marketplace" className="sidebar-link">Marketplace</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/profile" className="sidebar-link">Profile</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/settings" className="sidebar-link">Settings</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/notifications" className="sidebar-link">Notifications</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/search" className="sidebar-link">Search</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/faqs" className="sidebar-link">FAQs</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/contactsupport" className="sidebar-link">Contact Support</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
```