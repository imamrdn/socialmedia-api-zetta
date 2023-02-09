const express = require('express')
const articles = require('./routes/articles')
const comments = require('./routes/comments')

const app = express()

app.use('/article', articles)
app.use('/article', comments)


app.listen(5000);