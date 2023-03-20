const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/followers', controller.GetUserFollowers)
Router.get('/following', controller.GetUserFollowing)
module.exports = Router
