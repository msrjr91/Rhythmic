const { Posts } = require('../models')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll()
    res.send(posts)
  } 
  catch (error) {
    throw error
  }
}

const GetSinglePost = async (req,res) => {
  try {
    let post = await Posts.findByPk(req.params.post_id)
    res.send(post)
  } 
  catch (error) {
    throw error
  }
}

const GetUserPosts = async (req,res) => {
  try {
    const posts = await Posts.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(posts)
  } 
  catch (error) {
    throw error
  }
}

// CreatePost - Insomnia format
  // {
  //   "content": "",
  //   "trackId": ""
  // }
// first login to get token
const CreatePost = async (req,res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let postBody = {
      userId,
      ...req.body
    }
    let post = await Posts.create(postBody)
    res.send(post)
  } 
  catch (error) {
    throw error
  }
} 

// Not allowing post edits for the sake of being evil

const DeletePost = async (req,res) => {
  try {
    let post_id = parseInt(req.params.post_id)
    await Posts.destroy({ 
      where: { id: post_id }
    })
    res.send({ message: `Deleted post with id of ${post_id}` })
  } 
  catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  GetUserPosts,
  GetSinglePost,
  CreatePost,
  DeletePost,
}
