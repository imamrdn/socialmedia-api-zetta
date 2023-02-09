const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
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

mongoose
    .connect('mongodb+srv://imamrd:iKEj8VpwPkt5gYBh@cluster0.r7wfhri.mongodb.net/article?retryWrites=true&w=majority')
    .then(()=>{
        app.listen(5000, () => {
            console.log(`Server running on port 5000`)
        });
    })
    .catch(err => console.log(err))
