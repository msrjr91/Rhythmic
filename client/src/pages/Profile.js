import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../DataContext'
import axios from 'axios'

export default function Profile(){
    const {user} = useContext(DataContext)
    const {users} = useContext(DataContext)
    const [followers, setFollowers] = useState(null)
    const [profileUser, setProfileUser] = useState(null)
    const [comments, setComments] = useState(null)
    const [posts, setPosts] = useState(null)
    const URL = `http://localhost:3001/`

    const getFollowers = async () => {
        const response = await axios.get(`${URL}followers/user/${user.user.id}`)
        console.log(response.data)
    }
    const getComments = async () => {
        const response = await axios.get(`${URL}comments/user/${user.user.id}`)
        console.log(Array.from(response.data))
        setComments(Array.from(response.data))
    }

    const getPosts = async () => {
        const response = await axios.get(`${URL}posts/users/${user.user.id}`)
        console.log(Array.from(response.data))
        setPosts(Array.from(response.data))
    }
    const getUser = async () => {
        const response = await axios.get(`${URL}users/${user.user.id}`)
        console.log(response.data)
        setProfileUser(response.data)
        console.log(profileUser)
    }

    useEffect(()=>{
        console.log(user)
        getUser()
        getPosts()
        getComments()
        getFollowers()
    },[user])
    
    return user && comments && posts ? (
        <div>
            {console.log(user.user)}
        <img src={'https://i.pravatar.cc/100'}/>
        <section className="profile-header"> 
                <h2 style={{color: 'white', textShadow: '0 0 10px purple'}}>
                  {profileUser.username} / {profileUser.name}
                </h2>
            <figure style={{marginLeft: '70vw'}}>
                <figcaption style={{color: 'white', textShadow: '0 0 10px purple'}}>
                    Currently listening to..
                </figcaption>
                <audio controls src='null'/>
            </figure> 
        </section>

        <section className="profile-body">
            <div className='profilefeed1' style={{border: '2px solid white'}}>Following/Liked Artists/Fans</div>
                {
                    (posts)?
                    <div className='profilefeed2' style={{border: '2px solid white'}}>Albums/Songs/Playlists
                    {
                    posts.map((post)=>{
                        console.log(post.content)
                        return (
                        <div>
                            <p>{post.content}</p>
                        </div>
                        )
                    })
                    }
                    </div>:null
                }
            
            {
                (comments)?
                <div className='profilefeed3' style={{border: '2px solid white'}}>
                {
                comments.map((comment)=>{
                    console.log(comment.content)
                    return (<p>{comment.content}</p>)
                    })
                }
                </div>:null
            }
            
        </section>
        </div>
    ) : <div>Please Log In</div>
}

