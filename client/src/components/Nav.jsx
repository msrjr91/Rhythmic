import {useNavigate} from 'react-router-dom'

export default function Nav() {
    let navigate = useNavigate()
    return (
        <div>
        <p>im nav</p>
        <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}