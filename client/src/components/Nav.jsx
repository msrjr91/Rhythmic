import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav() {
    let navigate = useNavigate()
    return (
        <div className="nav">

        <button onClick={()=>navigate('/')}>Home</button>

        <img className="logo" src="/images/rhythmic.png" alt="" />
 
        <SearchBar />
        </div>
        
    )
}