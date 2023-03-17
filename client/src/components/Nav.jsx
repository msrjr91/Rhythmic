import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav() {
    let navigate = useNavigate()
    return (
        <div>
        <p>im nav</p>
        <button onClick={()=>navigate('/')}>Home</button>
        <SearchBar />
        </div>
        
    )
}