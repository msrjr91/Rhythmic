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
      const followers = await Followers.findByPk(req.params.userId)
      res.send(followers);
    } catch (error) {
      throw error;
  }
}

const GetUserFollowing = async (req, res) => {
  try {
      const following = await Park.findByPk(req.params.parkId, {
        include: [{ model: Region }],
      });
      res.send(following);
    } catch (error) {
      throw error;
  }
}


module.exports = {
  GetAllUsers,
  GetUserFollowers
}
