import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Feed from './pages/Feed'
import Home from './pages/Home'
import { CheckSession } from './services/auth'
import './styles/App.css'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <section>
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element=
          {<SignIn  setUser={setUser}
                    toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element=
          {<Feed  user={user}
                  authenticated={authenticated}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
