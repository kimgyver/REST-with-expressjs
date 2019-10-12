const express = require('express');
const router = express.Router();
const Post = require('../models/post');


// CREATES A POST
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

// GET ALL THE POSTS
router.get('/', (req, res) => {
    Post.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});


// GET SPECIFIC POST
router.get('/:postID', (req, res) => {
    Post.findById(req.params.postID)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
})

// DELETE POST
router.delete('/:postID', (req, res) => {
    Post.remove({ _id: req.params.postID })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message:err});
        });
});

// UPDATE POST
router.put('/:postID', (req, res) => {
    Post.updateOne(
            { _id: req.params.postID},
            { $set: {title: req.body.title }}
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

module.exports = router;