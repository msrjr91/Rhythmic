import { useNavigate } from 'react-router-dom'
import { DataContext, LoginContext } from '../DataContext'
import React from 'react'
// import { DataProvider} from '../DataProvider'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ScrollView } from 'react'



const Home = (props) => {
  let navigate = useNavigate()
  const { comments, getComments } = useContext(DataContext)
  const { users, getUsers } = useContext(DataContext)
  const { posts, getPosts } = useContext(DataContext)
  const [formValues, setFormValues] = useState({ content: ''})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // const [ avatars, setAvatars ] = useState([])
  //
  // const getCommentAvatars = () => {
  //   for(let i = 0; i < comments.length; i++){
  //     setAvatars(avatars=>[...avatars, "https://i.pravatar.cc/100"])

  //     //axios call for each comment's userId
  //     //setAvatars based on comment userId's avatar
  // }}
  // getCommentAvatars()

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



  console.log("COMMENTS",comments)


  return (
    <div className="home-container">
      <div className="titles">
      <h1>Recently Posted Tracks</h1>
      <div className="home-feed">

        <div className="feed">
          <div className="tracks-container">
            {
              posts?.map((post)=>{
                return(
                  <div className='post-div'>
                  <img src={posterAvatar(post)}/>
                  <h3>{posterName(post)}</h3>
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

            <div className="titles">
            <h1>Fresh Opinions</h1>
        <div className="feed">
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
            {/* {
              for(let i = 0; i < comments.length; i++)(
                let avatar = "https://i.pravatar.cc/100"
                return (
                  <div className="comment-div">
                    <img src={avatar}/>
                    <p>{comment[i]['content']}</p>
                  </div>
                ) 
  )
            } */}
            {/* {
              comments?.map((comment,index) => {
                // let avatar = "https://i.pravatar.cc/100"
                return(
                  <div className="comment-div">
                    <img src={comment['avatar']}/>
                    <p>{comment['content']}</p>
                  </div>

                  
                )
              })
            } */}
          </div>

        </div>
        </div>
            <div className="titles">
            <h1>Up and Coming Artists</h1>
        <div className="feed">
          <div className="artists-container">
            {
              users?.map((user, index)=>{
                if(user.isArtist === true){
                  return (
                  <h2>
                    <img src={user['avatar']}/>
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
  ) 
}

export default Home




        // {/* {props.getComments.map((comments) => (

        //   <div className="comment-feed">
        //     <DataProvider>
        // <DataContext.Consumer>
        //     {(context) => (
        //         <h1>{comments.content}</h1>
        //     )}
        // </DataContext.Consumer>
        //    </DataProvider>
        //   </div>

        // ))} */}
          
        // {/* <DataContext.Consumer>
        //   {
        //     comments.map((comment)=>(
        //       <p>{comment.content}</p>
        //     ))
        //   }
        // </DataContext.Consumer> */}



  // // <section className="welcome-signin">
  // {/* <button className="signinbtn" onClick={() => navigate('/signin')}>
  //       Sign In
  //   </button> */}
  //   {/* <div className="register">
  //     <button className="registerbtn" onClick={() => navigate('/register')}>What's Your Rhythm?</button>
  //   </div> */}
  //   {/* <div>
  //     <button className="profilebtn" onClick={() => navigate('/profile')}>Profile</button>
  //   </div> */}
  //   {/* </section> */}
