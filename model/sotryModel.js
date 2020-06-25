const mongoose = require('mongoose')

    const StorySchema = new mongoose.Schema({
        author: {type: String},
        imgLink: {type: String}
    })

module.exports = mongoose.model('stories', StorySchema)