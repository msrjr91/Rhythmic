import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProfile = (props) => {
  const URL = `http://localhost:3001/`

  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${URL}users/${props.user.user.id}`,{
      name: formValues.name,
      email: formValues.email,
      passwordInput: formValues.password,
      username: formValues.username,
      isArtist: formValues.isArtist,
      avatar: formValues.avatar
    })
    setFormValues({
      name: '',
      email: '',
      passwordInput: '',
      username: '',
      isArtist: '',
      avatar: ''
    })
    props.toggleAuthenticated(false)
    navigate('/signin')
  }

  const deleteUser = async() => {
      await axios.delete(`${URL}users/${props.user.user.id}`)
      props.toggleAuthenticated(false)
      navigate('/signin')

    }

  return (
    <div className="register-card">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="avatar"> Avatar </label>
            <input
              onChange={handleChange}
              name="avatar"
              type="text"
              placeholder="image.com"
              value={formValues.avatar}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name"> Name </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="username"> Username </label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="johnsmith123"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email"> Email </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password"> Password </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword"> Confirm Password </label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="isArtist">Artist or Fan?</label>
            <select value={formValues.isArtist}>
              <option value="true">Artist</option>
              <option value="false">Fan</option>
            </select>
          </div>
          <button
            type='submit'
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Update
          </button>
        </form>
        <button className="registerbtn" onClick={deleteUser}>Delete Profile</button>
      </div>
    </div>
  )
}

export default UpdateProfile
