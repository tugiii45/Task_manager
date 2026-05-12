import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '@/Features/AuthSlice'

function AuthForm({ mode = 'login' }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === 'login') {
      dispatch(login({ email: formData.email, password: formData.password }))
      return
    }

    // There is currently no signup action in src/Features/AuthSlice.js.
    // Keeping UI functional without dispatching undefined actions.
    // eslint-disable-next-line no-alert
    alert('Signup is not implemented yet')
  }

  return (
    <div className="auth-container">
      <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <div className="auth-toggle">
        {mode === 'login' ? (
          <p>
            New member? <Link to="/signup">Register here</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default AuthForm

