const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComments)

module.exports = Router

// const middleware = require('../middleware')

// router.post(
//   '/',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CreatePost
// )
// router.put(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdatePost
// )
// router.delete(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeletePost
// )
