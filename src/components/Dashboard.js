```javascript
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import MyAgents from './MyAgents';
import Marketplace from './Marketplace';
import Profile from './Profile';
import Settings from './Settings';
import Notifications from './Notifications';
import Search from './Search';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'My Agents':
        return <MyAgents />;
      case 'Marketplace':
        return <Marketplace />;
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="dashboard-content">
        <Notifications />
        <Search />
        {renderTab()}
      </div>
    </div>
  );
};

export default Dashboard;
```