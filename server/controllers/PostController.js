const { Posts } = require('../models')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

// const CreatePost = async (req, res) => {
//   try {
//     const post = await Posts.create({ ...req.body })
//     res.send(post)
//   } catch (error) {
//     throw error
//   }
// }

// const UpdatePost = async (req, res) => {
//   try {
//     const post = await Posts.update(
//       { ...req.body },
//       { where: { id: req.params.post_id }, returning: true }
//     )
//     res.send(post)
//   } catch (error) {
//     throw error
//   }
// }

// const DeletePost = async (req, res) => {
//   try {
//     await Posts.destroy({ where: { id: req.params.post_id } })
//     res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetAllPosts,
  // CreatePost,
  // UpdatePost,
  // DeletePost
}
