import React from "react";
import Logocorven from "../assets/static/logo-corven.svg";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-nav">
          <Link to="/signin">
            <img className="header-nav-img" src={Logocorven} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
