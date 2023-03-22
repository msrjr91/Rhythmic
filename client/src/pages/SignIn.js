import { useState } from 'react'
import { SignInUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', passwordInput: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', passwordInput: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/profile')
  } 

  return ( 
    <div className="signin-card">
      <div className="card-overlay-centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="passwordInput">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="passwordInput"
              value={formValues.passwordInput}
              required
            />
          </div>
          <button type='submit' disabled={!formValues.email || !formValues.passwordInput}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
