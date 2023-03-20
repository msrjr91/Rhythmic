const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/', controller.GetAllPosts)

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