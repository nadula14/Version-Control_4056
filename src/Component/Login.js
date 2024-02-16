import "./login.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('Enter all details');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/api/v1/user/${email}`);

      if (response.data) {
        setUser(response.data);
        console.log(response.data);
        navigate('/');
      } else {
        console.log('Invalid email or password');
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={handleEmail} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onChange={handlePassword} />
        <button className="loginButton" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
