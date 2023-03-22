import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataContext'

export default function Nav() {
    const {authenticated, toggleAuthenticated} = useContext(DataContext)
    let navigate = useNavigate()

    const handleLogout = () => {
        toggleAuthenticated(false)
    }
    
    return (
        <div className="nav">
            <div className='nav-left'>
                <SearchBar />
            </div>
            <div className="nav-center">
                <img className="logo" src="/images/rhythmic.png" alt="" />
                <div className="center-bottom">
                    {
                        (!authenticated)?<button className="registerbtn" onClick={() => navigate('/register')}>What's Your Rhythm?</button>:null
                    }
                </div>
            </div>
            <div className='nav-right'>
                <Link to='/' className='nav-right-buttons'> Home </Link>
                <Link to='/profile'className='nav-right-buttons'> Profile </Link>
                {
                    (!authenticated)?<Link to='/signin'className='nav-right-buttons'> Sign in </Link>:<Link to='/signin' className='nav-right-buttons' onClick={handleLogout}> Sign out </Link>
                }
                
            </div>
        </div>
    )
}
