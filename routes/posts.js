const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req,res)=>{
    const posts = await Post.find()
    res.render('index',{posts});
    // res.redirect('/posts',{posts});
});

router.get('/create', async(req,res)=>{
    return res.render('create');
});

router.post('/create', async(req,res)=>{
    const {title, description} = req.body;
    // console.log(req.body);
    let post = new Post({title,description});
   try {
    post = await post.save();
   } catch {
   return res.status(400).send(err) 
   }
   return res.redirect('/');
});

router.get('/delete/:id', async(req,res)=>{
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    // console.log(req.post);
    if (!post) return res.status(404).send('The Post not found');
    return res.redirect('/');
});

router.get('/edit/:id', async(req,res)=>{
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.render('edit',{post});
});

router.post('/edit/:id', async(req,res)=>{
    const { id } = req.params;
    const {title, description} = req.body;
    const post = await Post.findByIdAndUpdate(id, {title, description}, {new:true})
    // console.log(req.post);
    return res.redirect('/');
});

module.exports = router;