const Router = require('express').Router()
const controller = require('../controllers/FollowerController')
const middleware = require('../middleware')

Router.get('/', controller.GetFollowers)
//RETURNS ALL OF USERID's FOLLOWERS: [1,2,...n] follows userId
Router.get('/user/:user_id', controller.GetFollowersByUser)
//RETURNS ALL USERS THAT USERID FOLLOWS:  userId follows [1,2,...n]
Router.get('/follower/:follower_id', controller.GetFollowersByFollower)
Router.post('/user/:user_id', 
    middleware.stripToken, 
    middleware.verifyToken,
    controller.FollowUser
)

module.exports = Router