```javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Agent = require('../models/Agent');

// Get all agents for a user
router.get('/', auth, async (req, res) => {
  try {
    const agents = await Agent.find({ owner: req.user.id });
    res.json(agents);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new agent
router.post('/', auth, async (req, res) => {
  try {
    const newAgent = new Agent({
      name: req.body.name,
      owner: req.user.id
    });

    const agent = await newAgent.save();
    res.json(agent);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update an agent
router.put('/:id', auth, async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);

    if (!agent) return res.status(404).json({ msg: 'Agent not found' });

    // Make sure user owns the agent
    if (agent.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    agent.name = req.body.name;
    await agent.save();

    res.json(agent);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete an agent
router.delete('/:id', auth, async (req, res) => {
  try {
    let agent = await Agent.findById(req.params.id);

    if (!agent) return res.status(404).json({ msg: 'Agent not found' });

    // Make sure user owns the agent
    if (agent.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Agent.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Agent removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
```