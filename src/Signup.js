import {useState} from 'react'
import './App.css'

const Signup = ({handleSignup}) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [profession, setProfession] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!name || !password || !email || !phone || !profession) {
      setError('All fields are required.')
      return
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters long.')
      return
    }

    const userData = {
      name,
      password,
      email,
      phone,
      profession,
    }
    // Saving data to local storage
    localStorage.setItem('userData', JSON.stringify(userData))
    handleSignup()
  }

  return (
    <div className="signup-container">
      <h2>User Signup</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
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
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone number:
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Profession:
          <select
            value={profession}
            onChange={e => setProfession(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
      </div>
      <button className="sub-btn" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
export default Signup
