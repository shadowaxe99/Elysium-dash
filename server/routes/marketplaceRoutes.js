```javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MarketplaceItem = require('../models/MarketplaceItem');

// Get all marketplace items
router.get('/', async (req, res) => {
    try {
        const items = await MarketplaceItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one marketplace item
router.get('/:id', getItem, (req, res) => {
    res.json(res.item);
});

// Create one marketplace item
router.post('/', auth, async (req, res) => {
    const item = new MarketplaceItem({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        owner: req.user._id
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one marketplace item
router.patch('/:id', auth, getItem, async (req, res) => {
    if (req.body.name != null) {
        res.item.name = req.body.name;
    }
    if (req.body.description != null) {
        res.item.description = req.body.description;
    }
    if (req.body.price != null) {
        res.item.price = req.body.price;
    }
    try {
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one marketplace item
router.delete('/:id', auth, getItem, async (req, res) => {
    try {
        await res.item.remove();
        res.json({ message: 'Deleted Item' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getItem(req, res, next) {
    let item;
    try {
        item = await MarketplaceItem.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: 'Cannot find item' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.item = item;
    next();
}

module.exports = router;
```