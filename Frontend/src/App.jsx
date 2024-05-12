import "./global.css";

export function App() {
  return <div className="container">
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
          placeholder="test@gmail.com"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />
      </div>

      <a href="">Forgot password?</a>

      <button className="button">
        Login
      </button>

      <div className="footer">
        <p>Don't have an account?</p>
        <a href="#">Create an account</a>
      </div>
    </form>
  </div>

}


