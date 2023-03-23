import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../DataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
    let navigate = useNavigate()
    const {user} = useContext(DataContext)
    const {users} = useContext(DataContext)
    const [followers, setFollowers] = useState(null)
    const [userFollowers, setUserFollowers] = useState(null)
    const [avatars, setAvatars] = useState([])
    const [allUsers, setAllUsers] = useState(null)
    // 
    const [followerInfo, setFollowerInfo] = useState([])

    const [profileUser, setProfileUser] = useState(null)
    const [comments, setComments] = useState(null)
    const [posts, setPosts] = useState(null)
    const URL = `http://localhost:3001/`

    const getAllUsers = async () => {
        const response = await axios.get(`${URL}users`)
        setAllUsers(Array.from(response.data))
        console.log(allUsers)
    }

    const getFollowers = async () => {
        const response = await axios.get(`${URL}followers/user/${user.user.id}`)
        console.log(Array.from(response.data))
        setFollowers(Array.from(response.data))
    }

    const followerAvatar = (follower) => {
        const userAvatar = users.find(user => user.id === follower.followerId)
        if(userAvatar){
          return userAvatar.avatar
        } else {
          return null
        }
      }
    
    const followerName = (follower) => {
        const userName = users.find(user => user.id === follower.followerId)
        if(userName){
          return userName.username
        } else {
          return null
        }
      }

      const posterAvatar = (post) => {
        const userAvatar = users.find(user => user.id === post.userId)
        if(userAvatar){
          return userAvatar.avatar
        } else {
          return null
        }
      }
    
      const posterName = (post) => {
        const userName = users.find(user => user.id === post.userId)
        if(userName){
          return userName.username
        } else {
          return null
        }
      }
    
      const commentUser = (comment) => {
        const userName = users.find(user => user.id === comment.userId)
        if(userName){
          return userName.username
        } else {
          return null
        }
      }
    
      const commentUseravatar = (comment) => {
        const userAvatar = users.find(user => user.id === comment.userId)
        if(userAvatar){
          return userAvatar.avatar
        } else {
          return null
        }
      }
    // const getFollowerInfo = async () => {
    //     console.log('working')
    //     const requests = await followers?.map((follower) => axios.get(URL + 'users/' + follower.followerId))
    //     console.log(requests)
    //     const requestResp = await axios.all(requests)?.then((responses) => {
    //         console.log(responses)
    //         responses.forEach((resp) => {
    //             console.log(resp.data)
    //             setFollowerInfo(followerInfo => [...followerInfo, resp.data])
    //         })
    //     })
    //     console.log(requestResp)
    // }
    // console.log(followerInfo)

    // const uniqueArr = followerInfo.filter((item, index) => {
    //     return index === followerInfo.findIndex(obj => {
    //       return JSON.stringify(obj) === JSON.stringify(item);
    //     });
    //   });

    // const cleanArray = followerInfo.reduce((unique, o) => {
    //     if(!unique.some(obj => obj.id === o.id)) {
    //       unique.push(o);
    //     } 
    //     return unique;
    // },[]);

    const getComments = async () => {
        const response = await axios.get(`${URL}comments/user/${user.user.id}`)
        setComments(Array.from(response.data))
    }

    const getPosts = async () => {
        const response = await axios.get(`${URL}posts/users/${user.user.id}`)
        setPosts(Array.from(response.data))
    }
    const getUser = async () => {
        const response = await axios.get(`${URL}users/${user.user.id}`)
        setProfileUser(response.data)
    }

    useEffect(()=>{
        getAllUsers()
        getUser()
        getPosts()
        getComments()
        getFollowers()
    },[user])
    
    return user && comments && posts && allUsers ? (
        <div className="profile">
        <img src={'https://i.pravatar.cc/100'}/>
        <section className="profile-header"> 
                <h2 style={{color: 'white'}}>
                  {profileUser.username} / {profileUser.name}
                </h2>
                <button onClick={() => navigate('/updateprofile')}>Update Profile</button>
            <figure style={{marginLeft: '70vw'}}>
                <figcaption style={{color: 'white'}}>
                    Currently listening to..
                </figcaption>
                <audio controls src='null'/>
            </figure> 
        </section>

        <section className="profile-body">
          <div className="profile-body-inner">
            {
                (allUsers && followers)?
                <div className='profilefeed1' style={{border: '2px solid white'}}>Following/Liked Artists/Fans
                {
                    followers.map((follower)=>{
                        return (
                        <div key={follower.id}>
                            <img src={followerAvatar(follower)}/>
                            <h6>{followerName(follower)}</h6>
                        </div>
                    )
                    })
                }
                </div>:null
            }
                {
                    (posts)?
                    <div className='profilefeed2' style={{border: '2px solid white'}}>Albums/Songs/Playlists
                    {
                    posts.map((post)=>{
                        // console.log(post.content)
                        return (
                        <div key={post.id}>
                            <img src={posterAvatar(post)}/>
                            <h6>{posterName(post)}</h6>
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
                    return (
                    <div key={comment.id}>
                        <img src={commentUseravatar(comment)}/>
                        <h6>{commentUser(comment)}</h6>
                        <p>{comment.content}</p>
                    </div>
                    )
                    })
                }
                </div>:null
            }
            
            </div>
        </section>
        </div>
    ) : <div>Please Log In</div>
}

