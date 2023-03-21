import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav() {
    let navigate = useNavigate()
    return (
        <div className="nav">
            <SearchBar />
            <div className="nav-center">
                <img className="logo" src="/images/rhythmic.png" alt="" />
                <div className="center-bottom">
                    <button onClick={()=>navigate('/')}>Home</button>
                    <button onClick={()=>navigate('/profile')}>Profile</button>
                </div>
            </div>
            <button onClick={()=>navigate('/signin')}>Sign in</button>
        </div>
    )
}
