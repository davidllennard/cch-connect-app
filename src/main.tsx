import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx" // Add explicit extension
import "./styles/index.css" // Make sure the path to index.css is correct

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
