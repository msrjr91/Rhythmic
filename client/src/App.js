import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import { Buffer } from 'buffer'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Feed from './pages/Feed'
import Home from './pages/Home'
import { CheckSession } from './services/auth'
import './styles/App.css'
import { DataContext } from './DataContext'
import { RegisterUser } from './services/auth'

import Profile from './pages/Profile'

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const CLIENT_ID = "f547f29def344e27ab84bd34f57e77de"
const CLIENT_SECRET = "d019c8515e95467fafda7e13566c058c"
const auth_token = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`, 'utf-8').toString('base64')

const App = () => {
  const [ authenticated, toggleAuthenticated ] = useState(false)
  const [ user, setUser ] = useState({})
  const [ accessToken, setAccessToken ] = useState("")
  const [ songQueue, setSongQueue ] = useState([])

  const [users, setUsers] = useState(null)
  const [comments, setComments] = useState(null)
  const [posts, setPosts] = useState(null)
  const [followers, setFollowers] = useState(null)

  const BASE_URL = "http://localhost:3001"

  useEffect(()=>{
    const getUsers = async () => {
        const response = await axios.get(`${BASE_URL}/users`)
        console.log(response.data)
        setUsers(response.data)
    }
    getUsers()
},[])

  useEffect(()=>{
    const getComments = async () => {
        const response = await axios.get(`${BASE_URL}/comments`)
        console.log(response.data)
        setComments(response.data)
    }
    getComments()
},[])

  useEffect(()=>{
    const getPosts = async () => {
        const response = await axios.get(`${BASE_URL}/posts`)
        console.log(response.data)
        setPosts(response.data)
    }
    getPosts()
},[])
  useEffect(()=>{
    const getFollowers = async () => {
        const response = await axios.get(`${BASE_URL}/followers`)
        console.log(response.data)
        setFollowers(response.data)
    }
    getFollowers()
},[])

  useEffect(()=>{
    console.log('the current user is ' + user)
  },[user])



  const qs = require('qs')

  const getToken = async () => {

    try{
      const token_url = "https://accounts.spotify.com/api/token"
      const data = qs.stringify({'grant_type':'client_credentials'})

      const response = await axios.post(token_url, data, {
        headers: {
          'Authorization': `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      setAccessToken(response.data.access_token)
    }catch(e){
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  
  // const handleLogOut = () => {
  //   //Reset all auth related state and clear localStorage
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }
  
  // const checkToken = async () => {
  //   const user = await CheckSession()
  //   setUser(user)
  //   toggleAuthenticated(true)
  // }
  // getToken()


  ///////////////////////////////////////

  useEffect(()=>{
    async function checkToken() {
      if (accessToken === "") {
        console.log("No established token...getting token.")
      getToken()
      } else {
        console.log("INITIAL TOKEN: ", accessToken)
      }
    }
    checkToken()
  },[accessToken])

  //////////////////////////////////////

  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])
 

  return (
    <DataContext.Provider value={{users, setUsers, comments, setComments, posts, setPosts, followers, setFollowers, accessToken, setAccessToken, songQueue, setSongQueue, user, setUser, authenticated, toggleAuthenticated }}>
    <div className="App">
      <section>
      <Nav
        authenticated={authenticated}
        user={user}
        // handleLogOut={handleLogOut}
      />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element=
          {<Feed  user={user}
                  authenticated={authenticated}/>} />
          <Route path="/profile" element=
          {<Profile  user={user}
                  authenticated={authenticated}/>} />
        </Routes>
      </main>
    </div>
    </DataContext.Provider>
  ) 
}

export default App
