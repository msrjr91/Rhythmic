const { Followers } = require('../models')

const GetFollowers = async (req, res) => {
  try {
    const followers = await Followers.findAll()
    res.send(followers)
  } 
  catch (error) {
    throw error
  }
}

// RETURNS ALL OF USERID's FOLLOWERS: [1,2,...n] follows userId
const GetFollowersByUser = async (req, res) => {
  try {
    const followers = await Followers.findAll({
      where: { userId: req.params.user_id }
    })
    res.send(followers)
  } 
  catch (error) {
    throw error
  }
}

// RETURNS ALL USERS THAT USERID FOLLOWS:  userId follows [1,2,...n]
const GetFollowersByFollower = async (req,res) => {
  try {
    const followers = await Followers.findAll({
      where: { followerId: req.params.follower_id }
    })
    res.send(followers)
  } 
  catch (error) {
    throw error
  }
}

// "I (FOLLOWER ID) WANT TO FOLLOW SOME USER (USER ID)"
const FollowUser = async (req,res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let followBody = { userId, ...req.body }
    let follow = await Followers.create(followBody)
    res.send(follow)
  } 
  catch (error) {
    throw error
  }
}

// // REMOVE FOLLOW
// const UnfollowUser = async (req,res) => {
//   try {
//     // user you want to unfollow
//     let userId = parseInt(req.params.user_id)
//     await Followers.destroy({ where: {userId: }})
//   } 
//   catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetFollowers,
  GetFollowersByUser,
  GetFollowersByFollower,
  FollowUser
}