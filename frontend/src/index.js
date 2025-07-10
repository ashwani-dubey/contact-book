import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18
import App from "./App";
import './styles.css'; // Ensure you're importing any global styles here

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
