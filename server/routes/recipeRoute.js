const express = require('express')
const { voteRecipe } = require('../controllers/recipeController')
const {
  getRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  isPublished,
  searchRecipe,
} = require('../controllers/recipeController')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', getRecipes)
router.get('/:id', getRecipe)
router.put('/:id', authenticate, updateRecipe)
router.post('/', authenticate, createRecipe)
router.delete('/:id', authenticate, deleteRecipe)
router.patch('/:id/publish', authenticate, isPublished)
router.patch('/:id/vote', authenticate, voteRecipe)
router.get('/search', searchRecipe);

module.exports = router
