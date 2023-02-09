const express = require('express')
const bodyParser = require('body-parser')
const article = require('./routes/articles')
const comment = require('./routes/comments')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/articles', article)
app.use('/comments', comment)

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});