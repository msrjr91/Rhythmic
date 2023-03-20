const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const users = require('./controllers/UserController')
const posts = require('./controllers/PostController')
const followers = require('./controllers/FollowerController')
const comments = require('./controllers/CommentController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (request, response) => {
    response.send('Server Running')
  })

app.get('/users', users.GetAllUsers)
app.get('/posts', posts.GetPosts)
app.get('/followers', followers.GetFollowers)
app.get('/comments', comments.GetComments)

app.listen(PORT, () => console.log(`Server Running On ${PORT}`))
