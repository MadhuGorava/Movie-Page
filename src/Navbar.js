import './App.css'

const Navbar = ({isLoggedIn, handleLogout, showCompanyInfo, handleSignup}) => (
  <div className="nav-container">
    <nav className="nav-bar">
      <ul className="nav-list">
        {isLoggedIn ? (
          <>
            <li onClick={handleLogout}>Logout</li>
            <li onClick={showCompanyInfo}>Company Info</li>
          </>
        ) : (
          <>
            <li onClick={handleSignup}>Signup</li>
            <li>Login</li>
          </>
        )}
      </ul>
    </nav>
  </div>
)

export default Navbar
