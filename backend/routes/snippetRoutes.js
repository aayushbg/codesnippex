const express = require('express');
const router = express.Router();
const {
  getSnippets,
  getSnippetById,
  createSnippet,
  updateSnippet,
  deleteSnippet,
  voteSnippet,
} = require('../controllers/snippetController');
const { protect } = require('../middleware/auth');

router.route('/').get(getSnippets).post(protect, createSnippet);
router
  .route('/:id')
  .get(getSnippetById)
  .put(protect, updateSnippet)
  .delete(protect, deleteSnippet);
router.route('/:id/vote').put(protect, voteSnippet);

module.exports = router;