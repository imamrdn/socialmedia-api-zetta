const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlePost = new Schema({
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('article_post', articlePost)