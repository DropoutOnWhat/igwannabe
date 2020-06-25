const mongoose = require('mongoose')

    const PostSchema = new mongoose.Schema({ 
        author: {type: String},
        imgLink: {type: String},
        date: {type: Date},
        description: {type: String},
        likes: {type: Number}
    })

module.exports = mongoose.model('post', PostSchema)
