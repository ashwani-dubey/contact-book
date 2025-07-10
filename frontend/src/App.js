import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the authentication page */}
          <Route path="/" element={<AuthPage />} />

          {/* Route for the homepage with contacts management */}
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
