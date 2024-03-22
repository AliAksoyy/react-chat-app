import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import SocketsContextProvider from "./context/SocketsContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketsContextProvider>
          <App />
        </SocketsContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
