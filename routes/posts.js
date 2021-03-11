const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Post = require("../models/post");


// Get Back All The Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({message:err});
  }
});


// specific Id
router.get('/:postId', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      res.json(post);
    } catch (err) {
      res.json({message:err});
    }
  });
  

// DELEAT  POST
router.delete('/:postId', async (req, res) => {
    try {
      const removedPost = await Post.remove({_id:req.params.postId});
      res.json(removedPost);
    } catch (err) {
      res.json({message:err});
    }
  });
  

  // UPDATED  POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:{email:req.body.email,password:req.body.password,fristName:req.body.fristName,lastName:req.body.lastName},});
    res.json(updatedPost);
  } catch (err) {
    res.json({message:err});
  }
});


// submit the posts
router.post("/", async (req, res) => {
  const post = new Post({
    fristName: req.body.fristName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

 



module.exports = router;
