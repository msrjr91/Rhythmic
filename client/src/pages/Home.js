import React, { useState, useContext } from 'react'
import { DataContext } from '../DataContext'
// import { DataProvider} from '../DataProvider'
import tracks from '../assets/songs'

export default function Home(props) {
  const { comments, users, posts } = useContext(DataContext)
  const [ formValues, setFormValues ] = useState({ content: ''})

  // Typing Comments
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const posterAvatar = (post) => {
    const userAvatar = users.find(user => user.id === post.userId)
    if (userAvatar) {
      return userAvatar.avatar
    } 
    else {
      return null
    }
  }

  const posterName = (post) => {
    const userName = users.find(user => user.id === post.userId)
    if (userName) {
      return userName.username
    } 
    else {
      return null
    }
  }

  const commentUser = (comment) => {
    const userName = users.find(user => user.id === comment.userId)
    if (userName) {
      return userName.username
    } 
    else {
      return null
    }
  }

  const commentUseravatar = (comment) => {
    const userAvatar = users.find(user => user.id === comment.userId)
    if (userAvatar) {
      return userAvatar.avatar
    } 
    else {
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

  // Test Comments
  // console.log("COMMENTS",comments)

  return (
    <div className='Home'>
      <div className='sectionctn'>
        <div className='titles'>
          <h1> Recently Posted Tracks </h1>
        </div>
        <div className="info-ctn">
          <div className="tracks-ctn">
          {
            posts?.map((post)=>{
              return(
                <div className='track'>
                  <div className='track-artist'>
                    <div className='track-img-ctn'>
                      <img src={posterAvatar(post)} className='track-poster-img'/>
                      <h3 className='p-artist'> {posterName(post)} </h3>
                    </div>
                    <div className='track-content'>
                      <p> {post['content']} </p>
                      <audio controls src={song(post)} className='music-player'/>
                    </div>
                  </div>
                    <form className='comment-form'>
                      <input 
                        name='content'
                        type='content'
                        placeholder="What's your opinion?"
                        onChange={handleChange}
                        value={formValues.content}
                        required/>
                      <button type='submit' disabled={!formValues.content}> Comment </button>
                    </form>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className='sectionctn'>
        <div className="titles">
          <h1> Fresh Opinions </h1>
        </div>
        <div className="info-ctn">
          <div className='comments-ctn'>
          {
            comments?.map((comment,index) => {
              return(
                <div className="comment">
                  <div className='comment-user'>
                    <img src={commentUseravatar(comment)} className='comment-poster-img'/>
                    <h3 className='c-artist'> {commentUser(comment)} </h3>
                  </div>
                  <div className='comment-content'>
                    <p> {comment['content']} </p>
                    <form className='comment-form'>
                      <input 
                        name='content'
                        type='content'
                        placeholder="What's your opinion?"
                        onChange={handleChange}
                        value={formValues.content}
                        required/>
                      <button type='submit' disabled={!formValues.content}> Comment </button>
                    </form>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className='sectionctn'>
        <div className="titles">
          <h1> Up and Coming Artists </h1>
        </div>
        <div className="info-ctn">
          <div className="artists-ctn">
          {
            users?.map((user, index)=>{
              if(user.isArtist === true){
                return (
                  <h2>
                    <img src={user['avatar']} className='artist-poster-img'/>
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
  ) 
}