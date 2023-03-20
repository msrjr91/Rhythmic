const Router = require('express').Router()
const controller = require('../controllers/FollowerController')

Router.get('/', controller.GetFollowers)

module.exports = Router
