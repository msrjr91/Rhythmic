import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

import SearchBar from '../pages/SearchBar'

export default function Nav() {
  let navigate = useNavigate()
  const {authenticated, toggleAuthenticated} = useContext(DataContext)

  return (
    <div className="nav">
      <div className='nav-left'>
        <SearchBar />
      </div>
      <div className="nav-center">
        <img className="logo" src="/rhythmic.png"/>
        <div className="center-bottom">
        {
          (!authenticated) ? <button className="registerbtn" onClick={() => navigate('/register')}> What's Your Rhythm? </button> : null
        }
        </div>
      </div>
      <div className='nav-right'>
        <Link to='/' className='nav-right-buttons'> Home </Link>
        <Link to='/profile'className='nav-right-buttons'> Profile </Link>
        {
          (!authenticated) ? <Link to='/signin' className='nav-right-buttons'> Sign in </Link> : <Link to='/signin' className='nav-right-buttons' onClick={() => toggleAuthenticated(false)}> Sign out </Link>
        }
      </div>
    </div>
  )
}