import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <section className="welcome-signin">
      <button className="signinbtn" onClick={() => navigate('/signin')}>
            Sign In
        </button>
        <div className="register">
          <button className="registerbtn" onClick={() => navigate('/register')}>What's Your Rhythm?</button>
        </div>
        </section>
      <div className="home-feed">
        <div className="feed"><h2>New Tracks</h2></div>
        <div className="feed"><h2>New Comments</h2></div>
        <div className="feed"><h2>New Artists</h2></div>
      </div>
    </div>
  )
}

export default Home
