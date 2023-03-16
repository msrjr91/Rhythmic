import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <section className="welcome-signin">
      <button onClick={() => navigate('/signin')}>
            Sign In
        </button>
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
