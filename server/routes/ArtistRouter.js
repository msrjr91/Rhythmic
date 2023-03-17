const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/', controller.GetPosts)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)

module.exports = router
