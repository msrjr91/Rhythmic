const { Comments } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
}
