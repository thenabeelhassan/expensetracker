import React, { useState } from 'react';
import '../styles/auth.css';
import API from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    const res = await API.post('/auth/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" value={name}
               onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
               onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
               onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p className='switch-auth'>Already have an account? <a href="/login"> Sign in</a></p>
      </form>
    </div>
  );
};

export default Register;
