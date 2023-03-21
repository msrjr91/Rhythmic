const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetAllPosts)
Router.get('/:post_id', controller.GetSinglePost)
Router.get('/users/:user_id', controller.GetUserPosts)
Router.post('/users/:user_id', controller.CreatePost)
Router.delete('/:post_id', controller.DeletePost)

module.exports = Router

// const middleware = require('../middleware')

// Router.post(
//   '/',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CreatePost
// )
// Router.put(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdatePost
// )
// Router.delete(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeletePost
// )
