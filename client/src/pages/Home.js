import { useNavigate } from 'react-router-dom'
import { DataContext, LoginContext } from '../DataContext'
import React from 'react'
// import { DataProvider} from '../DataProvider'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'


const Home = (props) => {
  let navigate = useNavigate()
  const { comments, getComments } = useContext(DataContext)
  const [ avatars, setAvatars ] = useState(null)

  const getCommentAvatars = () => {
    comments.forEach((comment) => {
      //axios call for each comment's userId
      //setAvatars based on comment userId's avatar
    })
  }

  console.log("COMMENTS",comments)

  return (
    <div className="home-container">

      <div className="home-feed">

        <div className="feed">
          <h2>New Tracks</h2>
        </div>

        <div className="feed">
          <h2>New Comments</h2>
          <div className='comments-container'>
            {
              comments?.map((comment,index) => {
                return(
                  <div>
                    //avatar
                    <p>{comment['content']}</p>
                  </div>

                  
                )
              })
            }
          </div>

        </div>

        <div className="feed">
          <h2>New Artists</h2>
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
