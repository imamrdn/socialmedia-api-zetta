const articlePost = require('../models/article')
const commentPost = require('../models/comment')

const getAllArticles = (req, res) => {
    articlePost
        .aggregate([{
            $lookup:
            {
                from:'comment',
                localField:'comment',
                foreignField:"_id",
                as:'comm'
            }}])
        .then(    
            result => {
                res.json({
                    message: "Get articles success",
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

const getArticle = (req, res) => {
    const postId = req.params.id
    
    articlePost
        .findById(postId)
        .then(
            result => {
                if(!result) {
                    const error = new Error('Article not found')
                    error.errorStatus = 404
                    throw error
                }

                res.json({
                    message: "Get article success",
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

const createArticle = (req, res) => {
    const message = req.body.message

    const Posting = new articlePost({
        message: message
    })

    Posting
        .save()
        .then(
            result => {
                res.json({
                    message: "Create article success",
                    data: result
                })
            }
        )
        .catch( 
            err => res.status(500).json({
                message: "Server Error",
                serverMessage: error
            })
        )
}

const updateArticle = (req, res) => {
    const message = req.body.message
    const postId = req.params.id

    articlePost
        .findById(postId)
        .then(
            post => {
                if(!post) {
                    const error = new Error('Article not found')
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
                    message: "Update article success",
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

const deleteArticle = (req, res) => {
    const postId = req.params.id

    articlePost
        .findById(postId)
        .then(
            post => {
                if(!post) {
                    const error = new Error('Article not found')
                    error.errorStatus = 404
                    throw error
                }

                return articlePost.findByIdAndRemove(postId)
            }
        )
        .then(
            result => {
                res.json({
                    message: "Delete article success",
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
    getAllArticles,
    getArticle, 
    createArticle,
    updateArticle,
    deleteArticle
}