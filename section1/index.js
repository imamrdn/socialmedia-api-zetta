const express = require('express')
const articleRoutes = require('./routes/articles')
const commentRoutes = require('./routes/comments')

const app = express()

app.use('/article', articleRoutes)
app.use('/comment', commentRoutes)

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});