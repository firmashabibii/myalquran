import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Css/Register.css';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama!");
      return;
    }

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

    const isExist = users.some(u => u.email === email);
    if (isExist) {
      alert("Email sudah terdaftar!");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required />

          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>

          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>

          <button type="submit">Register</button>
        </form>

        <p className="register-login-text">
          Sudah memiliki akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
