```javascript
const mongoose = require('mongoose');

const MarketplaceItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('MarketplaceItem', MarketplaceItemSchema);
```