import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {showLogin ? (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setShowLogin(false)}>Sign up</button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
