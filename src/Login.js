import {useState} from 'react'
import './App.css'

const Login = ({handleLogin}) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCredentials, setInvalidCredentials] = useState(false)

  const handleLoginSubmit = () => {
    // Get user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData && userData.name === name && userData.password === password) {
      handleLogin()
    } else {
      setInvalidCredentials(true)
    }
  }

  return (
    <div className="signup-container">
      <h2>User Login</h2>
      <div className="sub-container">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
      </div>
      {invalidCredentials && <p>Invalid Credentials</p>}
      <button type="button" className="sub-btn" onClick={handleLoginSubmit}>
        Login
      </button>
    </div>
  )
}
export default Login
