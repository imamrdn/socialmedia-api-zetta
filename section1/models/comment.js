const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentPost = new Schema({
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('comment_post', commentPost)