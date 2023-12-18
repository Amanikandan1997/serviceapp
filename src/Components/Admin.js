import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";
import Dashboard from "./Dashboard";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then((response) => {
        if (response) {
          setLoggedIn(true);
          console.log(response);

          //username: 'kminchelle',
          //password: '0lelplR',
          alert("login sucessfully");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during authentication:", error);
        alert("An error occurred during authentication. Please try again.");
      });
  };

  return (
    <div className="login">
      {loggedIn ? (
      
        <div className="welcome">
           <h2>Welcome, {username}!</h2>
          
          
        </div>
      ) : (
        <div className="login-form">
          <h2>Admin</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
