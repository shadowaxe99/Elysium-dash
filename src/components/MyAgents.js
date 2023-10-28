```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyAgents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetchAgents();
    }, []);

    const fetchAgents = async () => {
        try {
            const response = await axios.get('/api/agents');
            setAgents(response.data);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };

    return (
        <div className="myAgents">
            <h2>My Agents</h2>
            {agents.map(agent => (
                <div key={agent._id} className="agentCard">
                    <h3>{agent.name}</h3>
                    <p>{agent.description}</p>
                    <button onClick={() => interactWithAgent(agent._id)}>Interact</button>
                </div>
            ))}
        </div>
    );
};

export default MyAgents;
```