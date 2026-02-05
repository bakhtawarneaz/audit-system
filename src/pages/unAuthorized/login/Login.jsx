import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [language, setLanguage] = useState('en')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className="login-page">
      <div className="language-toggle">
        <div className="language-toggle-inner">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => toggleLanguage('en')}
          >
            English
          </button>
          <button 
            className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
            onClick={() => toggleLanguage('ar')}
          >
            عربي
          </button>
        </div>
      </div>

      <div className="login-logo">
        <div className="logo-image">
          <div className="logo-icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40L25 10L30 25L10 40Z" fill="#C53030"/>
              <path d="M20 40L35 10L40 25L20 40Z" fill="#1a365d"/>
            </svg>
          </div>
          <span className="logo-text-tahwul">TAHWUL</span>
        </div>
        <span className="logo-tagline">Enabling Digital Transformation</span>
      </div>

      <div className="login-header">
        <h1>Welcome To The Namken Digital<br/>Transformation System</h1>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email/Username"
              
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="password-input"
              
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <a href="#" className="forgot-link">Forgot Your Password?</a>

        <button type="submit" className="login-btn">
          Log In
        </button>

        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">Or You Can Enter Via</span>
          <span className="divider-line"></span>
        </div>

        <button type="button" className="national-access-btn">
          <span className="nafath-text">نفاذ</span>
          <span className="national-access-text">Login Via National Access</span>
        </button>
      </form>

      <div className="login-footer">
        <p>© All Rights Reserved - Transformation Enables Digital Transformation</p>
      </div>
    </div>
  )
}

export default Login