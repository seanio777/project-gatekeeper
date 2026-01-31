import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  // ES6 Destructuring for State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
  const [status, setStatus] = useState({
    error: false,
    loading: false,
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    
    // Interactive: Clear error message as soon as user starts typing again
    if (status.error) setStatus((prev) => ({ ...prev, error: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, loading: true }));

    // Mocking an API call with a 1.2s delay for a realistic feel
    setTimeout(() => {
      const { username, password } = credentials;

      if (username === "admin" && password === "1234") {
        onLogin();
      } else {
        setStatus({ error: true, loading: false });
      }
    }, 1200);
  };

  return (
    <div className={`card ${status.error ? "shake" : ""}`}>
      <div className="login-header">
        <h2>SkyLine</h2>
        <p className="subtitle">Enterprise Analytics Gateway</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          name="username"
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          error={status.error}
        />

        <InputField
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          error={status.error}
        />

        {status.error && (
          <div className="error-container">
            <p className="error-text">🔒 Invalid username or password</p>
          </div>
        )}

        <Button 
          text={status.loading ? "Verifying..." : "Sign In to Dashboard"} 
        />
      </form>

      <div className="login-footer">
        <p>Forgot password? <span className="link">Contact Admin</span></p>
      </div>
    </div>
  );
};

export default LoginForm;