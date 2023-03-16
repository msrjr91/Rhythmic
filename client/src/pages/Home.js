import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
            Sign In
        </button>
      </section>
    </div>
  )
}

export default Home
