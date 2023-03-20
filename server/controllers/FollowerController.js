const { Followers } = require('../models')

const GetFollowers = async (req, res) => {
  try {
    const followers = await Followers.findAll()
    res.send(followers)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFollowers,
}
