const express = require('express')
const commentController = require('../controllers/comments')
const router = express.Router()

router.get('/', commentController.getAllComments)
router.post('/:id', commentController.createComment)
router.patch('/:id', commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

module.exports = router