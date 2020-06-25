const express = require('express');
const router = express.Router();

const contentController = require('../controller/contentController.js');

router.get('/allStories', contentController.allStories);  
router.get('/allPosts', contentController.allPosts);  
router.post('/newStory', contentController.createStory);
router.post('/newPost', contentController.createPost);  
//router.post('/like', contentController.likePost);

module.exports = router  