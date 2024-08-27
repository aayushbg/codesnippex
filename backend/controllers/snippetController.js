const Snippet = require('../models/Snippet');

// @desc    Get all snippets
// @route   GET /api/snippets
// @access  Public
const getSnippets = async (req, res) => {
  const snippets = await Snippet.find({}).sort({ popularity: -1 });
  res.json(snippets);
};

// @desc    Get single snippet
// @route   GET /api/snippets/:id
// @access  Public
const getSnippetById = async (req, res) => {
  const snippet = await Snippet.findById(req.params.id);
  if (snippet) {
    res.json(snippet);
  } else {
    res.status(404);
    throw new Error('Snippet not found');
  }
};

// @desc    Create a snippet
// @route   POST /api/snippets
// @access  Private
const createSnippet = async (req, res) => {
  const { title, description, code, language } = req.body;

  const snippet = new Snippet({
    title,
    description,
    code,
    language,
    user: req.user._id,
  });

  const createdSnippet = await snippet.save();
  res.status(201).json(createdSnippet);
};

// @desc    Update a snippet
// @route   PUT /api/snippets/:id
// @access  Private
const updateSnippet = async (req, res) => {
  const { title, description, code, language } = req.body;

  const snippet = await Snippet.findById(req.params.id);

  if (snippet) {
    if (snippet.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to update this snippet');
    }

    snippet.title = title;
    snippet.description = description;
    snippet.code = code;
    snippet.language = language;

    const updatedSnippet = await snippet.save();
    res.json(updatedSnippet);
  } else {
    res.status(404);
    throw new Error('Snippet not found');
  }
};

// @desc    Delete a snippet
// @route   DELETE /api/snippets/:id
// @access  Private
const deleteSnippet = async (req, res) => {
  const snippet = await Snippet.findById(req.params.id);

  if (snippet) {
    if (snippet.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to delete this snippet');
    }

    // await snippet.remove();
    await snippet.deleteOne({ _id: req.params.id });
    res.json({ message: 'Snippet removed' });
  } else {
    res.status(404);
    throw new Error('Snippet not found');
  }
};

// @desc    Update snippet popularity
// @route   PUT /api/snippets/:id/vote
// @access  Private
const voteSnippet = async (req, res) => {
  const snippet = await Snippet.findById(req.params.id);

  if (snippet) {
    snippet.popularity += req.body.voteType === 'upvote' ? 1 : -1;
    const updatedSnippet = await snippet.save();
    res.json(updatedSnippet);
  } else {
    res.status(404);
    throw new Error('Snippet not found');
  }
};

module.exports = {
  getSnippets,
  getSnippetById,
  createSnippet,
  updateSnippet,
  deleteSnippet,
  voteSnippet,
};