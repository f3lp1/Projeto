import { LayoutComponents } from "../../components/LayoutComponents"
import { Link } from "react-router-dom"
import { api } from "../../services/api"

export const Register = () => {
    const handleSaveUser = async (e) => {
      e.preventDefault()
      const data = {
        email, 
        password, 
        name,
      };

      const response = await api.post("/create", data);
      console.log(response.data);
    }
  return (
<LayoutComponents>
<div className="container">
    <header className="header">
      <span>Register System</span>
    </header>
<form onSubmit={handleSaveUser}>
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

      <button className="button" type="submit">Sign up
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
