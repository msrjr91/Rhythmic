const { Comments } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } 
  catch (error) {
    throw error
  }
}

const GetCommentsByUser = async (req,res) => {
  try {
    const comments = await Comments.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(comments)
  } 
  catch (error) {
    throw error
  }
}

const GetCommentsByPost = async (req,res) => {
  try {
    const comments = await Comments.findAll({
      where: { postId: req.params.post_id }
    })
    res.send(comments) 
  } 
  catch (error) {
    throw error
  }
}

// NEED TO HARDCODE IN USERID ON INSOMNIA FOR NOW UNTIL WE CAN LINK TO FRONTEND LOGIN USER ACCOUNT
const CreateComment = async (req,res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let commentBody = { postId, ...req.body }
    let comment = await Comments.create(commentBody)
    res.send(comment)
  } 
  catch (error) {
    throw error
  }
}

const DeleteComment = async (req,res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comments.destroy({ 
      where: { id: commentId }
    })
    res.send({ message: `Deleted comment id ${commentId}` })
  } 
  catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  GetCommentsByUser,
  GetCommentsByPost,
  CreateComment,
  DeleteComment
}
