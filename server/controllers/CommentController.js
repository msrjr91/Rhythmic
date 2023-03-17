const { Comments } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComments = async (req, res) => {
  try {
    const comments = await Comments.create({ ...req.body })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const UpdateComments = async (req, res) => {
  try {
    const comments = await Comments.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const DeleteComments = async (req, res) => {
  try {
    await Comments.destroy({ where: { id: req.params.comments_id } })
    res.send({ msg: 'Comments Deleted', payload: req.params.comments_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComments,
  UpdateComments,
  DeleteComments
}
