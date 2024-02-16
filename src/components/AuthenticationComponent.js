// AuthenticationComponent.js
import React, { useState } from "react";

const AuthenticationComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Call the authentication API with username and password
    const token = await authenticate(username, password);
    if (token) {
      // Save token
      localStorage.setItem("token", token);
      onLogin();
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthenticationComponent;
