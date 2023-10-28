```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [agents, setAgents] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    fetchAgents();
    fetchRecentActivity();
  }, []);

  const fetchAgents = async () => {
    const response = await axios.get('/api/agents');
    setAgents(response.data);
  };

  const fetchRecentActivity = async () => {
    const response = await axios.get('/api/activity');
    setRecentActivity(response.data);
  };

  return (
    <div className="home">
      <h2>Welcome to Elysium Dashboard</h2>
      <div className="agents-overview">
        <h3>Your AI Agents</h3>
        {agents.map(agent => (
          <div key={agent.id} className="agent">
            <h4>{agent.name}</h4>
            <p>{agent.description}</p>
          </div>
        ))}
      </div>
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        {recentActivity.map(activity => (
          <div key={activity.id} className="activity">
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
```