import {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
import MovieList from './MovieList'
import CompanyInfo from './CompanyInfo'
import Navbar from './Navbar'

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showCompany, setShowCompany] = useState(false)

  const handleSignup = () => {
    setIsSignedUp(true)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowCompany(false)
  }

  const showCompanyInfo = () => {
    setShowCompany(true)
  }

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        showCompanyInfo={showCompanyInfo}
        handleSignup={handleSignup}
      />
      {!isSignedUp && <Signup handleSignup={handleSignup} />}
      {isSignedUp && !isLoggedIn && <Login handleLogin={handleLogin} />}
      {isLoggedIn && !showCompany && <MovieList />}
      {isLoggedIn && showCompany && <CompanyInfo />}
    </div>
  )
}

export default App
