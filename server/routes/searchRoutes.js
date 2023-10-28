```javascript
const express = require('express');
const router = express.Router();
const { searchItems } = require('../controllers/searchController');

// Middleware
const { errorHandler } = require('../middleware/errorHandler');

// Route to handle global search
router.get('/search', errorHandler(searchItems));

module.exports = router;
```