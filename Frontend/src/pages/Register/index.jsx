import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await api.post("/create", data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>

          <button className="button" type="submit">Sign up</button>

          <div className="footer">
            <p>Already have an account?</p>
            <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </LayoutComponents>
  );
};
