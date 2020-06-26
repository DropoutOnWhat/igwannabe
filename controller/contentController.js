const storySchema = require('../model/sotryModel');
const postSchema = require('../model/postModel');
const { render } = require('../app');

const allStories = (req, res) => {
    console.log('Looking for stories...')
    storySchema.find()
        .then(response => {
            if(response.length > 0) {
                res.status(200).json({
                    message: 'success',
                    data: response
                })  
            } else { 
                res.status(200).json({
                    message: 'empty response',
                    data: ''
                })
            }
        })
        .catch(err => {
            res.json({
                status: 500,
                message: err.message
            })
        })
}

const createStory = (req, res) => {  
    console.log('Creating new story')
    const story = new storySchema({
        author: req.body.author, 
        imgLink: req.body.imgLink  
    });
    story.save().then(() => {
        res.status(200).json({ message: 'Story Created' }); 
    }).catch((err) => {
        res.status(500).json({ message: err });
    });
}

const allPosts = (req, res) => {
    console.log('Looking for posts...')
    postSchema.find()   
        .then(response => {  
            if(response.length > 0) {  
                res.status(200).json({  
                    message: 'success',  
                    data: response 
                })  
            } else { 
                res.status(200).json({ 
                    message: 'empty response',
                    data: ''
                })
            }
        })
        .catch(err => { 
            res.json({
                status: 500,
                message: err.message
            })
        })
}

const createPost = (req, res) => { 
    console.log("Creating new Post")  
    const post = new postSchema({   
        author: req.body.author, 
        imgLink: req.body.imgLink,  
        date: Date.now(),
        description: req.body.description,
        likes: 0  
    }); 
    post.save().then(() => { 
        res.status(200).json({ message: 'Post Created' });
    }).catch((err) => {
        res.status(500).json({ message: err }); 
    });
}


module.exports = {allStories, createStory, allPosts, createPost} 