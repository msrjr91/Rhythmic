const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/followers', controller.GetAllUserFollowers)
Router.get('/following', controller.GetAllUserFollowing)
Router.get('/posts', controller.GetAllUserPosts)
Router.get('/comments', controller.GetAllUserComments)
Router.get('/:user_id', controller.GetOneUser)
Router.post('/', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
