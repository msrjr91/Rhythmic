const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const FollowerRouter = require('./FollowerRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/followers', FollowerRouter)
Router.use('/comments', CommentRouter)

module.exports = Router

