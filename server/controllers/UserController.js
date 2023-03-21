const { Users, Posts, Comments, Followers } = require('../models')
// const { Op } = require('sequelize')

const GetAllUsers = async (req,res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req,res) => {
  try {
    let user = await Users.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetAllUserFollowers = async (req, res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Users, as: 'followers', attributes: ['id', 'username']}]
    })
    res.send(data)
    } catch (error) {
      throw error;
  }
}

// const GetOneUserFollowers = async (req,res) => {
//   try {
//     let data = await Users.findByPk(req.params.user_id, {
//       // where: {
//       //   [Op.is]: req.params.user_id,
//       // },
//       include: [{
//         model: Followers,
//         as: 'followers',
//         where: {
//           [Op.is]: req.params.user_id,
//         }
//       }]
//     })
//     res.send(data)
//   } catch (error) {
//     throw error
//   }
// }

const GetAllUserFollowing = async (req, res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Users, as: 'following', attributes: ['id', 'username']}]
    })
    res.send(data)
    } catch (error) {
      throw error;
  }
}

const GetAllUserPosts = async (req,res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Posts}]
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetAllUserComments = async (req,res) => {
  try {
    let data = await Users.findAll({
      include: [{model: Comments}]
    })
    res.send(data)
  } catch (error){
    throw error
  }
}

const CreateUser = async (req,res) => {
  try {
    let userBody = {
      ...req.body
    }
    let userEntry = await Users.create(userBody)
    res.send(userEntry)
  } catch (error) {
    throw error
  } 
}

const UpdateUser = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id)
    let updatedUser = await Users.update(req.body, {
      where: {id: user_id},
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req,res) => {
  try {
    let user_id = parseInt(req.params.user_id)
    await Users.destroy({where: {id: user_id}})
    res.send({message: `Deleted user with an id of ${user_id}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetOneUser,
  GetAllUserFollowers,
  // GetOneUserFollowers,
  GetAllUserFollowing,
  GetAllUserPosts,
  GetAllUserComments,
  CreateUser,
  UpdateUser,
  DeleteUser
}
