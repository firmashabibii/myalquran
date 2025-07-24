import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Css/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let users = [];
    try {
      const storedUsers = localStorage.getItem("users");
      users = storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
      console.error("Error parsing users data:", error);
      users = [];
    }

    if (!Array.isArray(users)) {
      users = [];
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user_login", JSON.stringify(user));
      alert("Login berhasil!");
      navigate("/beranda");
      window.location.reload();
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-hide-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="login-register-text">
          Belum memiliki akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

