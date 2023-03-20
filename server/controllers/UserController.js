const { Users, Followers } = require('../models')

const GetAllUsers = async(req,res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserFollowers = async (req, res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Users, as: 'followers', attributes: ['id', 'username']}]
    })
    res.send(data)
    } catch (error) {
      throw error;
  }
}

const GetUserFollowing = async (req, res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Users, as: 'following', attributes: ['id', 'username']}]
    })
    res.send(data)
    } catch (error) {
      throw error;
  }
}


module.exports = {
  GetAllUsers,
  GetUserFollowers,
  GetUserFollowing
}
