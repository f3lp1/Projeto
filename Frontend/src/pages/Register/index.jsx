import { LayoutComponents } from "../../components/LayoutComponents"
import { Link } from "react-router-dom"

export const Register = () => {
    return (
<LayoutComponents>
<div className="container">
    <header className="header">
      <span>Register System</span>
    </header>
<form>
    <div className="inputContainer">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
        />
      </div>

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
        Sign up
      </button>

      <div className="footer">
        <p>Already have an accont?</p>
        <Link to="/login">
        Sign in
          </Link>
      </div>
    </form>
  </div>

</LayoutComponents>
    )
}