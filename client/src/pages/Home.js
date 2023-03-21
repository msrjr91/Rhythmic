import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { DataContext, LoginContext } from '../DataContext'
import axios from 'axios'

const Home = () => {
  let navigate = useNavigate()
  // const [comments, setComments] = useState([])
  // setComments(DataContext.comments)
  // useEffect(()=>{
    
  // },[])  


  return (
    <div className="home-container">
      <section className="welcome-signin">
      <button className="signinbtn" onClick={() => navigate('/signin')}>
            Sign In
        </button>
        <div className="register">
          <button className="registerbtn" onClick={() => navigate('/register')}>What's Your Rhythm?</button>
        </div>
        <div>
          <button className="profilebtn" onClick={() => navigate('/profile')}>Profile</button>
        </div>
        </section>
      <div className="home-feed">
        <div className="feed"><h2>New Tracks</h2>
          
        </div>
        <div className="feed"><h2>New Comments</h2>
        {/* <DataContext.Consumer>
          {
            comments.map((comment)=>(
              <p>{comment.content}</p>
            ))
          }
        </DataContext.Consumer> */}
        </div>
        <div className="feed"><h2>New Artists</h2>
          
        </div>
      </div>
    </div>
  ) 
}

export default Home
