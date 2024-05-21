import { Link } from 'react-router-dom'
import { LayoutComponents } from '../../components/LayoutComponents'

export const Login = () => {
    return (
      <LayoutComponents>
      <div className="container">
    <header className="header">
      <span>Login System</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder=" "
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" "
        />
      </div>

      <button className="button">
        Sign in
      </button>

      <div className="footer">
        <p>Don't have an account?</p>
        <Link to="/register">
          Sign up
          </Link>
      </div>
    </form>
  </div>
  </LayoutComponents>
    )
}