import { useNavigate } from 'react-router-dom'
import { DataContext, LoginContext } from '../DataContext'
import React from 'react'
// import { DataProvider} from '../DataProvider'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ScrollView } from 'react'
import tracks from '../assets/songs'


const Home = (props) => {
  let navigate = useNavigate()
  const { comments, getComments } = useContext(DataContext)
  const { users, getUsers } = useContext(DataContext)
  const { posts, getPosts } = useContext(DataContext)
  const [formValues, setFormValues] = useState({ content: ''})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const posterAvatar = (post) => {
    const userAvatar = users.find(user => user.id === post.userId)
    if(userAvatar){
      return userAvatar.avatar
    } else {
      return null
    }
  }

  const posterName = (post) => {
    const userName = users.find(user => user.id === post.userId)
    if(userName){
      return userName.username
    } else {
      return null
    }
  }

  const commentUser = (comment) => {
    const userName = users.find(user => user.id === comment.userId)
    if(userName){
      return userName.username
    } else {
      return null
    }
  }

  const commentUseravatar = (comment) => {
    const userAvatar = users.find(user => user.id === comment.userId)
    if(userAvatar){
      return userAvatar.avatar
    } else {
      return null
    }
  }
  const song = (post) => {
    const postSong = tracks.find(track => track.postId === post.id)
    if(postSong){
        return postSong.song
    } else {
        return null
    }
}

  console.log("COMMENTS",comments)

  return (
    <div className="home-container">
        <div className="home-feed">
          <div className='sectionctn'>
        <div className="titles">
        <h1>Recently Posted Tracks</h1>
      </div>
          <div className="feed-outer">
          <div className="feed-inner">
            <div className="tracks-container">
            {
              posts?.map((post)=>{
                return(
                  <div className='post-div'>
                  <img src={posterAvatar(post)}/>
                  <h3>{posterName(post)}</h3>
                  <audio controls src={song(post)}/>
                  <p>{post['content']}</p>

                  <form className='comment-form'>
                  <input 
                    name="content"
                    type="content"
                    placeholder="What's your opinion?"
                    onChange={handleChange}
                    value={formValues.content}
                    required
                  />
                  <button type='submit' disabled={!formValues.content}>
                    Comment
                  </button>
                  </form>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
      </div>



      <div className='sectionctn'>
      <div className="titles">
        <h1>Fresh Opinions</h1>
      </div>
      <div className="feed-outer">
        <div className="feed-inner">
        <div className='comments-container'>
        {
          comments?.map((comment,index) => {
            return(
              <div className="comment-div">
                
                  <img src={commentUseravatar(comment)}/>
                  <h3>{commentUser(comment)}</h3>
                  <p> {comment['content']} </p>

                
                <form className='comment-form'>
                <input 
                  name="content"
                  type="content"
                  placeholder="What's your opinion?"
                  onChange={handleChange}
                  value={formValues.content}
                  required
                />
                <button type='submit' disabled={!formValues.content}>
                  Comment
                </button>
                </form>
              </div>
            )
          })
        }
      </div>
      </div>
      </div>
      </div>





      <div className='sectionctn'>

      <div className="titles">
        <h1>Up and Coming Artists</h1>
      </div>
      <div className="feed-outer">
        <div className="feed-inner">
        <div className="artists-container">
          {
            users?.map((user, index)=>{
              if(user.isArtist === true){
                return (
                <h2>
                  <img style={{width: '7vw'}} src={user['avatar']}/>
                  {user.name}
                </h2>
                )
              }
            })
          }
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  ) 
}

export default Home

