```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marketplace = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get('/api/marketplace');
        setItems(response.data);
    };

    return (
        <div className="marketplace">
            <h1>Marketplace</h1>
            <div className="items-list">
                {items.map(item => (
                    <div key={item._id} className="item-card">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
```