const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComments)
Router.get('/user/:user_id', controller.GetCommentsByUser)
Router.get('/post/:post_id', controller.GetCommentsByPost)
Router.post('/post/:post_id', controller.CreateComment)
Router.delete('/:comment_id', controller.DeleteComment)

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
