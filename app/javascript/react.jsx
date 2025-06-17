import React from "react"
import ReactDOM from "react-dom/client"

const Hello = () => <h1>Hello from React!</h1>

const root = ReactDOM.createRoot(
  document.getElementById("my-first-react-app")
)

root.render(<Hello />)
