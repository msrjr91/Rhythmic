const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.GetComments)
Router.get('/user/:user_id', controller.GetCommentsByUser)
Router.get('/post/:post_id', controller.GetCommentsByPost)
Router.post('/post/:post_id', 
    middleware.stripToken, 
    middleware.verifyToken,
    controller.CreateComment
)
Router.delete('/:comment_id', 
    middleware.stripToken, 
    middleware.verifyToken,
    controller.DeleteComment
)

module.exports = Router