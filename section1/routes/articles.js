const express = require('express')
const articleController = require('../controllers/articles')
const router = express.Router()

router.get('/', articleController.getAllArticles)
router.get('/:id', articleController.getArticle)
router.post('/', articleController.createArticle)
router.put('/:id', articleController.updateArticle)
// router.delete('/:id', articleController.deleteArticle)

module.exports = router