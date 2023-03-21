import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataContext'
// import { DataProvider} from '../DataProvider'
import { useContext } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'

const Home = (props) => {

  let navigate = useNavigate()
  const [comments, getComments] = useState([])

  console.log(props.getComments)

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
          <p>
          Reprehenderit quis ipsum sit aliqua culpa anim fugiat. Non minim eu nisi enim ut laborum. Irure ad deserunt enim cupidatat irure aliquip incididunt exercitation nisi incididunt adipisicing culpa voluptate duis.
          </p>
        </div>


        <div className="feed"><h2>New Comments</h2>

        {/* {props.getComments.map((comments) => (

          <div className="comment-feed">
            <DataProvider>
        <DataContext.Consumer>
            {(context) => (
                <h1>{comments.content}</h1>
            )}
        </DataContext.Consumer>
           </DataProvider>
          </div>

        ))} */}
          
        </div>


        <div className="feed"><h2>New Artists</h2>
          <p>
        Culpa laborum enim mollit mollit nostrud anim ea cillum cillum commodo tempor. Laborum culpa excepteur id minim amet aute reprehenderit. Exercitation fugiat esse esse cupidatat ipsum occaecat consectetur est labore culpa mollit. Aute pariatur pariatur sit ex nostrud quis commodo eiusmod eiusmod culpa. Sunt sunt culpa non mollit cupidatat adipisicing qui anim qui.
          </p>
        </div>
      </div>
    </div>
  ) 
}

export default Home
