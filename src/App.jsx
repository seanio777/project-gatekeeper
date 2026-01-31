import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;