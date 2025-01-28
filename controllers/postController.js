const Post = require('../models/postModel');


// get all posts 

const getAllPosts = async (req, res) => {

    try{

        const posts = await Post.find();
        res.status(200).json(posts);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}


const getPostById = async (req, res) => {

    try{

        const post = await Post.findById(req.params.id);

        if(!post) return res.status(404).json({message: "post not found"});
        

        res.status(201).json(post);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}



const storePost = async (req, res) => {

    try{

        const { title, content, tags} = req.body;

        const post = new Post({title, content, tags});
        await post.save();
        res.status(201).json(post);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}





// Update a post
const updatePost = async (req, res) => {
    try {
      const { title, content, tags} = req.body;
      const post = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content, tags},
        { new: true, runValidators: true }
      );
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

  // Delete a Post
  const deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);

      if (!post) return res.status(404).json({ message: 'Post not found' });
      

      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {getAllPosts,storePost, getPostById, deletePost,updatePost };