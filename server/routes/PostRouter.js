const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllPosts)
Router.get('/:post_id', controller.GetSinglePost)
Router.get('/users/:user_id', controller.GetUserPosts)
Router.post('/users/:user_id', 
    middleware.stripToken, 
    middleware.verifyToken,
    controller.CreatePost
)
Router.delete('/:post_id', 
    middleware.stripToken, 
    middleware.verifyToken,
    controller.DeletePost
)

module.exports = Router