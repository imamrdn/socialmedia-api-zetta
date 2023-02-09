const commentPost = require('../models/comment')

const getAllComments = (req, res) => {
    commentPost
        .find()
        .then(    
            result => {
                res.json({
                    message: "Get comments success",
                    data: result
                })
            }
        )
        .catch( 
            err => {
                res.status(500).json({
                    message: "Server Error",
                    serverMessage: err
                })
            }
        )
}

const createComment = (req, res) => {
    const message = req.body.message

    const Posting = new commentPost({
        message: message
    })

    Posting
        .save()
        .then(
            result => {
                res.json({
                    message: "Create comment success",
                    data: {
                        message: message,
                        data: result
                    }
                })
            }
        )
        .catch( 
            err => res.status(500).json({
                message: "Server Error",
                serverMessage: err
            })
        )
}

const updateComment = (req, res) => {
    const message = req.body.message
    const postId = req.params.id

    commentPost
        .findById(postId)
        .then(
            post => {
                if(!post) {
                    const error = new Error('Comment not found')
                    error.errorStatus = 404
                    throw error
                }

                post.message = message
                return post.save()
            }
        )
        .then(
            result => {
                res.json({
                    message: "Update comment success",
                    data: result
                })
            }
        )
        .catch( 
            err => {
                res.status(500).json({
                    message: "Server Error",
                    serverMessage: err
                })
            }
        )
}

const deleteComment = (req, res) => {
    const postId = req.params.id

    commentPost
        .findById(postId)
        .then(
            post => {
                if(!post) {
                    const error = new Error('Comment not found')
                    error.errorStatus = 404
                    throw error
                }

                return commentPost.findByIdAndRemove(postId)
            }
        )
        .then(
            result => {
                res.json({
                    message: "Delete comment success",
                    data: result
                })
            }
        )
        .catch( 
            err => {
                res.status(500).json({
                    message: "Server Error",
                    serverMessage: err
                })
            }
        )
}

module.exports = {
    getAllComments,
    createComment,
    updateComment,
    deleteComment
}