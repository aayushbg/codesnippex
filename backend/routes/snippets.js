const express = require('express');
const router = express.Router();
const Snippet = require('../models/Snippet');
const auth = require('../middleware/auth');

// Get all snippets
router.get('/', async (req, res) => {
  try {
    const snippets = await Snippet.find().sort({ popularity: -1 });
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new snippet
router.post('/', auth, async (req, res) => {
  const snippet = new Snippet({
    ...req.body,
    user: req.user.id
  });

  try {
    const newSnippet = await snippet.save();
    res.status(201).json(newSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a snippet
router.put('/:id', auth, async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (snippet.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    const updatedSnippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a snippet
router.delete('/:id', auth, async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (snippet.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    await snippet.remove();
    res.json({ message: 'Snippet deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update snippet popularity
router.put('/:id/vote', auth, async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    snippet.popularity += req.body.voteType === 'upvote' ? 1 : -1;
    await snippet.save();
    res.json(snippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;