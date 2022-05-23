import React, { useContext, useState } from "react";
import "../assets/css/Signin.css";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const [mail, setMail] = useState("");
  const { login, autorize } = useContext(Contexto);

  const handleLogin = () => {
    if (mail !== "") {
      login(mail);
    } else {
      alert("Insert Email");
    }
  };

  return (
    <>
      {autorize === 1 ? (
        <Navigate to="/" replace />
      ) : (
        <>
          <div className="SignIn">
            <div className="SignIn-container">
              <h3>LogIn</h3>
              <div className="SignIn-div">
                <label htmlFor="mail">Mail: </label>
                <input
                  type="text"
                  placeholder="Enter your email."
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <button
                onClick={() => handleLogin()}
                className="SignIn-Accept-btn"
              >
                Log In
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
