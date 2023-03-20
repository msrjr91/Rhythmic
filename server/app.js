const express = require('express')
const cors = require('cors')
<<<<<<< HEAD
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')
=======
const AppRouter = require('./routes/AppRouter')

// const logger = require('morgan')
// const AuthRouter = require('./routes/AuthRouter')
// const PostRouter = require('./routes/PostRouter')
// const TrackRouter = require('./routes/TrackRouter')
// const CommentRouter = require('./routes/CommentRouter')
// const ArtistRouter = require('./routes/ArtistRouter')
>>>>>>> 2b74e921df543110d2a49448cc0e6178d49d57f1

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.use('/auth', AuthRouter)
// app.use('/posts', PostRouter)
app.use('/', (req, res) => res.json({ message: 'Server Works!!!' }))
app.use('/api', AppRouter)


app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
