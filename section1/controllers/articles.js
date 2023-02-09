const getAllArticles = async (req, res) => {
    const message = req.body.message
    const comment = req.body.comment
    try {
        res.json({
            message: "GET all articles success",
            data: {
                message: message,
                comment: comment
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

const createArticle = async (req, res) => {
    console.log('request: ', req.body)
    try {
        res.json({
            message: "Create article success",
            data: {
                message: "Hallo everyone",
                comment: "hallo ugha"
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllArticles, 
    createArticle
}