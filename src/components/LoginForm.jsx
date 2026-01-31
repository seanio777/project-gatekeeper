import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = credentials;

    if (username === "admin" && password === "1234") {
      setError(false);
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <InputField
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        error={error}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        error={error}
      />

      {error && <p style={{ color: "red" }}>Invalid credentials</p>}

      <Button text="Login" />
    </form>
  );
};

export default LoginForm;