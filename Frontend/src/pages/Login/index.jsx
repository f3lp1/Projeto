import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import { AuthContext } from '../../context/auth';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signed } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  };
  if (!signed) {
    return (
      <LayoutComponents>
        <div className="container">
          <header className="header">
            <span>Login System</span>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="button" type="submit">
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
    );
  } else {
    return <Navigate to="/home" />;
  }
};
