```javascript
const express = require('express');
const router = express.Router();
const SupportTicket = require('../models/SupportTicket');
const auth = require('../middleware/auth');
const errorHandler = require('../middleware/errorHandler');

// Route to create a new support ticket
router.post('/create', auth, async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        const newTicket = new SupportTicket({ title, description, userId });
        await newTicket.save();
        res.status(201).json({ message: 'Support ticket created successfully', ticket: newTicket });
    } catch (error) {
        errorHandler(error, res);
    }
});

// Route to get all support tickets for a user
router.get('/user/:userId', auth, async (req, res) => {
    try {
        const { userId } = req.params;
        const tickets = await SupportTicket.find({ userId });
        res.status(200).json({ tickets });
    } catch (error) {
        errorHandler(error, res);
    }
});

// Route to get a specific support ticket
router.get('/:ticketId', auth, async (req, res) => {
    try {
        const { ticketId } = req.params;
        const ticket = await SupportTicket.findById(ticketId);
        if (!ticket) {
            return res.status(404).json({ message: 'Support ticket not found' });
        }
        res.status(200).json({ ticket });
    } catch (error) {
        errorHandler(error, res);
    }
});

// Route to update a support ticket
router.put('/:ticketId', auth, async (req, res) => {
    try {
        const { ticketId } = req.params;
        const { title, description } = req.body;
        const ticket = await SupportTicket.findByIdAndUpdate(ticketId, { title, description }, { new: true });
        if (!ticket) {
            return res.status(404).json({ message: 'Support ticket not found' });
        }
        res.status(200).json({ message: 'Support ticket updated successfully', ticket });
    } catch (error) {
        errorHandler(error, res);
    }
});

// Route to delete a support ticket
router.delete('/:ticketId', auth, async (req, res) => {
    try {
        const { ticketId } = req.params;
        const ticket = await SupportTicket.findByIdAndDelete(ticketId);
        if (!ticket) {
            return res.status(404).json({ message: 'Support ticket not found' });
        }
        res.status(200).json({ message: 'Support ticket deleted successfully' });
    } catch (error) {
        errorHandler(error, res);
    }
});

module.exports = router;
```